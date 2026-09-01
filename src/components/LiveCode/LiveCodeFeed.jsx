import React from 'react';
import { useLiveCode } from '../../hooks/useLiveCode';
import LiveCodeItem from './LiveCodeItem';
import PipCodeViewer from './PipCodeViewer';

function ConnectionIndicator({ status }) {
  if (status === 'connected') return null; // Silent when healthy

  const configs = {
    connecting: { dot: 'connecting', text: 'Connecting to live feed…' },
    lost: { dot: 'lost', text: 'Live connection lost — reconnecting…' },
  };

  const config = configs[status];
  if (!config) return null;

  return (
    <div className={`live-connection-status status-${status}`} role="status" aria-live="polite">
      <span className="live-connection-dot" aria-hidden="true" />
      {config.text}
    </div>
  );
}

export default function LiveCodeFeed() {
  const { items, loading, error, connectionStatus } = useLiveCode();

  return (
    <section id="live-code" className="doc-section">
      {/* Section header — matches existing pattern */}
      <div className="section-label">LIVE WORKSHOP</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <h2 className="section-title" style={{ margin: 0 }}>
          📡 Live Workshop Code
        </h2>
        <PipCodeViewer items={items} />
      </div>
      <p className="section-desc">
        Code solutions published by your instructor will appear here in real time.
        Click <strong>Copy</strong> to grab the code, or <strong>Pop Out</strong> to float it
        above your editor while you work.
      </p>

      <ConnectionIndicator status={connectionStatus} />

      {/* Loading state */}
      {loading && (
        <div className="live-code-loading" aria-label="Loading live code">
          <div className="live-code-loading-inner">
            <span className="live-code-spinner" aria-hidden="true" />
            Loading live code…
          </div>
        </div>
      )}

      {/* Error state */}
      {!loading && error && (
        <div className="info-box live-code-error" role="alert">
          <strong>⚠ Connection Error</strong>
          <p>{error}</p>
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && items.length === 0 && (
        <div className="live-code-empty">
          <div className="live-code-empty-icon" aria-hidden="true">📡</div>
          <h3 className="live-code-empty-title">No live code yet</h3>
          <p className="live-code-empty-desc">
            Your instructor's published solutions will appear here during the workshop.
            This section updates automatically — no refresh needed.
          </p>
        </div>
      )}

      {/* Live code items — newest first */}
      {!loading && !error && items.length > 0 && (
        <div className="live-code-list">
          {items.map((item) => (
            <LiveCodeItem key={item._id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
