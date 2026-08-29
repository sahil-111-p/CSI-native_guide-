import React from 'react';
import CodeBlock from '../components/CodeBlock';
import CheckpointCard from '../components/CheckpointCard';

export default function QuickStartSection() {
  return (
    <section id="quick-start" className="doc-section">
      <div className="section-header">
        <span className="section-number-badge">STEP 05</span>
        <h2 className="section-title">05. Quick Start Examples</h2>
      </div>
      <p className="section-subtitle">
        Copy-pasteable code examples for React Web and React Native Expo.
      </p>

      {/* Quick Start Web */}
      <div className="card-brutal">
        <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '8px' }}>
          🌐 React Web Quick Start (5 Minutes)
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--gray-800)', marginBottom: '12px' }}>
          This minimal example renders a Neo-Brutalist card with an interactive button and badge:
        </p>

        <CodeBlock
          code={`import React from 'react';\nimport { Button, Card, Badge, ThemeProvider } from '@native-workshop/ui';\nimport '@native-workshop/ui/dist/styles.css';\n\nexport default function App() {\n  return (\n    <ThemeProvider>\n      <div style={{ padding: '32px', backgroundColor: '#F7F7F2', minHeight: '100vh' }}>\n        <Card title="Quick Start Card" badge="v1.0.0">\n          <p style={{ marginBottom: '16px' }}>\n            Welcome to the CSI-ACE Native UI Workshop!\n          </p>\n          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>\n            <Button variant="primary" onClick={() => alert('Hello Web!')}>\n              EXPLORE COMPONENTS\n            </Button>\n            <Badge variant="secondary">STICKER BADGE</Badge>\n          </div>\n        </Card>\n      </div>\n    </ThemeProvider>\n  );\n}`}
          language="jsx"
          title="React Web Quick Start Example"
          showLineNumbers={true}
        />
      </div>

      {/* Quick Start Mobile */}
      <div className="card-brutal">
        <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '8px' }}>
          📱 React Native Expo Quick Start
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--gray-800)', marginBottom: '12px' }}>
          Import components directly from <code>@native-workshop/ui/native</code> inside your Expo project:
        </p>

        <CodeBlock
          code={`import React from 'react';\nimport { View, StyleSheet } from 'react-native';\nimport { Button, Card, Badge, Text } from '@native-workshop/ui/native';\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Card title="Expo Quick Start">\n        <Text style={styles.description}>\n          Cross-platform native components with hard offset shadows.\n        </Text>\n        <Button\n          variant="secondary"\n          onPress={() => console.log('Native Pressed')}\n        >\n          PRESS NATIVE BUTTON\n        </Button>\n      </Card>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 24,\n    justifyContent: 'center',\n    backgroundColor: '#F7F7F2',\n  },\n  description: {\n    marginBottom: 16,\n    fontSize: 16,\n  }\n});`}
          language="jsx"
          title="React Native Quick Start Example"
          showLineNumbers={true}
        />
      </div>

      <CheckpointCard
        step="05"
        title="Quick Start Checkpoint"
        items={[
          "Code compiles cleanly without syntax errors",
          "Clicking/tapping buttons triggers the alert or log message",
          "Sticker badge and cards render with high-contrast neo-brutalist borders"
        ]}
      />
    </section>
  );
}
