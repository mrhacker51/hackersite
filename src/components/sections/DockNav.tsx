import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'HOME', icon: '⌂' },
  { id: 'skills', label: 'SKILLS', icon: '◆' },
  { id: 'projects', label: 'OPS', icon: '▣' },
  { id: 'terminal', label: 'TERMINAL', icon: '▸' },
  { id: 'contact', label: 'CONTACT', icon: '◈' },
];

const DockNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]"
    >
      <div className="flex items-center gap-1 px-3 py-2 bg-hacker-dark/90 backdrop-blur-xl border border-hacker-border/50 rounded-2xl shadow-2xl shadow-black/50">
        {navItems.map((item, i) => {
          const isActive = activeSection === item.id;
          const isHovered = hoveredIndex === i;
          const scale = isHovered ? 1.2 : isActive ? 1.1 : 1;

          return (
            <motion.button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{ scale }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className={`relative px-3 py-2 rounded-xl font-mono text-xs transition-colors ${
                isActive
                  ? 'text-hacker-green bg-hacker-green/10'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <span className="text-sm">{item.icon}</span>
              <span className="ml-1.5 hidden sm:inline">{item.label}</span>

              {isActive && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-hacker-green rounded-full"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default DockNav;
