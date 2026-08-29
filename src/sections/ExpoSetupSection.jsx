import React from 'react';
import CodeBlock from '../components/CodeBlock';
import CheckpointCard from '../components/CheckpointCard';
import MissedCommandCard from '../components/MissedCommandCard';

export default function ExpoSetupSection() {
  return (
    <section id="expo" className="doc-section">
      <div className="section-label">REACT NATIVE</div>
      <h2 className="section-title">Create an Expo Project</h2>
      <p className="section-desc">
        For this workshop, React Native apps are built using <strong>Expo</strong>. Expo is the easiest way to start a React Native project — it handles all the complex native setup for you.
      </p>

      <div className="info-box">
        <strong>What is Expo?</strong>
        <p>Expo is a framework and toolchain built on top of React Native. It lets you build iOS, Android, and web apps from a single codebase without needing Xcode or Android Studio for development.</p>
      </div>

      {/* Step 1 */}
      <div className="step-block">
        <div className="step-header">
          <span className="step-badge">STEP 01</span>
          <h3 className="step-title">Create the Expo project</h3>
        </div>
        <div className="step-body">
          <div className="run-label">RUN THIS — in your terminal</div>
          <CodeBlock code="npx create-expo-app@latest my-expo-app" language="bash" />
          <div className="cmd-explain">
            <div className="explain-row"><span className="explain-key">What it does:</span><span>Creates a new Expo project in a folder called <code>my-expo-app</code>.</span></div>
            <div className="explain-row"><span className="explain-key">npx vs npm:</span><span><code>npx</code> downloads and runs a package temporarily without installing it globally. <code>npm</code> installs packages permanently.</span></div>
          </div>
          <div className="expected-label">EXPECTED RESULT</div>
          <div className="expected-output">
            ✔ Your project is ready!<br /><br />
            To run your project, navigate to the directory and run one of the following npm commands.<br /><br />
            - cd my-expo-app<br />
            - npx expo start
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="step-block">
        <div className="step-header">
          <span className="step-badge">STEP 02</span>
          <h3 className="step-title">Enter the project folder</h3>
        </div>
        <div className="step-body">
          <div className="run-label">RUN THIS</div>
          <CodeBlock code="cd my-expo-app" language="bash" />
        </div>
      </div>

      {/* Step 3 */}
      <div className="step-block">
        <div className="step-header">
          <span className="step-badge">STEP 03</span>
          <h3 className="step-title">Start Expo</h3>
        </div>
        <div className="step-body">
          <div className="run-label">RUN THIS</div>
          <CodeBlock code="npx expo start" language="bash" />
          <div className="cmd-explain">
            <div className="explain-row"><span className="explain-key">What it does:</span><span>Starts the Metro Bundler — the development server for React Native. A QR code appears in the terminal.</span></div>
          </div>
          <div className="expected-label">EXPECTED RESULT</div>
          <div className="expected-output">
            Metro waiting on exp://....<br /><br />
            {`>`} Open on Android: press a<br />
            {`>`} Open on iOS: press i<br />
            {`>`} Open on Web: press w<br /><br />
            [A QR code appears here]
          </div>
        </div>
      </div>

      <MissedCommandCard commands={[
        'npx create-expo-app@latest my-expo-app',
        'cd my-expo-app',
        'npx expo start',
      ]} />

      <CheckpointCard
        title="Your Expo project is working when…"
        items={[
          'Terminal shows Metro bundler is running',
          'A QR code is visible in the terminal',
          'No red error messages in the terminal',
        ]}
      />
    </section>
  );
}
