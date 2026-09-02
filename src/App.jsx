import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Sections - Getting Started
import HeroSection from './sections/HeroSection';
import PrerequisitesSection from './sections/PrerequisitesSection';
import NodeJsSection from './sections/NodeJsSection';

// Sections - React
import ReactSetupSection from './sections/ReactSetupSection';
import ReactStructureSection from './sections/ReactStructureSection';
import ReactCommandsSection from './sections/ReactCommandsSection';
import ReactWorkflowSection from './sections/ReactWorkflowSection';

// Sections - Expo
import ExpoSetupSection from './sections/ExpoSetupSection';
import ExpoStructureSection from './sections/ExpoStructureSection';
import ExpoRunSection from './sections/ExpoRunSection';
import ExpoCommandsSection from './sections/ExpoCommandsSection';
import ExpoPackagesSection from './sections/ExpoPackagesSection';
import ExpoGoSection from './sections/ExpoGoSection';

// Sections - Reference
import CheatSheetSection from './sections/CheatSheetSection';
import TroubleshootingSection from './sections/TroubleshootingSection';

// Workshop Features
import AdminLogin from './components/Admin/AdminLogin';
import AdminPanel from './components/Admin/AdminPanel';
import LiveCodeFeed from './components/LiveCode/LiveCodeFeed';
import { useAdminSession } from './hooks/useAdminSession';

import './styles/globals.css';
import './styles/components.css';

const ALL_SECTION_IDS = [
  'introduction',
  'prerequisites',
  'nodejs',
  'react',
  'react-structure',
  'react-commands',
  'react-workflow',
  'expo',
  'expo-structure',
  'expo-run',
  'expo-commands',
  'expo-packages',
  'expo-go',
  'cheatsheet',
  'troubleshooting',
  'live-code',
];

export default function App() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workshopPanelOpen, setWorkshopPanelOpen] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  const { isAdmin, login, logout } = useAdminSession();

  useEffect(() => {
    const NAV_OFFSET = 96;

    const handleScroll = () => {
      const scrollPos = window.scrollY + NAV_OFFSET + 10;
      let current = ALL_SECTION_IDS[0];

      for (const id of ALL_SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // The navbar button click handler
  const handleWorkshopClick = () => {
    if (isAdmin) {
      // Toggle the admin panel
      setShowAdminPanel((v) => !v);
    } else {
      // Open login popup
      setWorkshopPanelOpen(true);
    }
  };

  // Called by AdminLogin with { username, password }
  const handleLoginAttempt = (username, password) => {
    const result = login(username, password);
    if (result?.success) {
      setWorkshopPanelOpen(false);
      setShowAdminPanel(true);
    }
    return result;
  };

  const handleLogout = () => {
    logout();
    setShowAdminPanel(false);
  };

  return (
    <div className="app-container">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onWorkshopClick={handleWorkshopClick}
        isAdmin={isAdmin}
      />

      {/* Admin Login Popup */}
      {workshopPanelOpen && !isAdmin && (
        <AdminLogin
          onClose={() => setWorkshopPanelOpen(false)}
          onLoginSuccess={handleLoginAttempt}
        />
      )}

      {/* Admin Panel — shown when logged in and toggled open */}
      {isAdmin && showAdminPanel && (
        <div className="admin-panel-overlay" onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowAdminPanel(false);
          }
        }}>
          <AdminPanel onLogout={handleLogout} />
        </div>
      )}

      <div className="main-wrapper">
        <Sidebar
          activeSection={activeSection}
          mobileOpen={mobileMenuOpen}
          setMobileOpen={setMobileMenuOpen}
        />

        <main className="main-content" id="main-content" tabIndex="-1">
          <HeroSection />
          {/* <PrerequisitesSection />
          <NodeJsSection />
          <ReactSetupSection />
          <ReactStructureSection />
          <ReactCommandsSection />
          <ReactWorkflowSection /> */}
          <ExpoSetupSection />
          <ExpoStructureSection />
          <ExpoRunSection />
          <ExpoCommandsSection />
          <ExpoPackagesSection />
          <ExpoGoSection />
          <CheatSheetSection />
          <TroubleshootingSection />
          <LiveCodeFeed />
        </main>
      </div>

      <Footer />
    </div>
  );
}
