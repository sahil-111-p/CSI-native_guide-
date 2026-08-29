import React, { useState } from 'react';
import CodeBlock from './CodeBlock';

export default function ComponentPlayground({ componentName = 'Button' }) {
  // State for interactive props
  const [variant, setVariant] = useState('primary');
  const [size, setSize] = useState('medium');
  const [label, setLabel] = useState('Click Me!');
  const [disabled, setDisabled] = useState(false);
  const [badgeText, setBadgeText] = useState('NEW');

  // Generate JSX Code dynamically
  const getGeneratedCode = () => {
    switch (componentName) {
      case 'Button':
        return `<Button\n  variant="${variant}"\n  size="${size}"\n  disabled={${disabled}}\n  onPress={() => console.log('Clicked!')}\n>\n  ${label}\n</Button>`;
      case 'Card':
        return `<Card\n  title="${label}"\n  badge="${badgeText}"\n  variant="${variant}"\n>\n  <Text>Neo-brutalist card content built for React & React Native.</Text>\n</Card>`;
      case 'Badge':
        return `<Badge variant="${variant}" size="${size}">\n  ${badgeText}\n</Badge>`;
      case 'Input':
        return `<Input\n  placeholder="Enter your name..."\n  label="${label}"\n  variant="${variant}"\n  disabled={${disabled}}\n/>`;
      default:
        return `<Button variant="primary">${label}</Button>`;
    }
  };

  return (
    <div className="playground-box">
      <div className="playground-controls">
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem' }}>
          Interactive Props:
        </span>

        {/* Variant control */}
        <div className="control-group">
          <label className="control-label" htmlFor={`${componentName}-variant`}>Variant:</label>
          <select
            id={`${componentName}-variant`}
            className="control-select"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          >
            <option value="primary">primary (Orange)</option>
            <option value="secondary">secondary (Yellow)</option>
            <option value="white">white</option>
            <option value="black">black</option>
          </select>
        </div>

        {/* Size control */}
        {componentName !== 'Card' && (
          <div className="control-group">
            <label className="control-label" htmlFor={`${componentName}-size`}>Size:</label>
            <select
              id={`${componentName}-size`}
              className="control-select"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
            </select>
          </div>
        )}

        {/* Text Input control */}
        <div className="control-group">
          <label className="control-label" htmlFor={`${componentName}-label`}>Label:</label>
          <input
            id={`${componentName}-label`}
            type="text"
            className="control-input"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </div>

        {/* Disabled checkbox */}
        {(componentName === 'Button' || componentName === 'Input') && (
          <div className="control-group">
            <label className="control-label" htmlFor={`${componentName}-disabled`}>
              <input
                id={`${componentName}-disabled`}
                type="checkbox"
                checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
                style={{ marginRight: '6px' }}
              />
              Disabled
            </label>
          </div>
        )}
      </div>

      {/* Live Visual Preview */}
      <div className="playground-preview">
        {componentName === 'Button' && (
          <button
            type="button"
            className={`btn-brutal ${
              variant === 'secondary' ? 'btn-brutal-yellow' :
              variant === 'white' ? 'btn-brutal-white' :
              variant === 'black' ? 'btn-brutal-black' : ''
            } ${
              size === 'small' ? 'btn-brutal-sm' :
              size === 'large' ? 'btn-brutal-lg' : ''
            }`}
            disabled={disabled}
            style={disabled ? { opacity: 0.5, cursor: 'not-allowed', boxShadow: 'none' } : {}}
            onClick={() => alert('Button Clicked!')}
          >
            {label}
          </button>
        )}

        {componentName === 'Card' && (
          <div className={`card-brutal ${
            variant === 'secondary' ? 'card-brutal-yellow' :
            variant === 'white' ? 'card-brutal-cream' : ''
          }`} style={{ width: '100%', maxWidth: '380px' }}>
            <div className="handle-corner handle-top-left"></div>
            <div className="handle-corner handle-top-right"></div>
            <div className="handle-corner handle-bottom-left"></div>
            <div className="handle-corner handle-bottom-right"></div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <h4 style={{ fontSize: '1.2rem', textTransform: 'uppercase' }}>{label}</h4>
              <span className="sticker-badge">{badgeText}</span>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--gray-800)' }}>
              Neo-brutalist card component with hard offset shadows, thick 3px black borders, and Figma vector corner handles.
            </p>
          </div>
        )}

        {componentName === 'Badge' && (
          <span className={`sticker-badge ${
            variant === 'primary' ? 'sticker-badge-orange' :
            variant === 'white' ? 'sticker-badge-white' : ''
          }`} style={{
            fontSize: size === 'small' ? '0.75rem' : size === 'large' ? '1rem' : '0.85rem',
            padding: size === 'small' ? '3px 8px' : size === 'large' ? '8px 16px' : '5px 12px'
          }}>
            ★ {label}
          </span>
        )}

        {componentName === 'Input' && (
          <div style={{ width: '100%', maxWidth: '340px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>
              {label}
            </label>
            <input
              type="text"
              placeholder="Enter text..."
              disabled={disabled}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                padding: '10px 14px',
                border: 'var(--border-thick)',
                boxShadow: '3px 3px 0px var(--black)',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--white)',
                outline: 'none'
              }}
            />
          </div>
        )}
      </div>

      {/* Generated Code Snippet */}
      <CodeBlock
        code={getGeneratedCode()}
        language="jsx"
        title={`Live Code Snippet (${componentName})`}
      />
    </div>
  );
}
