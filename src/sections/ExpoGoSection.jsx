import React from 'react';
import CodeBlock from '../components/CodeBlock';
import CheckpointCard from '../components/CheckpointCard';

export default function ExpoGoSection() {
  return (
    <section id="expo-go" className="doc-section">
      <div className="section-label">REACT NATIVE</div>
      <h2 className="section-title">Testing on Your Phone with Expo Go</h2>
      <p className="section-desc">
        Expo Go is a free app that lets you run your Expo project directly on your physical phone — no cable or emulator needed. This is the fastest way to test on real hardware.
      </p>

      {/* Steps */}
      <div className="step-block">
        <div className="step-header">
          <span className="step-badge">STEP 01</span>
          <h3 className="step-title">Install Expo Go on your phone</h3>
        </div>
        <div className="step-body">
          <div className="platform-badge-row">
            <a href="https://apps.apple.com/app/expo-go/id982107779" target="_blank" rel="noreferrer" className="platform-badge ios-badge">
              🍎 App Store (iOS)
            </a>
            <a href="https://play.google.com/store/apps/details?id=host.exp.exponent" target="_blank" rel="noreferrer" className="platform-badge android-badge">
              🤖 Google Play (Android)
            </a>
          </div>
        </div>
      </div>

      <div className="step-block">
        <div className="step-header">
          <span className="step-badge">STEP 02</span>
          <h3 className="step-title">Connect to the same Wi-Fi</h3>
        </div>
        <div className="step-body">
          <div className="note-box warning">
            ⚠️ <strong>Important:</strong> Your phone and your computer must be connected to the <strong>same Wi-Fi network</strong>. If they're on different networks, the QR code won't work.
          </div>
        </div>
      </div>

      <div className="step-block">
        <div className="step-header">
          <span className="step-badge">STEP 03</span>
          <h3 className="step-title">Start Expo on your computer</h3>
        </div>
        <div className="step-body">
          <div className="run-label">RUN THIS</div>
          <CodeBlock code="npx expo start" language="bash" />
          <p style={{ marginTop: '8px', fontSize: '0.92rem' }}>A QR code will appear in the terminal after Metro starts.</p>
        </div>
      </div>

      <div className="step-block">
        <div className="step-header">
          <span className="step-badge">STEP 04</span>
          <h3 className="step-title">Scan the QR code</h3>
        </div>
        <div className="step-body">
          <div className="scan-instructions">
            <div className="scan-card">
              <strong>📱 iPhone (iOS)</strong>
              <p>Open the default <strong>Camera app</strong>. Point it at the QR code. Tap the notification that appears at the top.</p>
            </div>
            <div className="scan-card">
              <strong>🤖 Android</strong>
              <p>Open the <strong>Expo Go app</strong> and tap <em>"Scan QR code"</em>. Point at the QR code in your terminal.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="step-block">
        <div className="step-header">
          <span className="step-badge">STEP 05</span>
          <h3 className="step-title">See your app on your phone</h3>
        </div>
        <div className="step-body">
          <div className="expected-label">EXPECTED RESULT</div>
          <div className="expected-output">
            Your app opens in Expo Go on your phone.<br />
            Any code changes you save on your computer<br />
            automatically reload the app on your phone.
          </div>
        </div>
      </div>

      <CheckpointCard
        title="Expo Go is working when…"
        items={[
          'Your app screen appears on your phone in Expo Go',
          'Saving a file on your computer refreshes the app on your phone',
          'No "Network error" or "Could not connect" messages',
        ]}
      />
    </section>
  );
}
