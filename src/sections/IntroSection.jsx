import React from 'react';
import CheckpointCard from '../components/CheckpointCard';
import CodeBlock from '../components/CodeBlock';

export default function IntroSection() {
  return (
    <section id="introduction" className="doc-section">
      <div className="section-header">
        <span className="section-number-badge">STEP 01</span>
        <h2 className="section-title">01. Introduction & Prerequisites</h2>
      </div>
      <p className="section-subtitle">
        Welcome to the CSI-ACE React & React Native Workshop! Learn what you need before getting started.
      </p>

      <div className="card-brutal">
        <h3 style={{ fontSize: '1.3rem', textTransform: 'uppercase', marginBottom: '12px' }}>
          What is @native-workshop/ui?
        </h3>
        <p style={{ fontSize: '1rem', color: 'var(--gray-800)', lineHeight: 1.6, marginBottom: '16px' }}>
          <strong>@native-workshop/ui</strong> is a unified component library designed to work seamlessly across both web (React + Vite) and mobile (React Native + Expo). It provides high-contrast, physical-feeling Neo-Brutalist UI components out-of-the-box.
        </p>

        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', textTransform: 'uppercase', marginTop: '20px', marginBottom: '8px' }}>
          Required Workshop Software:
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', margin: '12px 0' }}>
          <div style={{ background: 'var(--cream)', padding: '16px', border: 'var(--border-main)', borderRadius: 'var(--radius-sm)' }}>
            <span style={{ fontWeight: 800, color: 'var(--orange)', fontFamily: 'var(--font-display)' }}>01. Node.js (v18+)</span>
            <p style={{ fontSize: '0.88rem', marginTop: '4px' }}>Required to execute JavaScript tools and manage packages via npm.</p>
          </div>
          <div style={{ background: 'var(--cream)', padding: '16px', border: 'var(--border-main)', borderRadius: 'var(--radius-sm)' }}>
            <span style={{ fontWeight: 800, color: 'var(--orange)', fontFamily: 'var(--font-display)' }}>02. Code Editor</span>
            <p style={{ fontSize: '0.88rem', marginTop: '4px' }}>VS Code or Antigravity IDE recommended for workshop live coding.</p>
          </div>
          <div style={{ background: 'var(--cream)', padding: '16px', border: 'var(--border-main)', borderRadius: 'var(--radius-sm)' }}>
            <span style={{ fontWeight: 800, color: 'var(--orange)', fontFamily: 'var(--font-display)' }}>03. Expo Go App</span>
            <p style={{ fontSize: '0.88rem', marginTop: '4px' }}>Install on your mobile phone (iOS / Android) for testing React Native apps live.</p>
          </div>
        </div>

        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', textTransform: 'uppercase', marginTop: '20px', marginBottom: '8px' }}>
          Verify your local installation:
        </h4>
        <p style={{ fontSize: '0.92rem', marginBottom: '8px' }}>
          Open your terminal or command prompt and run:
        </p>
        <CodeBlock
          code={`node --version\nnpm --version`}
          language="bash"
          title="Terminal Verification Command"
        />
      </div>

      <CheckpointCard
        step="01"
        title="Prerequisites Checkpoint"
        items={[
          "Node.js (v18.0.0 or higher) is installed and prints version number",
          "npm package manager is accessible in terminal",
          "You have a code editor ready for typing project files"
        ]}
      />
    </section>
  );
}
