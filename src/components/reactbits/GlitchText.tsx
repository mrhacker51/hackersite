import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  speed?: number;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, speed = 5000 }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [displayText, setDisplayText] = useState(text);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

  const randomChars = (length: number) =>
    Array.from({ length }, () => glitchChars[Math.floor(Math.random() * glitchChars.length)]).join('');

  const triggerGlitch = useCallback(() => {
    setIsGlitching(true);
    const original = text;
    let iterations = 0;
    const maxIterations = 10;

    const interval = setInterval(() => {
      setDisplayText(
        original
          .split('')
          .map((_, i) => (Math.random() < 0.5 ? randomChars(1) : original[i]))
          .join('')
      );
      iterations++;
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(original);
        setIsGlitching(false);
      }
    }, 50);
  }, [text]);

  useEffect(() => {
    const interval = setInterval(triggerGlitch, speed);
    return () => clearInterval(interval);
  }, [triggerGlitch, speed]);

  return (
    <motion.span
      className="relative inline-block"
      whileHover={{ scale: 1.02 }}
      onClick={triggerGlitch}
    >
      <span className={`relative z-10 ${isGlitching ? 'text-hacker-green' : ''}`}>
        {displayText}
      </span>
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 -z-10 translate-x-[2px] text-hacker-red opacity-70">
            {displayText}
          </span>
          <span className="absolute top-0 left-0 -z-10 -translate-x-[2px] text-hacker-cyan opacity-70">
            {displayText}
          </span>
        </>
      )}
    </motion.span>
  );
};

export default GlitchText;
