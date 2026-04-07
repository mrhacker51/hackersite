import HeroSection from './components/sections/HeroSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import TerminalSection from './components/sections/TerminalSection';
import ContactSection from './components/sections/ContactSection';
import DockNav from './components/sections/DockNav';
import SplashCursor from './components/reactbits/SplashCursor';

function App() {
  return (
    <div className="scanlines">
      <SplashCursor color="#00ff41" size={16} />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <TerminalSection />
      <ContactSection />
      <DockNav />
    </div>
  );
}

export default App;
