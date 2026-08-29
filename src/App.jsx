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
];

export default function App() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <div className="app-container">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className="main-wrapper">
        <Sidebar
          activeSection={activeSection}
          mobileOpen={mobileMenuOpen}
          setMobileOpen={setMobileMenuOpen}
        />

        <main className="main-content" id="main-content" tabIndex="-1">
          <HeroSection />
          <PrerequisitesSection />
          <NodeJsSection />
          <ReactSetupSection />
          <ReactStructureSection />
          <ReactCommandsSection />
          <ReactWorkflowSection />
          <ExpoSetupSection />
          <ExpoStructureSection />
          <ExpoRunSection />
          <ExpoCommandsSection />
          <ExpoPackagesSection />
          <ExpoGoSection />
          <CheatSheetSection />
          <TroubleshootingSection />
        </main>
      </div>

      <Footer />
    </div>
  );
}
