import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const LANGUAGES = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'jsx', label: 'JSX' },
  { value: 'tsx', label: 'TSX' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'react-native', label: 'React Native' },
  { value: 'html', label: 'HTML' },
  { value: 'css', label: 'CSS' },
  { value: 'json', label: 'JSON' },
  { value: 'bash', label: 'Bash / Shell' },
  { value: 'python', label: 'Python' },
];

const PIP_STYLES = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --orange: #F5601D;
    --yellow: #F5C518;
    --cream: #F5F5F0;
    --black: #111111;
    --white: #FFFFFF;
    --gray-700: #3D3D3D;
    --code-bg: #1A1C25;
    --border: 3px solid #111111;
    --border-thin: 2px solid #111111;
    --shadow-sm: 3px 3px 0 #111111;
    --shadow: 5px 5px 0 #111111;
    --radius: 6px;
    --font-display: 'Space Grotesk', system-ui, sans-serif;
    --font-body: 'Plus Jakarta Sans', system-ui, sans-serif;
    --font-mono: 'JetBrains Mono', Consolas, Monaco, monospace;
  }

  html, body {
    font-family: var(--font-body);
    background: var(--cream);
    color: var(--black);
    min-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }

  #pip-root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .pip-header {
    background: var(--yellow);
    border-bottom: var(--border);
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }

  .pip-live-badge {
    background: var(--black);
    color: var(--yellow);
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 2px 7px;
    border-radius: 4px;
    flex-shrink: 0;
    animation: livePulse 2s ease-in-out infinite;
  }

  @keyframes livePulse {
    0%,100% { opacity: 1; }
    50% { opacity: 0.75; }
  }

  .pip-title {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 0.88rem;
    text-transform: uppercase;
  }

  /* Admin Form Styles */
  .pip-admin-form {
    background: var(--cream);
    border-bottom: var(--border);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-shrink: 0;
  }

  .admin-form-row {
    display: flex;
    gap: 8px;
  }

  .admin-form-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .admin-form-label {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--black);
  }

  .admin-form-input {
    background: var(--white);
    border: var(--border-thin);
    border-radius: 4px;
    padding: 6px 8px;
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 600;
    width: 100%;
  }
  .admin-form-input:focus { outline: 2px solid var(--orange); outline-offset: 1px; }

  .admin-form-textarea {
    background: var(--code-bg);
    border: var(--border-thin);
    border-radius: 4px;
    padding: 8px;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    line-height: 1.5;
    color: #E2E8F0;
    resize: vertical;
    min-height: 80px;
    width: 100%;
  }
  .admin-form-textarea:focus { outline: 2px solid var(--orange); outline-offset: 1px; }

  .admin-publish-btn {
    background: var(--black);
    color: var(--white);
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 0.8rem;
    text-transform: uppercase;
    border: var(--border-thin);
    box-shadow: 2px 2px 0 var(--black);
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    align-self: flex-start;
  }
  .admin-publish-btn:hover:not(:disabled) { transform: translate(1px,1px); box-shadow: 1px 1px 0 var(--black); }
  .admin-publish-btn:disabled { opacity: 0.6; cursor: not-allowed; }

  .admin-status {
    font-size: 0.75rem;
    font-weight: 700;
    padding: 6px 10px;
    border-radius: 4px;
    margin-top: 4px;
  }
  .admin-status-success { background: #E8F5E9; border: 1px solid #2E7D32; color: #1B5E20; }
  .admin-status-error { background: #FFF3E0; border: 1px solid var(--orange); color: var(--black); }

  /* Feed Styles */
  .pip-feed {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .pip-item {
    background: var(--white);
    border: var(--border-thin);
    box-shadow: var(--shadow-sm);
    border-radius: var(--radius);
    overflow: hidden;
    animation: slideIn 0.3s ease-out;
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .pip-item-header {
    background: var(--yellow);
    border-bottom: var(--border-thin);
    padding: 6px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
  }

  .pip-item-header-left {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .pip-lang-pill {
    background: var(--black);
    color: var(--yellow);
    font-family: var(--font-mono);
    font-weight: 700;
    font-size: 0.6rem;
    padding: 2px 6px;
    border-radius: 4px;
  }

  .pip-item-title {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 0.75rem;
  }

  .pip-item-meta {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .pip-timestamp {
    font-family: var(--font-display);
    font-size: 0.65rem;
    font-weight: 700;
    color: var(--gray-700);
  }

  .pip-copy-btn {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: var(--white);
    color: var(--black);
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 0.65rem;
    text-transform: uppercase;
    border: var(--border-thin);
    box-shadow: 2px 2px 0 var(--black);
    padding: 2px 6px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 120ms ease;
  }
  .pip-copy-btn:hover { background: var(--orange); color: var(--white); transform: translate(1px,1px); box-shadow: 1px 1px 0 var(--black); }
  .pip-copy-btn.copied { background: #2E7D32; color: var(--white); }

  .pip-item-body {
    background: var(--code-bg);
    overflow-x: auto;
  }

  .pip-item-body pre {
    padding: 10px 12px;
    margin: 0;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    line-height: 1.5;
    color: #E2E8F0;
    white-space: pre;
    min-width: min-content;
  }

  .pip-empty {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    padding: 20px;
    color: var(--gray-700);
    font-family: var(--font-display);
    font-weight: 700;
    text-align: center;
  }

  .pip-empty-icon { font-size: 2rem; }
`;

function formatTime(dateStr) {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } catch {
    return '';
  }
}

function FeedItem({ item }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = item.code || '';
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pip-item">
      <div className="pip-item-header">
        <div className="pip-item-header-left">
          <span className="pip-lang-pill">{(item.language || 'code').toUpperCase()}</span>
          {item.title && <span className="pip-item-title">{item.title}</span>}
        </div>
        <div className="pip-item-meta">
          <span className="pip-timestamp">{formatTime(item.createdAt)}</span>
          <button type="button" className={`pip-copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
            {copied ? 'COPIED ✓' : 'COPY'}
          </button>
        </div>
      </div>
      <div className="pip-item-body">
        <pre><code>{item.code}</code></pre>
      </div>
    </div>
  );
}

// Inner component rendered via Portal into the PiP window
function PipInternalUI({ items, isAdmin }) {
  const feedRef = useRef(null);

  // Admin form state
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(null); // null | 'publishing' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  // Items are newest first from the hook. Reverse for chat feed (newest at bottom)
  const feedItems = [...items].reverse();

  // Auto-scroll logic
  useEffect(() => {
    const feed = feedRef.current;
    if (!feed) return;
    
    const doc = feed.ownerDocument;
    const win = doc.defaultView;
    if (!doc || !win) return;

    setTimeout(() => {
      const container = doc.documentElement;
      const isNearBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 150;
      if (isNearBottom || feedItems.length <= 1) {
        win.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
      }
    }, 50);
  }, [items]); // Only trigger when items array changes

  const handlePublish = async (e) => {
    e.preventDefault();
    if (!code.trim()) return;

    setStatus('publishing');
    setErrorMsg('');

    try {
      const res = await fetch(`${API_URL}/api/code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title.trim() || 'Untitled',
          language,
          code,
          description: description.trim(),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Server error ${res.status}`);
      }

      setStatus('success');
      // Reset form (keep language)
      setTitle('');
      setCode('');
      setDescription('');

      setTimeout(() => setStatus(null), 4000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Could not publish code.');
    }
  };

  return (
    <div id="pip-root">
      <div className="pip-header">
        <span className="pip-live-badge">● LIVE</span>
        <span className="pip-title">{isAdmin ? 'Admin Control' : 'Workshop Feed'}</span>
      </div>

      {isAdmin && (
        <form className="pip-admin-form" onSubmit={handlePublish}>
          <div className="admin-form-row">
            <div className="admin-form-field" style={{ flex: 1 }}>
              <label className="admin-form-label">Title</label>
              <input
                className="admin-form-input"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="e.g. Solution"
                maxLength={80}
              />
            </div>
            <div className="admin-form-field">
              <label className="admin-form-label">Language</label>
              <select
                className="admin-form-input"
                value={language}
                onChange={e => setLanguage(e.target.value)}
              >
                {LANGUAGES.map(l => (
                  <option key={l.value} value={l.value}>{l.label}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="admin-form-field">
            <label className="admin-form-label">Code</label>
            <textarea
              className="admin-form-textarea"
              value={code}
              onChange={e => setCode(e.target.value)}
              placeholder="Paste code here…"
              required
              spellCheck={false}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              type="submit"
              className="admin-publish-btn"
              disabled={!code.trim() || status === 'publishing'}
            >
              {status === 'publishing' ? 'Publishing…' : 'Publish Code'}
            </button>
            {status === 'success' && (
              <span className="admin-status admin-status-success">✓ Published</span>
            )}
            {status === 'error' && (
              <span className="admin-status admin-status-error">⚠ {errorMsg}</span>
            )}
          </div>
        </form>
      )}

      <div className="pip-feed" ref={feedRef}>
        {feedItems.length === 0 ? (
          <div className="pip-empty">
            <span className="pip-empty-icon">📡</span>
            <span>Waiting for instructor code…</span>
          </div>
        ) : (
          feedItems.map(item => <FeedItem key={item._id} item={item} />)
        )}
      </div>
    </div>
  );
}

export default function PipCodeViewer({ items = [], isAdmin = false, onClose }) {
  const pipWindowRef = useRef(null);
  const pipRootNodeRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isPipSupported] = useState(() => 'documentPictureInPicture' in window);

  const openPip = useCallback(async () => {
    if (!isPipSupported) return;
    
    // Do not reopen if already open
    if (pipWindowRef.current && !pipWindowRef.current.closed) {
      return;
    }

    try {
      const pipWin = await window.documentPictureInPicture.requestWindow({
        width: isAdmin ? 600 : 480,
        height: isAdmin ? 800 : 480,
      });

      pipWindowRef.current = pipWin;

      // Inject styles
      const style = pipWin.document.createElement('style');
      style.textContent = PIP_STYLES;
      pipWin.document.head.appendChild(style);

      // Inject Google Fonts link
      const fontLink = pipWin.document.createElement('link');
      fontLink.rel = 'stylesheet';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@700;800&family=Plus+Jakarta+Sans:wght@600;700&display=swap';
      pipWin.document.head.appendChild(fontLink);

      // Create root mount node
      const mountNode = pipWin.document.createElement('div');
      mountNode.style.height = '100%';
      pipWin.document.body.appendChild(mountNode);
      pipRootNodeRef.current = mountNode;

      setIsOpen(true);

      // Handle PiP close
      pipWin.addEventListener('pagehide', () => {
        pipWindowRef.current = null;
        pipRootNodeRef.current = null;
        setIsOpen(false);
        onClose?.();
      });
    } catch (err) {
      console.error('PiP failed:', err);
    }
  }, [isPipSupported, isAdmin, onClose]);

  const closePip = useCallback(() => {
    if (pipWindowRef.current && !pipWindowRef.current.closed) {
      pipWindowRef.current.close();
    }
    pipWindowRef.current = null;
    pipRootNodeRef.current = null;
    setIsOpen(false);
  }, []);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (pipWindowRef.current && !pipWindowRef.current.closed) {
        pipWindowRef.current.close();
      }
    };
  }, []);

  if (!isPipSupported) {
    return (
      <span className="pip-unsupported-note">
        Floating feed isn't supported in this browser.
      </span>
    );
  }

  return (
    <>
      <button
        type="button"
        className={`live-code-action-btn pip-btn ${isOpen ? 'pip-btn-active' : ''}`}
        onClick={isOpen ? closePip : openPip}
        aria-label={isOpen ? 'Close floating feed window' : 'Open feed in floating window'}
      >
        {isOpen ? (
          <>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="2"/>
              <line x1="9" y1="2" x2="9" y2="22"/>
            </svg>
            CLOSE PIP
          </>
        ) : (
          <>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <rect x="2" y="7" width="15" height="13" rx="2"/>
              <path d="M7 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2"/>
            </svg>
            POP OUT FEED
          </>
        )}
      </button>

      {/* Render internal UI into the PiP window using createPortal */}
      {isOpen && pipRootNodeRef.current && createPortal(
        <PipInternalUI items={items} isAdmin={isAdmin} />,
        pipRootNodeRef.current
      )}
    </>
  );
}
