import React from 'react';
import { FourPointStar, LightningBolt, AndroidBot, AsteriskStar, CursorDoodle } from './DecorativeElements';

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen, onWorkshopClick, isAdmin }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#introduction" className="nav-logo" aria-label="Back to top">
          <div className="nav-logo-icon">
            <FourPointStar size={18} color="var(--yellow)" />
          </div>
          <div className="nav-logo-text">
            <span className="nav-title">CSI ⚛ ACE</span>
            <span className="nav-sub">WORKSHOP GUIDE</span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="nav-links desktop-only" aria-label="Main navigation">
          <a href="#prerequisites">Prerequisites</a>
          <a href="#react">React</a>
          <a href="#expo">Expo</a>
          <a href="#cheatsheet">Cheat Sheet</a>
          <a href="#troubleshooting">Troubleshoot</a>
          <a href="#live-code">Live Code</a>
        </nav>

        {/* Workshop button — same visual as existing nav-badge */}
        <button
          type="button"
          className={`nav-badge workshop-nav-btn desktop-only ${isAdmin ? 'workshop-nav-btn-admin' : ''}`}
          onClick={onWorkshopClick}
          aria-label={isAdmin ? 'Workshop admin controls' : 'Open workshop admin login'}
          id="workshop-nav-btn"
        >
          {isAdmin ? '● Admin Mode' : '2026 Workshop'}
        </button>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}
