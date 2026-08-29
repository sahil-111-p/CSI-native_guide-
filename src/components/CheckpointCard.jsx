import React from 'react';
import { FourPointStar } from './DecorativeElements';

export default function CheckpointCard({ title, items = [] }) {
  return (
    <div className="checkpoint-card" role="region" aria-label={`Checkpoint: ${title}`}>
      <div className="checkpoint-header">
        <FourPointStar size={22} color="var(--orange)" />
        <span className="checkpoint-label">✅ CHECKPOINT</span>
      </div>
      {title && <p className="checkpoint-title">{title}</p>}
      <ul className="checkpoint-list">
        {items.map((item, i) => (
          <li key={i}><span className="check-icon">✓</span>{item}</li>
        ))}
      </ul>
    </div>
  );
}
