import React, { useState } from 'react';

function formatTimestamp(dateStr) {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    const time = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const today = new Date();
    const isToday =
      d.getDate() === today.getDate() &&
      d.getMonth() === today.getMonth() &&
      d.getFullYear() === today.getFullYear();
    if (isToday) return `Published ${time}`;
    return `Published ${d.toLocaleDateString([], { month: 'short', day: 'numeric' })} at ${time}`;
  } catch {
    return '';
  }
}

export default function LiveCodeItem({ item }) {
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
    <div className="live-code-item">
      {/* Item Header — styled like existing code-block-header */}
      <div className="live-code-item-header">
        <div className="live-code-item-header-left">
          <span className="live-badge">● LIVE</span>
          <span className="lang-pill">{(item.language || 'code').toUpperCase()}</span>
          {item.title && (
            <span className="code-title">{item.title}</span>
          )}
        </div>
        <span className="live-code-timestamp">
          {formatTimestamp(item.createdAt)}
        </span>
      </div>

      {/* Code Block — same dark background as existing code blocks */}
      <div className="code-block-body live-code-body">
        <pre><code>{item.code}</code></pre>
      </div>

      {/* Actions */}
      <div className="live-code-actions">
        <button
          type="button"
          className={`copy-btn live-code-action-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
          aria-label={copied ? 'Copied!' : 'Copy code to clipboard'}
        >
          {copied ? (
            <>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              COPIED ✓
            </>
          ) : (
            <>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              COPY
            </>
          )}
        </button>
      </div>
    </div>
  );
}
