import React from 'react';
import CodeBlock from '../components/CodeBlock';

export default function ExpoPackagesSection() {
  return (
    <section id="expo-packages" className="doc-section">
      <div className="section-label">REACT NATIVE</div>
      <h2 className="section-title">Installing Packages in Expo</h2>
      <p className="section-desc">
        Expo has its own package installer. It's important to use the right one depending on what you're installing.
      </p>

      {/* The difference */}
      <div className="diff-grid">
        <div className="diff-card preferred">
          <div className="diff-header">
            ✅ USE THIS — For Expo/native packages
          </div>
          <CodeBlock code="npx expo install <package-name>" language="bash" />
          <p>Expo's installer automatically picks the correct version that's compatible with your Expo SDK. This prevents version conflicts with native modules.</p>
        </div>

        <div className="diff-card fallback">
          <div className="diff-header">
            📦 Regular npm — For JS-only packages
          </div>
          <CodeBlock code="npm install <package-name>" language="bash" />
          <p>Fine for pure JavaScript libraries (like lodash, axios, etc.) that don't involve native mobile code.</p>
        </div>
      </div>

      <div className="info-box" style={{ marginTop: '20px' }}>
        <strong>When in doubt, use <code>npx expo install</code></strong>
        <p>If you're not sure whether a package uses native code, use <code>npx expo install</code>. It's the safe default for Expo projects.</p>
      </div>

      {/* Example install commands */}
      <div className="step-block" style={{ marginTop: '24px' }}>
        <div className="step-header">
          <h3 className="step-title">Example: Installing a package</h3>
        </div>
        <div className="step-body">
          <p>If the workshop asks you to install a package, use:</p>
          <CodeBlock code="npx expo install expo-camera" language="bash" />
          <p style={{ marginTop: '8px', fontSize: '0.92rem' }}>Replace <code>expo-camera</code> with whatever package name the workshop specifies.</p>
        </div>
      </div>
    </section>
  );
}
