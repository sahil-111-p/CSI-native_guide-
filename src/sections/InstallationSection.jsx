import React from 'react';
import InstallTabs from '../components/InstallTabs';
import CheckpointCard from '../components/CheckpointCard';
import CodeBlock from '../components/CodeBlock';

export default function InstallationSection() {
  return (
    <section id="installation" className="doc-section">
      <div className="section-header">
        <span className="section-number-badge">STEP 02</span>
        <h2 className="section-title">02. Package Installation</h2>
      </div>
      <p className="section-subtitle">
        How to add @native-workshop/ui to an existing project or existing codebase.
      </p>

      <div className="card-brutal">
        <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '12px' }}>
          Select Package Manager:
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--gray-800)', marginBottom: '16px' }}>
          Click your preferred package manager tab below to view the copy-pasteable installation command:
        </p>

        <InstallTabs
          npmCmd="npm install @native-workshop/ui react react-dom"
          yarnCmd="yarn add @native-workshop/ui react react-dom"
          pnpmCmd="pnpm add @native-workshop/ui react react-dom"
          title="Core Library Installation"
        />

        <div style={{ marginTop: '24px', padding: '16px', backgroundColor: 'var(--yellow-light)', border: 'var(--border-main)', borderRadius: 'var(--radius-sm)' }}>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', textTransform: 'uppercase', color: 'var(--black)', marginBottom: '6px' }}>
            📌 Peer Dependencies Notice
          </h4>
          <p style={{ fontSize: '0.92rem', color: 'var(--black)' }}>
            This package requires <code>react</code> (&gt;= 18.0.0) and <code>react-dom</code> (&gt;= 18.0.0) for web projects. If you are starting from a blank directory, create your project first using Step 03 below!
          </p>
        </div>
      </div>

      <div className="card-brutal card-brutal-cream">
        <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', marginBottom: '12px' }}>
          ⚡ Missed-Command Quick Recovery List (Sequential Execution)
        </h3>
        <p style={{ fontSize: '0.92rem', marginBottom: '12px' }}>
          If you fell behind during the live presentation, execute these commands in exact order:
        </p>
        <CodeBlock
          code={`# 1. Install package\nnpm install @native-workshop/ui react react-dom\n\n# 2. Verify installation in package.json\ncat package.json`}
          language="bash"
          title="Sequential Recovery Commands"
        />
      </div>

      <CheckpointCard
        step="02"
        title="Package Installation Checkpoint"
        items={[
          "The package `@native-workshop/ui` appears under dependencies in package.json",
          "No unresolved peer dependency warnings in terminal output",
          "node_modules directory is populated"
        ]}
      />
    </section>
  );
}
