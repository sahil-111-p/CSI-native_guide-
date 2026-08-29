import React from 'react';
import CodeBlock from './CodeBlock';
import { LightningBolt } from './DecorativeElements';

export default function TroubleshootingCard({
  errorTitle,
  cause,
  solutionSteps = [],
  fixCommand = ''
}) {
  return (
    <div className="trouble-card">
      <div className="trouble-title">
        <LightningBolt size={24} color="#D32F2F" />
        <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>{errorTitle}</h4>
      </div>

      <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--gray-800)', marginBottom: '12px' }}>
        <strong>Possible Cause:</strong> {cause}
      </p>

      {solutionSteps.length > 0 && (
        <div style={{ marginBottom: '12px' }}>
          <strong style={{ fontSize: '0.9rem', textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>
            Solution Steps:
          </strong>
          <ol style={{ paddingLeft: '20px', marginTop: '6px', fontSize: '0.92rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {solutionSteps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      {fixCommand && (
        <CodeBlock
          code={fixCommand}
          language="bash"
          title="Fix Command"
        />
      )}
    </div>
  );
}
