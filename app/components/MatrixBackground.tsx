import React, { useEffect, useRef } from 'react';

interface MatrixBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  show?: boolean;
}

const MatrixBackground: React.FC<MatrixBackgroundProps> = ({ 
  intensity = 'low', 
  show = true 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!show) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const chars = '01ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ';
    
    const intensitySettings = {
      low: { opacity: 0.03, speed: 50, density: 0.3 },
      medium: { opacity: 0.05, speed: 30, density: 0.5 },
      high: { opacity: 0.08, speed: 20, density: 0.8 }
    };

    const settings = intensitySettings[intensity];

    const draw = () => {
      ctx.fillStyle = `rgba(13, 13, 18, ${0.95 - settings.opacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#03ff7e';
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        if (Math.random() > settings.density) continue;

        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.shadowColor = '#03ff7e';
        ctx.shadowBlur = 5;
        ctx.fillStyle = '#03ff7e';
        ctx.fillText(text, x, y);
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, settings.speed);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, show]);

  if (!show) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.1 }}
    />
  );
};

export default MatrixBackground;