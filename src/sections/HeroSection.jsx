import React from 'react';
import { FourPointStar, LightningBolt, AndroidBot, AsteriskStar, CursorDoodle, SmallArrow } from '../components/DecorativeElements';

export default function HeroSection() {
  return (
    <section id="introduction" className="doc-section hero-section">
      {/* Workshop tag badge */}
      <div className="hero-tag">
        <AsteriskStar size={16} color="var(--orange)" />
        <span>CSI ⚛ ACE — 2026 Workshop</span>
        <AndroidBot size={22} />
      </div>

      {/* Main hero card */}
      <div className="hero-card">
        {/* Floating decorations */}
        <div className="hero-deco hero-deco-star">
          <FourPointStar size={48} color="var(--yellow)" style={{ animation: 'floatSlow 4s ease-in-out infinite' }} />
        </div>
        <div className="hero-deco hero-deco-bolt">
          <LightningBolt size={36} color="#ffffff" style={{ animation: 'floatSlow 5s ease-in-out 1s infinite' }} />
        </div>
        <div className="hero-deco hero-deco-cursor">
          <CursorDoodle size={30} color="var(--yellow)" />
        </div>

        <h1 className="hero-title">
          REACT NATIVE<br />
          <span className="hero-title-box">WORKSHOP</span>
        </h1>

        <p className="hero-desc">
          This guide keeps every student on track. If you miss a command during the live session — <strong>find the step, copy the command, run it, and continue.</strong> No need to stop the instructor.
        </p>

        <div className="hero-actions">
          <a href="#prerequisites" className="btn-primary">
            START HERE →
          </a>
          <a href="#cheatsheet" className="btn-secondary">
            ⚡ CHEAT SHEET
          </a>
        </div>

        {/* Feature chips */}
        <div className="hero-chips">
          <span className="chip">📋 Copy any command</span>
          <span className="chip">✅ Step checkpoints</span>
          <span className="chip">🔧 Troubleshooting</span>
          <span className="chip">⚡ Quick reference</span>
        </div>
      </div>

      {/* How to use callout */}
      <div className="how-to-use">
        <div className="how-to-header">
          <LightningBolt size={20} color="var(--orange)" />
          <strong>HOW TO USE THIS GUIDE</strong>
        </div>
        <div className="how-to-steps">
          <div className="how-to-step">
            <span className="how-step-num">1</span>
            <span>Missed a command?</span>
          </div>
          <SmallArrow direction="right" size={18} />
          <div className="how-to-step">
            <span className="how-step-num">2</span>
            <span>Find the section</span>
          </div>
          <SmallArrow direction="right" size={18} />
          <div className="how-to-step">
            <span className="how-step-num">3</span>
            <span>Hit COPY</span>
          </div>
          <SmallArrow direction="right" size={18} />
          <div className="how-to-step">
            <span className="how-step-num">4</span>
            <span>Run it. Continue!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
