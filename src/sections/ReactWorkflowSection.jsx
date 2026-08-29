import React from 'react';
import { SmallArrow } from '../components/DecorativeElements';

const WORKFLOW_STEPS = [
  { step: 'Create Project', cmd: 'npm create vite@latest my-app', color: 'var(--orange)' },
  { step: 'Enter Folder', cmd: 'cd my-app', color: 'var(--yellow)' },
  { step: 'Install Dependencies', cmd: 'npm install', color: 'var(--orange)' },
  { step: 'Start Dev Server', cmd: 'npm run dev', color: 'var(--yellow)' },
  { step: 'Write Code', cmd: 'Edit src/App.jsx', color: 'var(--orange)', note: 'Repeat until done' },
  { step: 'Build Project', cmd: 'npm run build', color: 'var(--yellow)' },
  { step: 'Preview Build', cmd: 'npm run preview', color: 'var(--orange)' },
];

export default function ReactWorkflowSection() {
  return (
    <section id="react-workflow" className="doc-section">
      <div className="section-label">REACT (WEB)</div>
      <h2 className="section-title">Development Workflow</h2>
      <p className="section-desc">
        This is the typical sequence of steps you follow when working on a React project. Understanding this flow helps you know <em>why</em> you're running each command.
      </p>

      <div className="workflow-wrap">
        {WORKFLOW_STEPS.map((item, i) => (
          <React.Fragment key={i}>
            <div className="workflow-step" style={{ borderColor: item.color, boxShadow: `4px 4px 0 ${item.color}` }}>
              <div className="workflow-step-num" style={{ backgroundColor: item.color }}>{String(i + 1).padStart(2, '0')}</div>
              <div className="workflow-step-info">
                <strong>{item.step}</strong>
                <code className="workflow-cmd">{item.cmd}</code>
                {item.note && <span className="workflow-note">{item.note}</span>}
              </div>
            </div>
            {i < WORKFLOW_STEPS.length - 1 && (
              <div className="workflow-arrow">
                <SmallArrow direction="down" size={20} color="var(--black)" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
