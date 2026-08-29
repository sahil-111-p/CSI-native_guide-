import React from 'react';

export default function ReactStructureSection() {
  return (
    <section id="react-structure" className="doc-section">
      <div className="section-label">REACT (WEB)</div>
      <h2 className="section-title">React Project Structure</h2>
      <p className="section-desc">
        After running <code>npm create vite@latest</code>, your project folder will look like this. You don't need to understand every file — focus on the ones highlighted below.
      </p>

      <div className="tree-card">
        <div className="tree-header">📁 my-react-app/</div>
        <div className="tree-body">
          <div className="tree-line"><span className="tree-sym">├──</span> <span className="tree-folder">public/</span> <span className="tree-note">Static files (images, icons)</span></div>
          <div className="tree-line"><span className="tree-sym">├──</span> <span className="tree-folder important">src/</span> <span className="tree-important-tag">← WRITE YOUR CODE HERE</span></div>
          <div className="tree-line tree-indent"><span className="tree-sym">├──</span> <span className="tree-file important">App.jsx</span> <span className="tree-important-tag">← Main component</span></div>
          <div className="tree-line tree-indent"><span className="tree-sym">├──</span> <span className="tree-file important">main.jsx</span> <span className="tree-note">Entry point — mounts App into the page</span></div>
          <div className="tree-line tree-indent"><span className="tree-sym">└──</span> <span className="tree-file">index.css</span> <span className="tree-note">Global styles</span></div>
          <div className="tree-line"><span className="tree-sym">├──</span> <span className="tree-file important">index.html</span> <span className="tree-note">The HTML file your browser opens</span></div>
          <div className="tree-line"><span className="tree-sym">├──</span> <span className="tree-file">package.json</span> <span className="tree-note">Project config and dependency list</span></div>
          <div className="tree-line"><span className="tree-sym">└──</span> <span className="tree-file">vite.config.js</span> <span className="tree-note">Vite build configuration</span></div>
        </div>
      </div>

      <div className="file-explain-grid">
        <div className="file-explain-card primary">
          <div className="file-name">src/App.jsx</div>
          <p>This is where you write your main React component. This is the file you will spend most of your time editing during the workshop.</p>
        </div>
        <div className="file-explain-card">
          <div className="file-name">src/main.jsx</div>
          <p>This is the entry point. It takes your <code>App</code> component and renders it inside the HTML page. You rarely need to edit this.</p>
        </div>
        <div className="file-explain-card">
          <div className="file-name">package.json</div>
          <p>Lists all the packages your project depends on and the scripts you can run (like <code>npm run dev</code>). Managed automatically.</p>
        </div>
      </div>
    </section>
  );
}
