'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

/** @typedef {{x: number, y: number, burstX: number, burstY: number, size: number, alpha: number, orange: boolean, depth: number, delay: number}} Grain */

/** @param {{src: string, alt: string, sizes: string}} props */
export default function ParticlePortrait({ src, alt, sizes }) {
  const canvasRef = useRef(/** @type {HTMLCanvasElement | null} */ (null));
  const imageRef = useRef(/** @type {HTMLImageElement | null} */ (null));

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const context = canvas?.getContext('2d', { alpha: true });
    if (!canvas || !host || !context) return;

    let frame = 0;
    /** @type {Grain[]} */
    let particles = [];
    let width = 0;
    let height = 0;
    let disposed = false;
    const offscreen = document.createElement('canvas');
    const sample = offscreen.getContext('2d', { willReadFrequently: true });
    const portrait = new window.Image();
    portrait.src = src;

    const resize = () => {
      const rect = host.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      if (!portrait.complete || !portrait.naturalWidth || !sample) return;

      const scale = Math.min((width * 0.96) / portrait.naturalWidth, (height * 0.98) / portrait.naturalHeight);
      const drawWidth = portrait.naturalWidth * scale;
      const drawHeight = portrait.naturalHeight * scale;
      const offsetX = (width - drawWidth) / 2;
      const offsetY = height - drawHeight;
      offscreen.width = Math.max(1, Math.round(width));
      offscreen.height = Math.max(1, Math.round(height));
      sample.clearRect(0, 0, offscreen.width, offscreen.height);
      sample.drawImage(portrait, offsetX, offsetY, drawWidth, drawHeight);
      const { data } = sample.getImageData(0, 0, offscreen.width, offscreen.height);
      const step = width < 500 ? 4 : 5;
      particles = [];
      for (let y = 0; y < offscreen.height; y += step) {
        for (let x = 0; x < offscreen.width; x += step) {
          const at = (y * offscreen.width + x) * 4;
          const alpha = data[at + 3];
          if (alpha < 70 || Math.random() > 0.76) continue;
          const luminance = (data[at] * 0.24 + data[at + 1] * 0.66 + data[at + 2] * 0.1) / 255;
          const centerX = width / 2;
          const centerY = height * 0.48;
          const dx = x - centerX;
          const dy = y - centerY;
          const distance = Math.hypot(dx, dy) || 1;
          particles.push({
            x, y,
            burstX: x + (dx / distance) * (65 + Math.random() * 190) + (Math.random() - 0.5) * 100,
            burstY: y + (dy / distance) * (65 + Math.random() * 210) + (Math.random() - 0.5) * 110,
            size: 0.55 + Math.random() * 1.25,
            alpha: Math.min(1, alpha / 230) * (0.48 + luminance * 0.52),
            orange: Math.random() > 0.77 || x > width * 0.59,
            depth: (Math.random() - 0.5) * 22,
            delay: Math.random(),
          });
        }
      }
      render();
    };

    const render = () => {
      if (disposed) return;
      frame = 0;
      context.clearRect(0, 0, width, height);
      const motion = /** @type {HTMLInputElement | null} */ (host.querySelector('.motion-toggle input'))?.checked ?? true;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const hero = host.closest('.hero');
      const heroTop = hero ? hero.getBoundingClientRect().top + window.scrollY : 0;
      const scrollDistance = Math.max(window.innerHeight * 0.82, 540);
      const overall = motion && !reduced
        ? Math.max(0, Math.min(1, (window.scrollY - heroTop) / scrollDistance))
        : 0;
      const imageFade = Math.max(0, Math.min(1, overall / 0.36));
      const imageFadeEase = imageFade * imageFade * (3 - 2 * imageFade);
      if (imageRef.current) imageRef.current.style.opacity = String(1 - imageFadeEase);
      host.style.setProperty('--portrait-grain-opacity', String(0.38 * (1 - imageFadeEase)));
      const centerX = width / 2;
      const centerY = height / 2;
      for (const particle of particles) {
        const form = Math.max(0, Math.min(1, overall / 0.32));
        const scatter = Math.max(0, Math.min(1, (overall - 0.3 - particle.delay * 0.08) / 0.7));
        if (form < 0.01) continue;
        const scatterEase = scatter * scatter * (3 - 2 * scatter);
        const x = particle.x + (particle.burstX - particle.x) * scatterEase;
        const y = particle.y + (particle.burstY - particle.y) * scatterEase;
        const z = scatterEase * particle.depth;
        const perspective = 1 + z / 520;
        const tilt = scatterEase * 0.045;
        const px = centerX + (x - centerX) * perspective + (y - centerY) * tilt * 1.8;
        const py = centerY + (y - centerY) * perspective - (x - centerX) * tilt * 0.7;
        const grainAlpha = particle.alpha * form * (0.68 + scatter * 0.32);
        context.fillStyle = particle.orange
          ? `rgba(255, ${112 + Math.round(scatterEase * 42)}, 57, ${grainAlpha})`
          : `rgba(236, 232, 224, ${grainAlpha})`;
        context.beginPath();
        context.arc(px, py, particle.size * (0.85 + scatterEase * 1.6), 0, Math.PI * 2);
        context.fill();
      }
    };

    const scheduleRender = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };
    const motionToggle = host.querySelector('.motion-toggle input');

    portrait.onload = resize;
    if (portrait.complete && portrait.naturalWidth) resize();
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    window.addEventListener('scroll', scheduleRender, { passive: true });
    window.addEventListener('resize', scheduleRender);
    motionToggle?.addEventListener('change', scheduleRender);
    scheduleRender();
    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', scheduleRender);
      window.removeEventListener('resize', scheduleRender);
      motionToggle?.removeEventListener('change', scheduleRender);
    };
  }, [src]);

  return <>
    <Image ref={imageRef} src={src} alt={alt} fill priority sizes={sizes} className="portrait-image" />
    <canvas ref={canvasRef} className="portrait-particles" aria-hidden="true" />
  </>;
}
