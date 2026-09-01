import React, { useState } from 'react';
import { useLiveCode } from '../../hooks/useLiveCode';
import PipCodeViewer from '../LiveCode/PipCodeViewer';

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

export default function AdminPanel({ onLogout }) {
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('jsx');
  const [code, setCode] = useState('');
  const [status, setStatus] = useState(null); // null | 'publishing' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const { items } = useLiveCode();

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
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Server error ${res.status}`);
      }

      setStatus('success');
      // Reset form
      setTitle('');
      setCode('');
      setLanguage('jsx');

      // Clear success indicator after 4 seconds
      setTimeout(() => setStatus(null), 4000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Could not publish code. Please try again.');
    }
  };

  return (
    <div className="admin-panel">
      {/* Panel Header */}
      <div className="admin-panel-header">
        <div className="admin-panel-header-left">
          <span className="admin-mode-badge">● ADMIN MODE</span>
          <span className="admin-panel-title">Publish Live Code</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <PipCodeViewer items={items} isAdmin={true} />
          <button
            type="button"
            className="admin-logout-btn"
            onClick={onLogout}
            aria-label="Logout from admin mode"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Publish Form */}
      <form className="admin-publish-form" onSubmit={handlePublish}>
        {/* Row: Title + Language */}
        <div className="admin-form-row">
          <div className="admin-form-field" style={{ flex: 1 }}>
            <label htmlFor="pub-title" className="admin-form-label">
              Title <span className="admin-form-optional">(optional)</span>
            </label>
            <input
              id="pub-title"
              type="text"
              className="admin-form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Button Component Solution"
              maxLength={80}
            />
          </div>

          <div className="admin-form-field" style={{ flexShrink: 0, minWidth: '150px' }}>
            <label htmlFor="pub-language" className="admin-form-label">Language</label>
            <select
              id="pub-language"
              className="admin-form-input admin-form-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {LANGUAGES.map((l) => (
                <option key={l.value} value={l.value}>{l.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Code Textarea */}
        <div className="admin-form-field">
          <label htmlFor="pub-code" className="admin-form-label">Code</label>
          <textarea
            id="pub-code"
            className="admin-form-textarea"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste your code here…"
            rows={10}
            spellCheck={false}
            required
          />
        </div>

        {/* Status messages */}
        {status === 'success' && (
          <div className="admin-status admin-status-success" role="status" aria-live="polite">
            ✓ Published successfully — students will see this instantly.
          </div>
        )}
        {status === 'error' && (
          <div className="admin-status admin-status-error" role="alert" aria-live="polite">
            ⚠ {errorMsg}
          </div>
        )}

        {/* Publish Button */}
        <button
          type="submit"
          className="btn-primary admin-publish-btn"
          disabled={!code.trim() || status === 'publishing'}
        >
          {status === 'publishing' ? (
            'Publishing…'
          ) : (
            <>📡 Publish to Students</>
          )}
        </button>
      </form>
    </div>
  );
}
