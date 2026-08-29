import React from 'react';
import CodeBlock from '../components/CodeBlock';

const REACT_COMMANDS = [
  {
    cmd: 'npm install',
    short: 'Install dependencies',
    desc: 'Downloads all packages listed in package.json. Run this whenever you clone a project or a teammate adds new packages.',
    when: 'First time setup, or after pulling code changes.',
  },
  {
    cmd: 'npm run dev',
    short: 'Start development server',
    desc: 'Starts a live-reload local server. Changes you make in code appear instantly in the browser.',
    when: 'Every time you start working on the project.',
  },
  {
    cmd: 'npm run build',
    short: 'Build for production',
    desc: 'Creates an optimized version of your app in a dist/ folder, ready to deploy to a server.',
    when: 'When you are ready to publish or submit your project.',
  },
  {
    cmd: 'npm run preview',
    short: 'Preview production build',
    desc: 'Serves the production build locally so you can test it before deploying.',
    when: 'After running npm run build.',
  },
  {
    cmd: 'npm install <package-name>',
    short: 'Install a specific package',
    desc: 'Adds a new library to your project. Replace <package-name> with the actual package (e.g., npm install axios).',
    when: 'When the workshop asks you to add a new library.',
  },
];

export default function ReactCommandsSection() {
  return (
    <section id="react-commands" className="doc-section">
      <div className="section-label">REACT (WEB)</div>
      <h2 className="section-title">React Commands Reference</h2>
      <p className="section-desc">
        These are the commands you will use most often in a React project. Bookmark this section for quick reference.
      </p>

      <div className="commands-list">
        {REACT_COMMANDS.map((item, i) => (
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
