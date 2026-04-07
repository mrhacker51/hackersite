import { useEffect, useRef } from 'react';

interface AuroraProps {
  color1?: string;
  color2?: string;
  color3?: string;
  amplitude?: number;
  speed?: number;
}

const Aurora: React.FC<AuroraProps> = ({
  color1 = '#00ff41',
  color2 = '#00d4ff',
  color3 = '#8b5cf6',
  amplitude = 1.0,
  speed = 0.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const drawWave = (color: string, offset: number, freq: number, amp: number) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);

      for (let x = 0; x <= canvas.width; x += 5) {
        const y =
          canvas.height * 0.5 +
          Math.sin(x * freq + time * speed + offset) * 80 * amp * amplitude +
          Math.sin(x * freq * 0.5 + time * speed * 0.7 + offset * 2) * 40 * amp;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(0, canvas.height * 0.3, 0, canvas.height);
      gradient.addColorStop(0, `${color}00`);
      gradient.addColorStop(0.5, `${color}30`);
      gradient.addColorStop(1, `${color}10`);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawWave(color3, 0, 0.003, 0.8);
      drawWave(color2, 2, 0.004, 1.0);
      drawWave(color1, 4, 0.005, 1.2);

      time += 0.016;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [color1, color2, color3, amplitude, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default Aurora;
