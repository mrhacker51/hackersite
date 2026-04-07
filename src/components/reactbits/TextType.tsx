import { useState, useEffect, useRef } from 'react';

interface TextTypeProps {
  text: string;
  speed?: number;
  loop?: boolean;
  className?: string;
  cursor?: string;
}

const TextType: React.FC<TextTypeProps> = ({
  text,
  speed = 50,
  loop = false,
  className = '',
  cursor = '|',
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    setDisplayText('');
    setIsComplete(false);

    const typeInterval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayText(text.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        clearInterval(typeInterval);
        setIsComplete(true);

        if (loop) {
          setTimeout(() => {
            indexRef.current = 0;
            setDisplayText('');
            setIsComplete(false);
          }, 2000);
        }
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [text, speed, loop]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((prev) => !prev), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <span className={className}>
      {displayText}
      {!isComplete || showCursor ? <span className="text-hacker-green">{cursor}</span> : null}
    </span>
  );
};

export default TextType;
