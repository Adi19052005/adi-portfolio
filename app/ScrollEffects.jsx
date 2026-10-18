'use client';

import { useEffect } from 'react';

export default function ScrollEffects() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) return;

    const targets = document.querySelectorAll(
      '.statement, .perspectives, .work, .expertise, .chapter, .now, .cloud-chapter, .portrait-note, footer, .project, .perspective-grid article, .expertise-list details'
    );
    targets.forEach((target) => target.classList.add('scroll-reveal'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

    targets.forEach((target) => {
      if (target.getBoundingClientRect().top > window.innerHeight * 0.9) target.classList.add('is-pending');
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
