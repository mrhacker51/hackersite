import { useState, useEffect } from 'react';

interface ScrambledTextProps {
  text: string;
  scrambleSpeed?: number;
  className?: string;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  text,
  scrambleSpeed = 50,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      iteration += 1 / 3;

      if (iteration >= text.length) {
        clearInterval(interval);
      }
    }, scrambleSpeed);

    return () => clearInterval(interval);
  }, [isHovered, text, scrambleSpeed]);

  return (
    <span
      className={`cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayText}
    </span>
  );
};

export default ScrambledText;
