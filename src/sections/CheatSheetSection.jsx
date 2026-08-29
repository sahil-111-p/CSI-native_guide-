import React from 'react';
import CodeBlock from '../components/CodeBlock';
import { FourPointStar } from '../components/DecorativeElements';

const SECTIONS = [
  {
    title: '🟢 Node.js',
    color: 'var(--yellow)',
    commands: [
      { label: 'Check Node version', cmd: 'node --version' },
      { label: 'Check npm version', cmd: 'npm --version' },
    ]
  },
  {
    title: '⚛️ React / Vite (Web)',
    color: 'var(--orange)',
    commands: [
      { label: 'Create React project', cmd: 'npm create vite@latest my-react-app' },
      { label: 'Enter project folder', cmd: 'cd my-react-app' },
      { label: 'Install dependencies', cmd: 'npm install' },
      { label: 'Start dev server', cmd: 'npm run dev' },
      { label: 'Build for production', cmd: 'npm run build' },
      { label: 'Preview production build', cmd: 'npm run preview' },
      { label: 'Install a package', cmd: 'npm install <package-name>' },
    ]
  },
  {
    title: '📱 Expo / React Native',
    color: 'var(--yellow)',
    commands: [
      { label: 'Create Expo project', cmd: 'npx create-expo-app@latest my-expo-app' },
      { label: 'Enter project folder', cmd: 'cd my-expo-app' },
      { label: 'Start Metro (all platforms)', cmd: 'npx expo start' },
      { label: 'Start + open on Android', cmd: 'npx expo start --android' },
      { label: 'Start + open on iOS', cmd: 'npx expo start --ios' },
      { label: 'Start + open on Web', cmd: 'npx expo start --web' },
      { label: 'Clear cache and restart', cmd: 'npx expo start --clear' },
      { label: 'Install Expo-compatible package', cmd: 'npx expo install <package-name>' },
    ]
  },
  {
    title: '📦 General npm',
    color: 'var(--orange)',
    commands: [
      { label: 'Install all dependencies', cmd: 'npm install' },
      { label: 'Install a specific package', cmd: 'npm install <package-name>' },
      { label: 'Remove a package', cmd: 'npm uninstall <package-name>' },
      { label: 'List installed packages', cmd: 'npm list' },
    ]
  },
];

export default function CheatSheetSection() {
  return (
    <section id="cheatsheet" className="doc-section">
      <div className="section-label">REFERENCE</div>
      <h2 className="section-title">
        <FourPointStar size={32} color="var(--orange)" style={{ marginRight: '10px' }} />
        Command Cheat Sheet
      </h2>
      <p className="section-desc">
        Every important command from this workshop in one place. If you need to find a command fast — <strong>this is where to look.</strong>
      </p>

      <div className="cheatsheet-wrap">
        {SECTIONS.map((section, si) => (
          <div key={si} className="cheatsheet-block" style={{ borderTopColor: section.color }}>
            <h3 className="cheatsheet-title" style={{ backgroundColor: section.color }}>{section.title}</h3>
            <div className="cheatsheet-commands">
              {section.commands.map((item, ci) => (
                <div key={ci} className="cheatsheet-row">
                  <span className="cheatsheet-label">{item.label}</span>
                  <div className="cheatsheet-code-wrap">
                    <CodeBlock code={item.cmd} language="bash" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
