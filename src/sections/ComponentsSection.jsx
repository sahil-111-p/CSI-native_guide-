import React, { useState } from 'react';
import ComponentPlayground from '../components/ComponentPlayground';
import CheckpointCard from '../components/CheckpointCard';
import CodeBlock from '../components/CodeBlock';

export default function ComponentsSection() {
  const [activeComp, setActiveComp] = useState('Button');

  const componentsList = [
    { id: 'Button', name: 'Button', desc: 'Tactile sticker-style button with hover pressed effects and hard offset shadow.' },
    { id: 'Card', name: 'Card', desc: 'Elevated Neo-Brutalist card container with Figma corner vector handles.' },
    { id: 'Badge', name: 'Badge', desc: 'Rotated sticker pills and star badges for labels and tags.' },
    { id: 'Input', name: 'Input', desc: 'High-contrast text input field with focus outline and offset box shadow.' },
    { id: 'Modal', name: 'Modal / Dialog', desc: 'Pop-up overlay modal with thick border header and backdrop overlay.' },
    { id: 'Avatar', name: 'Avatar', desc: 'User profile avatar with black outline border and online status indicator.' },
    { id: 'Typography', name: 'Typography', desc: 'Space Grotesk display headings and Plus Jakarta Sans body styles.' },
  ];

  return (
    <section id="components" className="doc-section">
      <div className="section-header">
        <span className="section-number-badge">STEP 07</span>
        <h2 className="section-title">07. Component Library Showcase</h2>
      </div>
      <p className="section-subtitle">
        Explore interactive live previews and code snippets for all available components.
      </p>

      {/* Component Navigation Chips */}
      <div className="card-brutal" style={{ padding: '16px 20px' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', marginBottom: '10px' }}>
          Select Component to Test:
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {componentsList.map((comp) => (
            <button
              key={comp.id}
              type="button"
              className={`btn-brutal btn-brutal-sm ${activeComp === comp.id ? 'btn-brutal-yellow' : 'btn-brutal-white'}`}
              onClick={() => setActiveComp(comp.id)}
            >
              {comp.name}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Playground for Selected Component */}
      <div className="card-brutal">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <h3 style={{ fontSize: '1.4rem', textTransform: 'uppercase' }}>
            {activeComp} Component
          </h3>
          <span className="sticker-badge sticker-badge-orange">LIVE PLAYGROUND</span>
        </div>
        <p style={{ fontSize: '0.95rem', color: 'var(--gray-800)', marginBottom: '16px' }}>
          {componentsList.find((c) => c.id === activeComp)?.desc}
        </p>

        {['Button', 'Card', 'Badge', 'Input'].includes(activeComp) ? (
          <ComponentPlayground componentName={activeComp} />
        ) : activeComp === 'Modal' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ background: 'var(--cream)', padding: '24px', border: 'var(--border-thick)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ background: 'var(--white)', border: 'var(--border-thick)', boxShadow: 'var(--shadow-main)', padding: '20px', borderRadius: 'var(--radius-sm)', maxWidth: '400px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', borderBottom: '2px solid var(--black)', paddingBottom: '8px' }}>
                  <h4 style={{ fontSize: '1.1rem', textTransform: 'uppercase' }}>Confirm Action</h4>
                  <button type="button" style={{ background: 'none', border: 'none', fontWeight: 800, cursor: 'pointer' }}>✕</button>
                </div>
                <p style={{ fontSize: '0.9rem', marginBottom: '16px' }}>Are you sure you want to proceed with this action?</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                  <button type="button" className="btn-brutal btn-brutal-white btn-brutal-sm">Cancel</button>
                  <button type="button" className="btn-brutal btn-brutal-sm">Confirm</button>
                </div>
              </div>
            </div>
            <CodeBlock
              code={`<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirm Action">\n  <p>Are you sure you want to proceed?</p>\n  <Button onClick={handleConfirm}>Confirm</Button>\n</Modal>`}
              language="jsx"
              title="Modal Usage Code"
            />
          </div>
        ) : activeComp === 'Avatar' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', background: 'var(--cream)', padding: '24px', border: 'var(--border-thick)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ position: 'relative', width: '56px', height: '56px', borderRadius: '50%', border: 'var(--border-thick)', backgroundColor: 'var(--yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
                SA
                <span style={{ position: 'absolute', bottom: '0', right: '0', width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#2E7D32', border: '2px solid var(--black)' }}></span>
              </div>
              <div style={{ position: 'relative', width: '56px', height: '56px', borderRadius: '50%', border: 'var(--border-thick)', backgroundColor: 'var(--orange)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
                CR
              </div>
            </div>
            <CodeBlock
              code={`<Avatar name="Sahil" status="online" size="medium" />\n<Avatar name="CSI ACE" variant="orange" size="medium" />`}
              language="jsx"
              title="Avatar Usage Code"
            />
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ background: 'var(--cream)', padding: '24px', border: 'var(--border-thick)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h1 style={{ fontSize: '2rem' }}>H1 Display Heading</h1>
              <h2 style={{ fontSize: '1.6rem' }}>H2 Section Title</h2>
              <h3 style={{ fontSize: '1.3rem' }}>H3 Sub-Heading</h3>
              <p style={{ fontSize: '1rem', color: 'var(--gray-800)' }}>Body paragraph text formatted in readable Plus Jakarta Sans font.</p>
            </div>
            <CodeBlock
              code={`<Heading level={1}>H1 Display Heading</Heading>\n<Heading level={2}>H2 Section Title</Heading>\n<Text>Body text explanation...</Text>`}
              language="jsx"
              title="Typography Usage Code"
            />
          </div>
        )}
      </div>

      <CheckpointCard
        step="07"
        title="Component Showcase Checkpoint"
        items={[
          "All interactive components respond smoothly to state changes",
          "Generated live code snippets update immediately when props are changed",
          "Component styling remains strictly responsive across desktop and mobile screen sizes"
        ]}
      />
    </section>
  );
}
