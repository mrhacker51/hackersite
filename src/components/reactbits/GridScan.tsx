import { useEffect, useRef } from 'react';

interface GridScanProps {
  color?: string;
  opacity?: number;
}

const GridScan: React.FC<GridScanProps> = ({ color = '#00ff41', opacity = 0.08 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const cellSize = 40;
    let scanY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / cellSize);
      const rows = Math.ceil(canvas.height / cellSize);

      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          const dist = Math.abs(y * cellSize - scanY);
          const alpha = dist < 200 ? opacity * (1 - dist / 200) : 0;

          if (alpha > 0.001) {
            ctx.beginPath();
            ctx.strokeStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 0.5;
            ctx.rect(x * cellSize, y * cellSize, cellSize, cellSize);
            ctx.stroke();
          }
        }
      }

      scanY += 2;
      if (scanY > canvas.height + 200) scanY = -200;

      animationId = requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [color, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default GridScan;
