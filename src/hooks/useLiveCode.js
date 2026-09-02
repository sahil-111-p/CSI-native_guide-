import { useState, useEffect, useRef, useCallback } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export function useLiveCode() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('connecting');

  const eventSourceRef = useRef(null);
  const reconnectTimerRef = useRef(null);
  const mountedRef = useRef(true);

  const fetchInitial = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/code`);

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();

      if (mountedRef.current) {
        setItems(data);
        setError(null);
      }
    } catch (err) {
      console.error('Failed to fetch live code:', err);

      if (mountedRef.current) {
        setError('Live code is temporarily unavailable.');
      }
    } finally {
      if (mountedRef.current) {
        setLoading(false);
      }
    }
  }, []);

  const connectSSE = useCallback(() => {
    if (!mountedRef.current) return;

    // Close previous connection
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
    }

    setConnectionStatus('connecting');

    const es = new EventSource(`${API_URL}/api/code/stream`);

    eventSourceRef.current = es;

    // ─────────────────────────────────────────────
    // Connected
    // ─────────────────────────────────────────────
    es.onopen = () => {
      if (mountedRef.current) {
        setConnectionStatus('connected');
        setError(null);
      }
    };

    // ─────────────────────────────────────────────
    // Receive SSE message
    // ─────────────────────────────────────────────
    es.onmessage = (event) => {
      if (!mountedRef.current) return;

      try {
        const data = JSON.parse(event.data);

        // Keepalive
        if (data.type === 'ping') {
          return;
        }

        // ─────────────────────────────────────────
        // NEW CODE PUBLISHED
        // ─────────────────────────────────────────
        if (data.type === 'publish') {
          // Remove the type property before storing
          const newItem = { ...data };
          delete newItem.type;

          setItems((prev) => {
            // Avoid duplicates
            if (prev.some((item) => item._id === newItem._id)) {
              return prev;
            }

            return [newItem, ...prev];
          });

          return;
        }

        // ─────────────────────────────────────────
        // CODE DELETED
        // ─────────────────────────────────────────
        if (data.type === 'delete') {
          setItems((prev) =>
            prev.filter((item) => item._id !== data.id)
          );

          return;
        }

      } catch (err) {
        console.error('Malformed SSE event:', err);
      }
    };

    // ─────────────────────────────────────────────
    // Connection lost
    // ─────────────────────────────────────────────
    es.onerror = () => {
      if (!mountedRef.current) return;

      setConnectionStatus('lost');

      es.close();
      eventSourceRef.current = null;

      // Prevent multiple reconnect timers
      if (reconnectTimerRef.current) {
        clearTimeout(reconnectTimerRef.current);
      }

      reconnectTimerRef.current = setTimeout(() => {
        if (!mountedRef.current) return;

        // Fetch anything we may have missed
        fetchInitial();

        // Reconnect SSE
        connectSSE();
      }, 5000);
    };
  }, [fetchInitial]);

  // ───────────────────────────────────────────────
  // Initial setup
  // ───────────────────────────────────────────────
  useEffect(() => {
    mountedRef.current = true;

    fetchInitial().then(() => {
      if (mountedRef.current) {
        connectSSE();
      }
    });

    return () => {
      mountedRef.current = false;

      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }

      if (reconnectTimerRef.current) {
        clearTimeout(reconnectTimerRef.current);
      }
    };
  }, [fetchInitial, connectSSE]);

  return {
    items,
    loading,
    error,
    connectionStatus,
  };
}