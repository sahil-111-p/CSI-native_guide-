import React from 'react';

const NAV_GROUPS = [
  {
    title: 'Getting Started',
    items: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'prerequisites', label: 'Prerequisites' },
      { id: 'nodejs', label: 'Node.js Setup' },
    ]
  },
  {
    title: 'React (Web)',
    items: [
      { id: 'react', label: 'Create Project' },
      { id: 'react-structure', label: 'Project Structure' },
      { id: 'react-commands', label: 'Commands' },
      { id: 'react-workflow', label: 'Workflow' },
    ]
  },
  {
    title: 'React Native',
    items: [
      { id: 'expo', label: 'Create Expo App' },
      { id: 'expo-structure', label: 'Project Structure' },
      { id: 'expo-run', label: 'Run the App' },
      { id: 'expo-commands', label: 'Expo Commands' },
      { id: 'expo-packages', label: 'Install Packages' },
      { id: 'expo-go', label: 'Expo Go (Mobile)' },
    ]
  },
  {
    title: 'Reference',
    items: [
      { id: 'cheatsheet', label: '⚡ Cheat Sheet' },
      { id: 'troubleshooting', label: '🔧 Troubleshooting' },
    ]
  }
];

export default function Sidebar({ activeSection, mobileOpen, setMobileOpen }) {
  return (
    <>
      <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`} aria-label="Documentation navigation">
        <nav>
          {NAV_GROUPS.map((group, gi) => (
            <div key={gi} className="sidebar-group">
              <p className="sidebar-group-title">{group.title}</p>
              <ul>
                {group.items.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`sidebar-link ${isActive ? 'active' : ''}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="sidebar-dot">{isActive ? '●' : '○'}</span>
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="sidebar-tip">
          <strong>🏃 Fell behind?</strong>
          <br />
          Find your step and copy the command. That's what this guide is for!
        </div>
      </aside>

      {mobileOpen && <div className="sidebar-backdrop" onClick={() => setMobileOpen(false)} />}
    </>
  );
}
