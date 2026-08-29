import React from 'react';
import CodeBlock from '../components/CodeBlock';
import CheckpointCard from '../components/CheckpointCard';

export default function ThemingSection() {
  return (
    <section id="theming" className="doc-section">
      <div className="section-header">
        <span className="section-number-badge">STEP 06</span>
        <h2 className="section-title">06. Theme System & Customization</h2>
      </div>
      <p className="section-subtitle">
        How design tokens, colors, typography, and theme overrides work across Web and Mobile.
      </p>

      {/* Recommended Project Directory Structure */}
      <div className="card-brutal">
        <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '12px' }}>
          📁 Recommended Theme Project Structure
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--gray-800)', marginBottom: '12px' }}>
          Keep your application design tokens organized under <code>src/theme/</code>:
        </p>

        <div className="tree-box" style={{ marginBottom: '16px' }}>
          <div>src/</div>
          <div>├── theme/</div>
          <div>│   ├── colors.js <span className="tree-comment">← Color palette definitions</span></div>
          <div>│   ├── typography.js <span className="tree-comment">← Fonts & font sizes</span></div>
          <div>│   ├── spacing.js <span className="tree-comment">← Padding & margin scales</span></div>
          <div>│   └── index.js <span className="tree-comment">← Export combined theme object</span></div>
          <div>├── components/</div>
          <div>└── App.jsx</div>
        </div>
      </div>

      {/* Theme Token Code Example */}
      <div className="card-brutal">
        <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '12px' }}>
          🎨 1. Define Custom Theme Tokens
        </h3>
        <CodeBlock
          code={`// File: src/theme/index.js\nexport const customTheme = {\n  colors: {\n    primary: "#F5601D",      // Poster Bright Orange\n    secondary: "#F5C518",    // Poster Warm Yellow\n    background: "#F5F5F0",   // Poster Cream Off-White\n    text: "#111111",         // Poster Pure Black\n    white: "#FFFFFF",\n    border: "#111111",\n  },\n  spacing: {\n    xs: 4,\n    sm: 8,\n    md: 16,\n    lg: 24,\n    xl: 32,\n  },\n  shadows: {\n    sm: "3px 3px 0px #111111",\n    main: "5px 5px 0px #111111",\n    lg: "8px 8px 0px #111111",\n  },\n  borders: {\n    main: "3px solid #111111",\n    thick: "4px solid #111111",\n  },\n};`}
          language="js"
          title="File: src/theme/index.js"
          showLineNumbers={true}
        />
      </div>

      {/* Override Theme Flow */}
      <div className="card-brutal card-brutal-cream">
        <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', marginBottom: '12px' }}>
          🔄 Theme Override Flow Architecture
        </h3>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          padding: '20px',
          backgroundColor: 'var(--white)',
          border: 'var(--border-main)',
          borderRadius: 'var(--radius-sm)',
          textAlign: 'center',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '0.9rem'
        }}>
          <div style={{ background: 'var(--cream-dark)', padding: '10px 14px', border: 'var(--border-main)', borderRadius: '4px' }}>
            Default Theme
          </div>
          <span>➔</span>
          <div style={{ background: 'var(--yellow)', padding: '10px 14px', border: 'var(--border-main)', borderRadius: '4px' }}>
            Custom Tokens
          </div>
          <span>➔</span>
          <div style={{ background: 'var(--orange)', color: 'var(--white)', padding: '10px 14px', border: 'var(--border-main)', borderRadius: '4px' }}>
            ThemeProvider
          </div>
          <span>➔</span>
          <div style={{ background: 'var(--white)', padding: '10px 14px', border: 'var(--border-main)', borderRadius: '4px' }}>
            Customized UI
          </div>
        </div>
      </div>

      {/* Passing theme to Provider */}
      <div className="card-brutal">
        <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '12px' }}>
          🔌 2. Pass Custom Theme to ThemeProvider
        </h3>
        <CodeBlock
          code={`import React from 'react';\nimport { ThemeProvider, Button, Card } from '@native-workshop/ui';\nimport { customTheme } from './theme';\n\nexport default function App() {\n  return (\n    <ThemeProvider theme={customTheme}>\n      <Card title="Custom Theme Active">\n        <Button variant="primary">\n          THEMED BUTTON\n        </Button>\n      </Card>\n    </ThemeProvider>\n  );\n}`}
          language="jsx"
          title="File: src/App.jsx (ThemeProvider)"
          showLineNumbers={true}
        />
      </div>

      <CheckpointCard
        step="06"
        title="Theming Checkpoint"
        items={[
          "Custom theme object exported properly from src/theme/index.js",
          "ThemeProvider wraps app root without console warnings",
          "UI elements immediately adopt updated theme colors and border tokens"
        ]}
      />
    </section>
  );
}
