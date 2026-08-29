import React from 'react';
import CodeBlock from '../components/CodeBlock';

const EXPO_COMMANDS = [
  {
    cmd: 'npx expo start',
    short: 'Start Metro Bundler',
    desc: 'Starts the Expo development server. Must be running for any device to connect to your app.',
    when: 'Every time you start working on your Expo project.',
  },
  {
    cmd: 'npx expo start --android',
    short: 'Open on Android emulator',
    desc: 'Starts Metro and opens the app directly in a connected Android emulator.',
    when: 'When you want to test on Android.',
  },
  {
    cmd: 'npx expo start --ios',
    short: 'Open on iOS Simulator',
    desc: 'Starts Metro and opens the app in iOS Simulator (macOS only).',
    when: 'When you want to test on iPhone (Mac only).',
  },
  {
    cmd: 'npx expo start --web',
    short: 'Open in browser',
    desc: 'Opens the app in your web browser using Expo Web.',
    when: 'When you want to quickly preview in a browser.',
  },
  {
    cmd: 'npx expo start --clear',
    short: 'Start with cleared cache',
    desc: 'Clears the Metro bundler cache and starts fresh. Use this if you see weird build errors.',
    when: 'When the app won\'t load or shows stale errors.',
  },
];

export default function ExpoCommandsSection() {
  return (
    <section id="expo-commands" className="doc-section">
      <div className="section-label">REACT NATIVE</div>
      <h2 className="section-title">Expo Commands Reference</h2>
      <p className="section-desc">
        Every important Expo command you may need during the workshop.
      </p>

      <div className="commands-list">
        {EXPO_COMMANDS.map((item, i) => (
          <div key={i} className="command-ref-card">
            <div className="command-ref-header">
              <span className="command-ref-short">{item.short}</span>
            </div>
            <CodeBlock code={item.cmd} language="bash" />
            <div className="command-ref-meta">
              <div className="meta-row">
                <span className="meta-key">What it does:</span>
                <span>{item.desc}</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">When to use:</span>
                <span>{item.when}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
