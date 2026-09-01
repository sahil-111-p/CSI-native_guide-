import React, { useState, useRef, useEffect } from 'react';

export default function AdminLogin({ onClose, onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const usernameRef = useRef(null);
  const overlayRef = useRef(null);

  // Focus username on mount
  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Small artificial delay to prevent timing attacks on the env var check
    setTimeout(() => {
      const result = onLoginSuccess(username, password);
      if (!result?.success) {
        setError(result?.error || 'Incorrect username or password.');
        setPassword('');
      }
      setLoading(false);
    }, 250);
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      className="admin-login-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-login-title"
    >
      <div className="admin-login-popup">
        {/* Header */}
        <div className="admin-login-header">
          <div className="admin-login-header-left">
            <span className="section-label" style={{ fontSize: '0.68rem' }}>ADMIN</span>
            <h2 id="admin-login-title" className="admin-login-title">Workshop Login</h2>
          </div>
          <button
            type="button"
            className="admin-login-close"
            onClick={onClose}
            aria-label="Close login panel"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <form className="admin-login-form" onSubmit={handleSubmit} noValidate>
          <p className="admin-login-desc">
            Sign in to publish live code solutions for workshop students.
          </p>

          {error && (
            <div className="admin-login-error" role="alert" aria-live="polite">
              <span>⚠</span> {error}
            </div>
          )}

          <div className="admin-form-field">
            <label htmlFor="admin-username" className="admin-form-label">Username</label>
            <input
              id="admin-username"
              type="text"
              className="admin-form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
              ref={usernameRef}
              placeholder="Enter username"
            />
          </div>

          <div className="admin-form-field">
            <label htmlFor="admin-password" className="admin-form-label">Password</label>
            <input
              id="admin-password"
              type="password"
              className="admin-form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            className="btn-primary admin-login-submit"
            disabled={loading || !username || !password}
          >
            {loading ? 'Signing in…' : 'Sign In →'}
          </button>

          <p className="admin-login-note">
            Session is stored locally and clears when you close the browser tab.
          </p>
        </form>
      </div>
    </div>
  );
}
