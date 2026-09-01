import { useState, useEffect, useRef, useCallback } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export function useLiveCode() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('connecting'); // 'connecting' | 'connected' | 'lost' | 'unsupported'
  const eventSourceRef = useRef(null);
  const reconnectTimerRef = useRef(null);
  const mountedRef = useRef(true);

  const fetchInitial = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/code`);
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      if (mountedRef.current) {
        setItems(data);
        setError(null);
      }
    } catch (err) {
      if (mountedRef.current) {
        setError('Live code is temporarily unavailable.');
      }
    } finally {
      if (mountedRef.current) setLoading(false);
    }
  }, []);

  const connectSSE = useCallback(() => {
    if (!mountedRef.current) return;

    // Clean up previous connection
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
    }

    setConnectionStatus('connecting');

    const es = new EventSource(`${API_URL}/api/code/stream`);
    eventSourceRef.current = es;

    es.onopen = () => {
      if (mountedRef.current) setConnectionStatus('connected');
    };

    es.onmessage = (event) => {
      if (!mountedRef.current) return;
      try {
        const newItem = JSON.parse(event.data);
        // 'ping' events are just keepalives
        if (newItem.type === 'ping') return;
        setItems((prev) => {
          // Avoid duplicates
          if (prev.some((i) => i._id === newItem._id)) return prev;
          return [newItem, ...prev];
        });
      } catch {
        // Malformed event — ignore
      }
    };

    es.onerror = () => {
      if (!mountedRef.current) return;
      setConnectionStatus('lost');
      es.close();
      eventSourceRef.current = null;

      // Reconnect after 5 seconds
      reconnectTimerRef.current = setTimeout(() => {
        if (mountedRef.current) {
          fetchInitial(); // Re-fetch to catch missed items
          connectSSE();
        }
      }, 5000);
    };
  }, [fetchInitial]);

  useEffect(() => {
    mountedRef.current = true;

    fetchInitial().then(() => {
      if (mountedRef.current) connectSSE();
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

  return { items, loading, error, connectionStatus };
}
