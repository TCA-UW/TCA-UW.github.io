import React, { useEffect, useRef, useState } from "react";

function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

export default function CountUp({
  value,          
  start = 0,      
  duration = 1000,
  prefix = "",    
  suffix = "",    
}) {
  const elRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const setFinal = () => { el.textContent = `${prefix}${value}${suffix}`; setHasAnimated(true); };

    const animate = () => {
      const startTime = performance.now();
      const tick = (now) => {
        const t = Math.min((now - startTime) / duration, 1);
        const eased = easeOutCubic(t);
        const current = Math.round(start + (value - start) * eased);
        el.textContent = `${prefix}${current}${suffix}`;
        if (t < 1) requestAnimationFrame(tick);
        else setHasAnimated(true);
      };
      requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        if (prefersReduced) setFinal();
        else animate();
        obs.disconnect();
      }
    }, { threshold: 0.3 });

    obs.observe(el);
    return () => obs.disconnect();
  }, [value, start, duration, prefix, suffix, hasAnimated]);

  return <span ref={elRef}>{prefix}{start}{suffix}</span>;
}
