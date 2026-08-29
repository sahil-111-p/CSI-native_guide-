import React, { useState } from 'react';
import CodeBlock from './CodeBlock';

export default function InstallTabs({ tabs }) {
  // tabs: [{ label: 'npm', code: '...' }]
  const [active, setActive] = useState(0);

  return (
    <div className="tabs-wrap">
      <div className="tabs-bar" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={active === i}
            className={`tab-btn ${active === i ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <CodeBlock code={tabs[active].code} language="bash" />
    </div>
  );
}
