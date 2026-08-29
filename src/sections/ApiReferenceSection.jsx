import React from 'react';
import ApiTable from '../components/ApiTable';

export default function ApiReferenceSection() {
  const buttonProps = [
    { prop: 'variant', type: "'primary' | 'secondary' | 'white' | 'black'", default: "'primary'", description: "Color style variant (Orange, Yellow, White, Black)." },
    { prop: 'size', type: "'small' | 'medium' | 'large'", default: "'medium'", description: "Controls padding, font size, and border thickness." },
    { prop: 'disabled', type: 'boolean', default: 'false', description: "Disables hover effects and pointer events." },
    { prop: 'onClick / onPress', type: '() => void', default: 'undefined', description: "Callback function executed when clicked or tapped." },
    { prop: 'fullWidth', type: 'boolean', default: 'false', description: "Expands button width to 100% of parent container." }
  ];

  const cardProps = [
    { prop: 'title', type: 'string', default: 'undefined', description: "Card header title string displayed in Space Grotesk." },
    { prop: 'badge', type: 'string', default: 'undefined', description: "Optional sticker badge text displayed in top-right corner." },
    { prop: 'variant', type: "'white' | 'secondary' | 'orange'", default: "'white'", description: "Background fill style of the card container." },
    { prop: 'showHandles', type: 'boolean', default: 'true', description: "Toggles Figma vector corner handles on card corners." }
  ];

  const badgeProps = [
    { prop: 'variant', type: "'primary' | 'secondary' | 'white'", default: "'secondary'", description: "Color theme variant for the sticker badge." },
    { prop: 'size', type: "'small' | 'medium' | 'large'", default: "'medium'", description: "Size of text and padding." },
    { prop: 'pill', type: 'boolean', default: 'false', description: "Renders rounded pill badge instead of square sticker." }
  ];

  const inputProps = [
    { prop: 'label', type: 'string', default: 'undefined', description: "Label text rendered above input field." },
    { prop: 'placeholder', type: 'string', default: '""', description: "Placeholder hint text." },
    { prop: 'disabled', type: 'boolean', default: 'false', description: "Disables interaction and dims opacity." },
    { prop: 'error', type: 'string', default: 'undefined', description: "Displays red neo-brutalist error message below input." }
  ];

  return (
    <section id="api" className="doc-section">
      <div className="section-header">
        <span className="section-number-badge">STEP 08</span>
        <h2 className="section-title">08. API Reference</h2>
      </div>
      <p className="section-subtitle">
        Prop definitions, default values, and types for core components.
      </p>

      {/* Button Props */}
      <div className="card-brutal">
        <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '8px' }}>
          <code>&lt;Button /&gt;</code> Props
        </h3>
        <ApiTable propsData={buttonProps} />
      </div>

      {/* Card Props */}
      <div className="card-brutal">
        <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '8px' }}>
          <code>&lt;Card /&gt;</code> Props
        </h3>
        <ApiTable propsData={cardProps} />
      </div>

      {/* Badge Props */}
      <div className="card-brutal">
        <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '8px' }}>
          <code>&lt;Badge /&gt;</code> Props
        </h3>
        <ApiTable propsData={badgeProps} />
      </div>

      {/* Input Props */}
      <div className="card-brutal">
        <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '8px' }}>
          <code>&lt;Input /&gt;</code> Props
        </h3>
        <ApiTable propsData={inputProps} />
      </div>
    </section>
  );
}
