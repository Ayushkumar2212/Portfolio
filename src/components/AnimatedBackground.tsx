import React, { useEffect, useRef } from 'react';

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle definition
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      pulse: number;
    }

    const particleCount = Math.min(width > 768 ? 45 : 22, 50);
    const particles: Particle[] = [];
    const colors = [
      'rgba(6, 182, 212,',   // Cyan
      'rgba(245, 158, 11,',  // Amber
      'rgba(168, 85, 247,',  // Purple
      'rgba(16, 185, 129,',  // Emerald
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.2,
        pulse: Math.random() * 0.02 + 0.01,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Track mouse for interactive push
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Determine if dark mode is active
      const isDark = document.documentElement.classList.contains('dark');
      const maxDistance = 110;

      // Draw faint interconnecting constellation lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * (isDark ? 0.12 : 0.06);
            ctx.strokeStyle = isDark 
              ? `rgba(161, 161, 170, ${lineAlpha})` 
              : `rgba(113, 113, 122, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce at boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Subtle mouse influence
        const mdx = mouseX - p.x;
        const mdy = mouseY - p.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 120 && mdist > 0) {
          p.x -= (mdx / mdist) * 0.6;
          p.y -= (mdy / mdist) * 0.6;
        }

        // Pulse alpha
        p.alpha += Math.sin(Date.now() * 0.002 + i) * 0.005;
        const clampedAlpha = Math.max(0.1, Math.min(isDark ? 0.6 : 0.35, p.alpha));

        ctx.fillStyle = `${p.color} ${clampedAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Extra soft glow for select particles in dark mode
        if (isDark && i % 3 === 0) {
          ctx.fillStyle = `${p.color} ${clampedAlpha * 0.25})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0" 
      aria-hidden="true"
    >
      {/* Aurora Ambient Orb 1: Cyan Glow (Top Left) */}
      <div 
        className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-[120px] transition-all duration-1000 animate-[floatSlow_18s_ease-in-out_infinite]"
      />

      {/* Aurora Ambient Orb 2: Amber Glow (Mid Right) */}
      <div 
        className="absolute top-1/3 -right-28 w-[500px] h-[500px] rounded-full bg-amber-500/10 dark:bg-amber-500/12 blur-[130px] transition-all duration-1000 animate-[floatReverse_22s_ease-in-out_infinite]"
      />

      {/* Aurora Ambient Orb 3: Purple / Violet Glow (Bottom Left) */}
      <div 
        className="absolute bottom-10 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-500/8 dark:bg-purple-500/12 blur-[140px] transition-all duration-1000 animate-[floatSlow_26s_ease-in-out_infinite]"
      />

      {/* Aurora Ambient Orb 4: Emerald Sparkle (Center subtle) */}
      <div 
        className="absolute top-2/3 right-1/3 w-[450px] h-[450px] rounded-full bg-emerald-500/6 dark:bg-emerald-500/10 blur-[130px] transition-all duration-1000 animate-[floatReverse_20s_ease-in-out_infinite]"
      />

      {/* Moving Light Beams sweeping through the grid */}
      <div className="absolute top-[18%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent w-full animate-[beamSweepHorizontal_9s_ease-in-out_infinite]" />
      <div className="absolute top-[62%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent w-full animate-[beamSweepHorizontal_13s_ease-in-out_infinite_4s]" />

      {/* Interactive Constellation & Node Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-70 dark:opacity-90"
      />
    </div>
  );
};
