import React from 'react';

// 4-Point Star
export function FourPointStar({ size = 28, color = 'var(--yellow)', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }} aria-hidden="true">
      <path d="M50 0 C50 32 68 50 100 50 C68 50 50 68 50 100 C50 68 32 50 0 50 C32 50 50 32 50 0 Z" fill={color} stroke="#111111" strokeWidth="7" strokeLinejoin="round" />
    </svg>
  );
}

// Lightning Bolt
export function LightningBolt({ size = 28, color = 'var(--orange)', style = {} }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }} aria-hidden="true">
      <polygon points="35,0 5,45 30,45 20,80 55,32 30,32" fill={color} stroke="#111111" strokeWidth="4" strokeLinejoin="round" />
    </svg>
  );
}

// Asterisk Star
export function AsteriskStar({ size = 32, color = 'var(--yellow)', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }} aria-hidden="true">
      <g transform="translate(40,40)">
        {[0, 45, 90, 135].map((angle, idx) => (
          <rect key={idx} x="-6" y="-35" width="12" height="70" rx="6" fill={color} stroke="#111111" strokeWidth="4" transform={`rotate(${angle})`} />
        ))}
      </g>
    </svg>
  );
}

// Small Arrow
export function SmallArrow({ size = 22, direction = 'down', color = 'var(--black)', style = {} }) {
  const rotate = { down: 0, right: -90, up: 180, left: 90 }[direction] || 0;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', transform: `rotate(${rotate}deg)`, ...style }} aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

// Cursor pointer doodle
export function CursorDoodle({ size = 28, color = 'var(--yellow)', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }} aria-hidden="true">
      <polygon points="4,4 32,18 20,22 14,34" fill={color} stroke="#111111" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

// Android Robot icon
export function AndroidBot({ size = 34, style = {} }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }} aria-hidden="true">
      <line x1="25" y1="18" x2="16" y2="8" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
      <line x1="55" y1="18" x2="64" y2="8" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
      <path d="M 15 28 A 25 25 0 0 1 65 28 Z" fill="#F5C518" stroke="#111111" strokeWidth="4" />
      <rect x="30" y="20" width="5" height="5" fill="#111111" />
      <rect x="45" y="20" width="5" height="5" fill="#111111" />
      <rect x="15" y="32" width="50" height="36" rx="4" fill="#F5C518" stroke="#111111" strokeWidth="4" />
      <rect x="4" y="34" width="8" height="24" rx="4" fill="#F5C518" stroke="#111111" strokeWidth="3" />
      <rect x="68" y="34" width="8" height="24" rx="4" fill="#F5C518" stroke="#111111" strokeWidth="3" />
      <rect x="26" y="70" width="8" height="14" rx="3" fill="#F5C518" stroke="#111111" strokeWidth="3" />
      <rect x="46" y="70" width="8" height="14" rx="3" fill="#F5C518" stroke="#111111" strokeWidth="3" />
    </svg>
  );
}
