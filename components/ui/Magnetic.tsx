'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';

type MagneticProps = {
  children: ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
};

export default function Magnetic({
  children,
  strength = 0.3,
  radius = 100,
  className,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 200, mass: 0.5 });
  const springY = useSpring(y, { damping: 20, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    setIsTouch(window.matchMedia('(hover: none)').matches);
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (isTouch || reducedMotion) return;

    const el = ref.current;
    if (!el) return;

    function handleMouseMove(e: MouseEvent) {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (distance < radius) {
        x.set(distanceX * strength);
        y.set(distanceY * strength);
      } else {
        x.set(0);
        y.set(0);
      }
    }

    function handleMouseLeave() {
      x.set(0);
      y.set(0);
    }

    window.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTouch, reducedMotion, radius, strength, x, y]);

  if (isTouch || reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ x: springX, y: springY }} className={className}>
      {children}
    </motion.div>
  );
}
