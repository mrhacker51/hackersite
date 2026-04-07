import GlitchText from '../reactbits/GlitchText';
import RotatingText from '../reactbits/RotatingText';
import Aurora from '../reactbits/Aurora';
import Particles from '../reactbits/Particles';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Aurora color1="#00ff41" color2="#00d4ff" color3="#8b5cf6" amplitude={1.2} speed={0.3} />
      <Particles particleCount={60} particleColor="#00ff41" speed={0.5} minSize={1} maxSize={2} />

      <div className="relative z-10 text-center px-4">
        <div className="mb-6">
          <span className="text-hacker-green font-mono text-sm tracking-widest opacity-70">
            {'// INITIALIZING SECURE CONNECTION...'}
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-glow-pulse">
          <GlitchText text="HACKER" speed={4000} />
        </h1>

        <div className="text-xl md:text-2xl text-hacker-cyan font-mono mb-8 h-8">
          {'> '}
          <RotatingText
            texts={['CYBERSECURITY', 'PENETRATION TESTING', 'RED TEAM', 'EXPLOIT DEVELOPMENT', 'MALWARE ANALYSIS']}
            rotationInterval={2500}
            mainClassName="text-hacker-cyan"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href="#projects"
            className="px-8 py-3 border border-hacker-green text-hacker-green font-mono text-sm tracking-wider hover:bg-hacker-green hover:text-hacker-dark transition-all duration-300"
          >
            [ VIEW OPERATIONS ]
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-hacker-cyan text-hacker-cyan font-mono text-sm tracking-wider hover:bg-hacker-cyan hover:text-hacker-dark transition-all duration-300"
          >
            [ ESTABLISH CONTACT ]
          </a>
        </div>

        <div className="mt-16 text-xs font-mono text-gray-600">
          <span className="text-hacker-green opacity-50">root@kali:~$</span> nmap -sV --script=vuln target
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-hacker-green/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-hacker-green rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
