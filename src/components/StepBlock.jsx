import React from 'react';

export default function StepBlock({ number, title, children }) {
  return (
    <div className="step-block">
      <div className="step-header">
        <span className="step-badge">STEP {String(number).padStart(2, '0')}</span>
        <h3 className="step-title">{title}</h3>
      </div>
      <div className="step-body">{children}</div>
    </div>
  );
}
