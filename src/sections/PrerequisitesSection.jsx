import React from 'react';
import CodeBlock from '../components/CodeBlock';
import CheckpointCard from '../components/CheckpointCard';

export default function PrerequisitesSection() {
  return (
    <section id="prerequisites" className="doc-section">
      <div className="section-label">GETTING STARTED</div>
      <h2 className="section-title">Prerequisites</h2>
      <p className="section-desc">
        Before we start coding, make sure you have the right tools. This section lists everything you need — nothing more.
      </p>

      {/* Required */}
      <div className="prereq-group">
        <div className="prereq-group-header required">
          <span className="prereq-dot required-dot"></span>
          REQUIRED — Everyone needs these
        </div>
        <div className="prereq-grid">
          <div className="prereq-card">
            <div className="prereq-icon">🟢</div>
            <div>
              <strong>Node.js (v18 or later)</strong>
              <p>The JavaScript runtime needed to run npm and all our tools.</p>
              <a href="https://nodejs.org" target="_blank" rel="noreferrer" className="prereq-link">→ nodejs.org</a>
            </div>
          </div>
          <div className="prereq-card">
            <div className="prereq-icon">📦</div>
            <div>
              <strong>npm</strong>
              <p>Installed automatically with Node.js. Used to run commands and install packages.</p>
            </div>
          </div>
          <div className="prereq-card">
            <div className="prereq-icon">💻</div>
            <div>
              <strong>Code Editor</strong>
              <p>VS Code is recommended. Download it free from code.visualstudio.com</p>
              <a href="https://code.visualstudio.com" target="_blank" rel="noreferrer" className="prereq-link">→ code.visualstudio.com</a>
            </div>
          </div>
          <div className="prereq-card">
            <div className="prereq-icon">🌐</div>
            <div>
              <strong>Web Browser</strong>
              <p>Any modern browser (Chrome, Firefox, Edge). We'll use it to view our React app.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional / React Native specific */}
      <div className="prereq-group" style={{ marginTop: '28px' }}>
        <div className="prereq-group-header optional">
          <span className="prereq-dot optional-dot"></span>
          FOR REACT NATIVE / EXPO
        </div>
        <div className="prereq-grid">
          <div className="prereq-card">
            <div className="prereq-icon">📱</div>
            <div>
              <strong>Expo Go App</strong>
              <p>Install on your physical phone (iOS or Android). Used to preview your app live.</p>
              <a href="https://expo.dev/go" target="_blank" rel="noreferrer" className="prereq-link">→ expo.dev/go</a>
            </div>
          </div>
          <div className="prereq-card optional-card">
            <div className="prereq-icon">🤖</div>
            <div>
              <strong>Android Emulator</strong>
              <p className="optional-tag">OPTIONAL</p>
              <p>Only needed if the workshop specifies using an emulator instead of a physical device.</p>
            </div>
          </div>
        </div>
      </div>

      <CheckpointCard
        title="You're ready when…"
        items={[
          'You have Node.js installed on your computer',
          'You have a code editor open and ready',
          "If you're on the React Native track: Expo Go is installed on your phone",
        ]}
      />
    </section>
  );
}
