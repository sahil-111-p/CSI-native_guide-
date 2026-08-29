import React from 'react';
import CodeBlock from '../components/CodeBlock';
import CheckpointCard from '../components/CheckpointCard';

export default function ExpoRunSection() {
  return (
    <section id="expo-run" className="doc-section">
      <div className="section-label">REACT NATIVE</div>
      <h2 className="section-title">Run Your Expo App</h2>
      <p className="section-desc">
        Once your project is created, use these commands to open your app on different platforms.
      </p>

      {/* Start Expo */}
      <div className="step-block">
        <div className="step-header">
          <span className="step-badge">START</span>
          <h3 className="step-title">Start Metro Bundler</h3>
        </div>
        <div className="step-body">
          <CodeBlock code="npx expo start" language="bash" />
          <p style={{ marginTop: '8px', fontSize: '0.92rem', color: 'var(--gray-700)' }}>Starts the Expo development server. Then use keyboard shortcuts or flags below to open on your preferred platform.</p>
        </div>
      </div>

      {/* Platform Cards */}
      <div className="platform-grid">
        <div className="platform-card android">
          <div className="platform-header">🤖 Android</div>
          <p>Opens the app in an Android emulator (must be running)</p>
          <CodeBlock code="npx expo start --android" language="bash" />
          <div className="keyboard-hint">Or press <kbd>a</kbd> in the terminal</div>
        </div>

        <div className="platform-card ios">
          <div className="platform-header">🍎 iOS</div>
          <p>Opens the app in iOS Simulator (macOS only)</p>
          <CodeBlock code="npx expo start --ios" language="bash" />
          <div className="keyboard-hint">Or press <kbd>i</kbd> in the terminal</div>
        </div>

        <div className="platform-card web">
          <div className="platform-header">🌐 Web</div>
          <p>Opens the app in your browser at localhost</p>
          <CodeBlock code="npx expo start --web" language="bash" />
          <div className="keyboard-hint">Or press <kbd>w</kbd> in the terminal</div>
        </div>
      </div>

      {/* Keyboard Shortcuts */}
      <div className="card-brutal" style={{ marginTop: '16px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '12px', fontSize: '1.05rem' }}>
          ⌨️ Terminal Keyboard Shortcuts (while Metro is running)
        </h3>
        <div className="shortcuts-grid">
          <div className="shortcut"><kbd>a</kbd><span>Open on Android</span></div>
          <div className="shortcut"><kbd>i</kbd><span>Open on iOS</span></div>
          <div className="shortcut"><kbd>w</kbd><span>Open on Web</span></div>
          <div className="shortcut"><kbd>r</kbd><span>Reload the app</span></div>
          <div className="shortcut"><kbd>m</kbd><span>Open Developer Menu</span></div>
          <div className="shortcut"><kbd>Ctrl+C</kbd><span>Stop the server</span></div>
        </div>
      </div>

      <CheckpointCard
        title="Your app is running when…"
        items={[
          'Pressing a, i, or w opens the app on that platform',
          'The Expo Go app shows a QR code screen for mobile testing',
          'Changes to code appear automatically after saving',
        ]}
      />
    </section>
  );
}
