import React, { useState } from 'react';
import CodeBlock from '../components/CodeBlock';

const ERRORS = [
  {
    id: 'node-not-recognized',
    title: "'node' is not recognized as an internal or external command",
    platform: 'Windows',
    why: 'Node.js was installed but the PATH environment variable wasn\'t updated, so your terminal can\'t find it.',
    steps: [
      'Close your terminal completely (don\'t just open a new tab — fully exit it)',
      'Reopen the terminal and try again',
      'If still failing, re-run the Node.js installer and check the "Add to PATH" option',
      'Restart your computer as a last resort',
    ],
    fix: 'node --version',
    expectedAfterFix: 'v22.x.x',
  },
  {
    id: 'npm-not-recognized',
    title: "'npm' is not recognized",
    platform: 'All',
    why: 'Same root cause as node not recognized — npm comes with Node.js and fails when Node is not on PATH.',
    steps: [
      'Follow the same steps as the "node not recognized" fix above',
      'npm is bundled with Node.js, so fixing Node will fix npm too',
    ],
    fix: 'npm --version',
    expectedAfterFix: '10.x.x',
  },
  {
    id: 'wrong-directory',
    title: "Command works but wrong project is running / files not found",
    platform: 'All',
    why: 'You are in the wrong folder. All npm/npx commands must be run inside your project folder.',
    steps: [
      'Check what folder you\'re in: run pwd (Mac/Linux) or cd (Windows)',
      'Navigate into your project: cd my-react-app or cd my-expo-app',
      'Run your command again',
    ],
    fix: 'cd my-react-app',
    expectedAfterFix: 'Your terminal prompt changes to show the project folder name',
  },
  {
    id: 'port-in-use',
    title: "Error: Port 5173 or 8081 is already in use",
    platform: 'All',
    why: 'Another development server is already running on that port — usually from a previous session that wasn\'t stopped.',
    steps: [
      'Find the other terminal window that\'s running the server and press Ctrl+C to stop it',
      'Or start on a different port:',
    ],
    fix: 'npm run dev -- --port 3000',
    expectedAfterFix: 'Server starts on http://localhost:3000/',
  },
  {
    id: 'expo-not-starting',
    title: "Expo Metro Bundler won't start or is stuck",
    platform: 'All',
    why: 'Stale Metro cache or corrupted node_modules can prevent Expo from starting correctly.',
    steps: [
      'Stop the existing process with Ctrl+C',
      'Run with the --clear flag to wipe the cache:',
    ],
    fix: 'npx expo start --clear',
    expectedAfterFix: 'Metro starts fresh and QR code appears',
  },
  {
    id: 'expo-go-not-connecting',
    title: "Expo Go shows 'Network response timed out' or can't connect",
    platform: 'Mobile',
    why: 'Your phone and computer are on different Wi-Fi networks, or a firewall is blocking the connection.',
    steps: [
      'Check that BOTH your phone and computer are on the SAME Wi-Fi network',
      'Disable any VPN on your phone or computer',
      'If still failing, try the tunnel mode:',
    ],
    fix: 'npx expo start --tunnel',
    expectedAfterFix: 'A tunnel URL appears — scan this QR code instead',
  },
  {
    id: 'dependencies-not-installed',
    title: "Cannot find module '...' or 'Module not found' error",
    platform: 'All',
    why: 'You haven\'t run npm install yet, or node_modules was deleted.',
    steps: [
      'Make sure you\'re inside your project folder',
      'Run npm install to install all dependencies:',
    ],
    fix: 'npm install',
    expectedAfterFix: 'added X packages in Xs — then try running your command again',
  },
];

export default function TroubleshootingSection() {
  const [open, setOpen] = useState(null);

  return (
    <section id="troubleshooting" className="doc-section">
      <div className="section-label">REFERENCE</div>
      <h2 className="section-title">🔧 Troubleshooting</h2>
      <p className="section-desc">
        Something went wrong? Find the error message below, follow the steps, and get back on track.
      </p>

      <div className="trouble-list">
        {ERRORS.map((err, i) => (
          <div key={err.id} className={`trouble-item ${open === i ? 'open' : ''}`}>
            <button
              type="button"
              className="trouble-toggle"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="trouble-title-text">
                <span className="trouble-icon">⚠️</span>
                {err.title}
              </span>
              <span className="trouble-arrow">{open === i ? '▲' : '▼'}</span>
            </button>

            {open === i && (
              <div className="trouble-body">
                <div className="trouble-why">
                  <strong>Why it happens:</strong>
                  <p>{err.why}</p>
                </div>

                <div className="trouble-solution">
                  <strong>Solution steps:</strong>
                  <ol>
                    {err.steps.map((step, si) => (
                      <li key={si}>{step}</li>
                    ))}
                  </ol>
                </div>

                <div className="run-label">RUN THIS TO FIX IT</div>
                <CodeBlock code={err.fix} language="bash" />

                {err.expectedAfterFix && (
                  <>
                    <div className="expected-label">EXPECTED RESULT AFTER FIX</div>
                    <div className="expected-output">{err.expectedAfterFix}</div>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
