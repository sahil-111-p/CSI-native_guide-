import React from 'react';

export default function ExpoStructureSection() {
  return (
    <section id="expo-structure" className="doc-section">
      <div className="section-label">REACT NATIVE</div>
      <h2 className="section-title">Expo Project Structure</h2>
      <p className="section-desc">
        After creating your Expo project, here's what the folder structure looks like and what each important file does.
      </p>

      <div className="tree-card">
        <div className="tree-header">📁 my-expo-app/</div>
        <div className="tree-body">
          <div className="tree-line"><span className="tree-sym">├──</span> <span className="tree-folder important">app/</span> <span className="tree-important-tag">← WRITE YOUR SCREENS HERE</span></div>
          <div className="tree-line tree-indent"><span className="tree-sym">├──</span> <span className="tree-file important">index.tsx</span> <span className="tree-note">Home screen</span></div>
          <div className="tree-line tree-indent"><span className="tree-sym">└──</span> <span className="tree-file">_layout.tsx</span> <span className="tree-note">Root layout (navigation wrapper)</span></div>
          <div className="tree-line"><span className="tree-sym">├──</span> <span className="tree-folder">assets/</span> <span className="tree-note">Images, fonts, icons</span></div>
          <div className="tree-line"><span className="tree-sym">├──</span> <span className="tree-folder">components/</span> <span className="tree-note">Reusable UI components</span></div>
          <div className="tree-line"><span className="tree-sym">├──</span> <span className="tree-file important">app.json</span> <span className="tree-note">Expo configuration (app name, icons, permissions)</span></div>
          <div className="tree-line"><span className="tree-sym">├──</span> <span className="tree-file">package.json</span> <span className="tree-note">Dependency list and scripts</span></div>
          <div className="tree-line"><span className="tree-sym">└──</span> <span className="tree-file">tsconfig.json</span> <span className="tree-note">TypeScript config (can ignore for now)</span></div>
        </div>
      </div>

      <div className="note-box">
        💡 <strong>New to Expo Router?</strong> The <code>app/</code> folder uses file-based routing — each file becomes a screen in your app. <code>app/index.tsx</code> is your home screen.
      </div>

      <div className="file-explain-grid">
        <div className="file-explain-card primary">
          <div className="file-name">app/index.tsx</div>
          <p>Your home screen. This is the first thing users see when they open your app. Edit this to change what appears on screen.</p>
        </div>
        <div className="file-explain-card">
          <div className="file-name">app.json</div>
          <p>Controls your app's name, bundle ID, icon, splash screen, and permissions. You may edit this during the workshop.</p>
        </div>
        <div className="file-explain-card">
          <div className="file-name">package.json</div>
          <p>Lists all installed packages. Managed automatically when you run <code>npx expo install</code> or <code>npm install</code>.</p>
        </div>
      </div>
    </section>
  );
}
