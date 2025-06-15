
import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scale, setScale] = useState(1);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const numParticles = 200;

  useEffect(() => {
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

    // Initialize particles with moderate speed
    particlesRef.current = Array.from({ length: numParticles }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5, // Reduced speed
      speedY: (Math.random() - 0.5) * 0.5, // Reduced speed
      opacity: Math.random() * 0.5 + 0.2
    }));

    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Much reduced scroll effect intensity
      const newScale = 1 + scrollY * 0.0001;
      setScale(newScale > 1 ? (newScale > 1.15 ? 1.15 : newScale) : 1);
    };

    window.addEventListener('scroll', handleScroll);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle, i) => {
        // Apply scale to position
        const scaledX = particle.x * scale;
        const scaledY = particle.y * scale;
        const scaledSize = particle.size * scale;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(
          scaledX - ((scale - 1) * canvas.width) / 2, 
          scaledY - ((scale - 1) * canvas.height) / 2, 
          scaledSize, 0, Math.PI * 2
        );
        
        ctx.fillStyle = `rgba(136, 97, 255, ${particle.opacity})`;
        ctx.fill();

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap particles around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scale]);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
};

export default ParticleBackground;
