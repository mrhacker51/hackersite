import { useEffect, useState } from 'react';

interface RotatingTextProps {
  texts: string[];
  rotationInterval?: number;
  mainClassName?: string;
}

const RotatingText: React.FC<RotatingTextProps> = ({
  texts,
  rotationInterval = 2000,
  mainClassName = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsAnimating(false);
      }, 300);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  return (
    <span className={`inline-block overflow-hidden relative ${mainClassName}`}>
      <span
        className={`inline-block transition-all duration-300 ${
          isAnimating ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        {texts[currentIndex]}
      </span>
    </span>
  );
};

export default RotatingText;
