"use client";

import { useEffect, useRef } from "react";

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 60;
      const cols = Math.ceil(canvas.width / gridSize) + 1;
      const rows = Math.ceil(canvas.height / gridSize) + 1;

      // Draw grid lines with pulsing opacity
      for (let i = 0; i < cols; i++) {
        const x = i * gridSize;
        const distFromCenter = Math.abs(x - canvas.width / 2) / (canvas.width / 2);
        const opacity = Math.max(0, 0.06 - distFromCenter * 0.04);

        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      for (let j = 0; j < rows; j++) {
        const y = j * gridSize;
        const distFromCenter = Math.abs(y - canvas.height * 0.4) / (canvas.height / 2);
        const opacity = Math.max(0, 0.06 - distFromCenter * 0.04);

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Floating particles
      for (let i = 0; i < 30; i++) {
        const seed = i * 137.508;
        const px = ((Math.sin(seed + time * 0.5) + 1) / 2) * canvas.width;
        const py = ((Math.cos(seed * 0.7 + time * 0.3) + 1) / 2) * canvas.height;
        const size = 1 + Math.sin(seed + time) * 0.5;
        const opacity = 0.15 + Math.sin(seed + time * 2) * 0.1;

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 163, 255, ${opacity})`;
        ctx.fill();
      }

      // Central glow pulse
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height * 0.35, 0,
        canvas.width / 2, canvas.height * 0.35, 350
      );
      const glowOpacity = 0.04 + Math.sin(time * 1.5) * 0.02;
      gradient.addColorStop(0, `rgba(0, 163, 255, ${glowOpacity})`);
      gradient.addColorStop(1, "rgba(0, 163, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}
