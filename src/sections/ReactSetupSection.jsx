import React from 'react';
import CodeBlock from '../components/CodeBlock';
import CheckpointCard from '../components/CheckpointCard';
import MissedCommandCard from '../components/MissedCommandCard';

export default function ReactSetupSection() {
  return (
    <section id="react" className="doc-section">
      <div className="section-label">REACT (WEB)</div>
      <h2 className="section-title">Create a React Project</h2>
      <p className="section-desc">
        We use <strong>Vite</strong> to create React projects. Vite is a fast modern build tool — much faster than the old Create React App.
      </p>

      {/* Step 1 */}
      <div className="step-block">
        <div className="step-header">
          <span className="step-badge">STEP 01</span>
          <h3 className="step-title">Create the project</h3>
        </div>
        <div className="step-body">
          <div className="run-label">RUN THIS — in your terminal</div>
          <CodeBlock code="npm create vite@latest my-react-app" language="bash" />

          <div className="cmd-explain">
            <div className="explain-row"><span className="explain-key">What it does:</span><span>Creates a new folder called <code>my-react-app</code> with a ready-to-run React project inside it.</span></div>
            <div className="explain-row"><span className="explain-key">Run it in:</span><span>Any folder where you want your project to live (e.g., Desktop or Documents).</span></div>
          </div>

          <div className="note-box">
            💡 When Vite asks <strong>"Select a framework"</strong> → choose <strong>React</strong><br />
            When it asks <strong>"Select a variant"</strong> → choose <strong>JavaScript</strong>
          </div>

          <div className="expected-label">EXPECTED RESULT</div>
          <div className="expected-output">
            ✔ Project created in ./my-react-app<br />
            Done. Now run:<br /><br />
            {"  "}cd my-react-app<br />
            {"  "}npm install<br />
            {"  "}npm run dev
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="step-block">
        <div className="step-header">
          <span className="step-badge">STEP 02</span>
          <h3 className="step-title">Enter the project folder</h3>
        </div>
        <div className="step-body">
          <div className="run-label">RUN THIS</div>
          <CodeBlock code="cd my-react-app" language="bash" />
          <div className="cmd-explain">
            <div className="explain-row"><span className="explain-key">What it does:</span><span><code>cd</code> means "change directory". It moves your terminal inside the new project folder.</span></div>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="step-block">
        <div className="step-header">
          <span className="step-badge">STEP 03</span>
          <h3 className="step-title">Install dependencies</h3>
        </div>
        <div className="step-body">
          <div className="run-label">RUN THIS</div>
          <CodeBlock code="npm install" language="bash" />
          <div className="cmd-explain">
            <div className="explain-row"><span className="explain-key">What it does:</span><span>Downloads all the packages listed in <code>package.json</code> into a <code>node_modules</code> folder. This may take 30–60 seconds.</span></div>
          </div>
          <div className="expected-label">EXPECTED RESULT</div>
          <div className="expected-output">added 123 packages in 45s</div>
        </div>
      </div>

      {/* Step 4 */}
      <div className="step-block">
        <div className="step-header">
          <span className="step-badge">STEP 04</span>
          <h3 className="step-title">Start the development server</h3>
        </div>
        <div className="step-body">
          <div className="run-label">RUN THIS</div>
          <CodeBlock code="npm run dev" language="bash" />
          <div className="cmd-explain">
            <div className="explain-row"><span className="explain-key">What it does:</span><span>Starts a local server so you can see your React app live in the browser. Changes you make in code automatically appear without refreshing.</span></div>
          </div>
          <div className="expected-label">EXPECTED RESULT</div>
          <div className="expected-output">
            VITE v5.x.x  ready in 350 ms<br /><br />
            {"  "}➜  Local:   http://localhost:5173/<br />
            {"  "}➜  Network: use --host to expose
          </div>
          <div className="note-box">
            🌐 Open <strong>http://localhost:5173/</strong> in your browser. You should see the Vite + React welcome page.
          </div>
        </div>
      </div>

      <MissedCommandCard commands={[
        'npm create vite@latest my-react-app',
        'cd my-react-app',
        'npm install',
        'npm run dev',
      ]} />

      <CheckpointCard
        title="Your React project is working when…"
        items={[
          'Terminal shows "Local: http://localhost:5173/"',
          'Opening that URL in your browser shows a Vite + React page',
          'Editing src/App.jsx updates the browser automatically',
        ]}
      />
    </section>
  );
}
