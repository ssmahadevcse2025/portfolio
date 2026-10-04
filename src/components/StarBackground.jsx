import React, { useEffect, useRef } from 'react';

export default function StarBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Stars data
    const STAR_COUNT = Math.min(Math.floor((width * height) / 4000), 280);
    let stars = [];

    const initStars = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 2 + 0.5, // Depth factor
          radius: Math.random() * 1.5 + 0.5,
          baseAlpha: Math.random() * 0.7 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinkleOffset: Math.random() * Math.PI * 2,
          color:
            Math.random() > 0.75
              ? '#00f0ff' // Cyan
              : Math.random() > 0.5
              ? '#a855f7' // Purple
              : '#ffffff' // White
        });
      }
    };

    initStars();

    // Shooting Stars
    let meteors = [];
    const spawnMeteor = () => {
      if (Math.random() < 0.015 && meteors.length < 3) {
        meteors.push({
          x: Math.random() * width * 1.2 - width * 0.1,
          y: Math.random() * height * 0.4,
          length: Math.random() * 80 + 50,
          speed: Math.random() * 8 + 6,
          angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
          alpha: 1,
          decay: Math.random() * 0.015 + 0.01
        });
      }
    };

    let tick = 0;

    const render = () => {
      tick++;

      // Smooth mouse interpolation for parallax
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const offsetX = (mouseX - width / 2) * 0.03;
      const offsetY = (mouseY - height / 2) * 0.03;

      // Deep space clear
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, width, height);

      // Deep Space Nebula Glows
      const grad1 = ctx.createRadialGradient(
        width * 0.2 + offsetX * 2,
        height * 0.3 + offsetY * 2,
        0,
        width * 0.2,
        height * 0.3,
        width * 0.45
      );
      grad1.addColorStop(0, 'rgba(168, 85, 247, 0.07)'); // Deep Purple
      grad1.addColorStop(0.6, 'rgba(88, 28, 135, 0.03)');
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(
        width * 0.8 - offsetX * 2,
        height * 0.7 - offsetY * 2,
        0,
        width * 0.8,
        height * 0.7,
        width * 0.5
      );
      grad2.addColorStop(0, 'rgba(0, 240, 255, 0.06)'); // Cyber Cyan
      grad2.addColorStop(0.7, 'rgba(14, 116, 144, 0.02)');
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Render Stars
      for (let star of stars) {
        const px = (star.x - offsetX * star.z + width) % width;
        const py = (star.y - offsetY * star.z + height) % height;
        const currentAlpha =
          star.baseAlpha *
          (0.6 + 0.4 * Math.sin(tick * star.twinkleSpeed + star.twinkleOffset));

        ctx.beginPath();
        ctx.arc(px, py, star.radius * (star.z * 0.8), 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));
        ctx.fill();

        // Extra subtle glow around larger stars
        if (star.radius > 1.2) {
          ctx.beginPath();
          ctx.arc(px, py, star.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = currentAlpha * 0.2;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;

      // Handle Meteors
      spawnMeteor();
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.alpha -= m.decay;

        if (m.alpha <= 0 || m.x > width + 100 || m.y > height + 100) {
          meteors.splice(i, 1);
          continue;
        }

        const headX = m.x;
        const headY = m.y;
        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const mGrad = ctx.createLinearGradient(headX, headY, tailX, tailY);
        mGrad.addColorStop(0, `rgba(0, 240, 255, ${m.alpha})`);
        mGrad.addColorStop(0.4, `rgba(168, 85, 247, ${m.alpha * 0.7})`);
        mGrad.addColorStop(1, 'transparent');

        ctx.strokeStyle = mGrad;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(headX, headY);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
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
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.9 }}
    />
  );
}
