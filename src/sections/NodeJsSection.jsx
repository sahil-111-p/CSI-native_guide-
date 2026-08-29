import React from 'react';
import CodeBlock from '../components/CodeBlock';
import CheckpointCard from '../components/CheckpointCard';

export default function NodeJsSection() {
  return (
    <section id="nodejs" className="doc-section">
      <div className="section-label">GETTING STARTED</div>
      <h2 className="section-title">Node.js Setup</h2>
      <p className="section-desc">
        Node.js lets you run JavaScript outside the browser — it's the engine that powers npm, Vite, and Expo. You need it before anything else works.
      </p>

      <div className="info-box">
        <strong>What is npm?</strong>
        <p>npm stands for Node Package Manager. It comes bundled with Node.js and is the command you use to create projects, install libraries, and run scripts.</p>
      </div>

      {/* Install Node.js */}
      <div className="step-block">
        <div className="step-header">
          <span className="step-badge">STEP 01</span>
          <h3 className="step-title">Install Node.js</h3>
        </div>
        <div className="step-body">
          <p>Go to <a href="https://nodejs.org" target="_blank" rel="noreferrer" className="text-link">nodejs.org</a> and download the <strong>LTS version</strong> (Long Term Support — the stable one). Run the installer and follow the defaults.</p>
          <div className="note-box">
            💡 <strong>Tip:</strong> If you're on Windows, check the box that says <em>"Add to PATH"</em> during installation. This lets you run node and npm from any terminal.
          </div>
        </div>
      </div>

      {/* Verify install */}
      <div className="step-block">
        <div className="step-header">
          <span className="step-badge">STEP 02</span>
          <h3 className="step-title">Verify Your Installation</h3>
        </div>
        <div className="step-body">
          <p>Open a <strong>new</strong> terminal window and run these two commands:</p>

          <div className="run-label">RUN THIS</div>
          <CodeBlock code="node --version" language="bash" title="Check Node.js version" />

          <div className="expected-label">EXPECTED OUTPUT</div>
          <div className="expected-output">v22.x.x  (or v18.x.x or higher)</div>

          <div className="run-label" style={{ marginTop: '20px' }}>THEN RUN THIS</div>
          <CodeBlock code="npm --version" language="bash" title="Check npm version" />

          <div className="expected-label">EXPECTED OUTPUT</div>
          <div className="expected-output">10.x.x  (or higher)</div>

          <div className="note-box warning">
            ⚠️ <strong>Not working?</strong> Close your terminal completely and reopen it. If it still doesn't work, see the <a href="#troubleshooting" className="text-link">Troubleshooting section</a>.
          </div>
        </div>
      </div>

      <CheckpointCard
        title="Node.js is ready when both commands return a version number"
        items={[
          'node --version prints something like v22.0.0',
          'npm --version prints something like 10.0.0',
          'No "not recognized" or "command not found" errors',
        ]}
      />
    </section>
  );
}
