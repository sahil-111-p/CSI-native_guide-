import React from 'react';
import { LightningBolt } from './DecorativeElements';

export default function MissedCommandCard({ commands = [] }) {
  return (
    <div className="missed-card">
      <div className="missed-header">
        <LightningBolt size={20} color="var(--orange)" />
        <span>MISSED A COMMAND? — Run these in order:</span>
      </div>
      <ol className="missed-list">
        {commands.map((cmd, i) => (
          <li key={i}>
            <span className="missed-num">{i + 1}.</span>
            <code className="missed-code">{cmd}</code>
          </li>
        ))}
      </ol>
    </div>
  );
}
