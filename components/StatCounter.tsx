"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export default function StatCounter({
  value,
  duration = 1500,
  className,
}: StatCounterProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState<string>(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      // Non-numeric value (e.g. "Menjaga") — no animation needed
      setDisplay(value);
      return;
    }

    const target = parseInt(match[1], 10);
    const suffix = match[2];
    setDisplay(`0${suffix}`);

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const start = performance.now();
            const animate = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              // ease-out cubic for a smooth finish
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(eased * target);
              setDisplay(`${current}${suffix}`);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDisplay(`${target}${suffix}`);
              }
            };

            requestAnimationFrame(animate);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <p ref={ref} className={className}>
      {display}
    </p>
  );
}
