import React from 'react';
import { FourPointStar, AndroidBot } from './DecorativeElements';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div className="nav-logo-icon">
              <FourPointStar size={18} color="var(--yellow)" />
            </div>
            <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}>CSI ⚛ ACE</strong>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#555', maxWidth: '320px' }}>
            React Native Workshop 2026 — Documentation guide to help every student follow along.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Getting Started</h4>
            <a href="#prerequisites">Prerequisites</a>
            <a href="#nodejs">Node.js Setup</a>
          </div>
          <div className="footer-col">
            <h4>React</h4>
            <a href="#react">Create Project</a>
            <a href="#react-commands">Commands</a>
            <a href="#react-workflow">Workflow</a>
          </div>
          <div className="footer-col">
            <h4>React Native</h4>
            <a href="#expo">Expo Setup</a>
            <a href="#expo-run">Run the App</a>
            <a href="#expo-go">Expo Go</a>
          </div>
          <div className="footer-col">
            <h4>Reference</h4>
            <a href="#cheatsheet">Cheat Sheet</a>
            <a href="#troubleshooting">Troubleshooting</a>
            <a href="#live-code">Live Code</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AndroidBot size={20} />
          <span>© 2026 CSI-ACE. Workshop Documentation Guide.</span>
        </div>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', color: 'var(--orange)', fontWeight: 700 }}>
          Made for Workshop Students ❤️
        </span>
      </div>
    </footer>
  );
}
