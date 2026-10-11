'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';

type Props = {
  targetRef: RefObject<HTMLElement | null>;
};

type RailState = {
  progress: number;
  inPhases: boolean;
};

const TOTAL_PHASES = 6;

export default function ProgressRail({ targetRef }: Props) {
  const [state, setState] = useState<RailState>({ progress: 0, inPhases: false });
  const stateRef = useRef(state);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const el = targetRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const midpoint = window.innerHeight / 2;
      const progress = Math.min(1, Math.max(0, (midpoint - rect.top) / rect.height));
      const inPhases = rect.top < midpoint && rect.bottom > midpoint;
      const prev = stateRef.current;
      if (Math.abs(progress - prev.progress) > 0.002 || inPhases !== prev.inPhases) {
        const next = { progress, inPhases };
        stateRef.current = next;
        setState(next);
      }
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [targetRef]);

  const { progress, inPhases } = state;
  const current = String(Math.min(TOTAL_PHASES, Math.floor(progress * TOTAL_PHASES) + 1)).padStart(2, '0');

  return (
    <>
      <div
        className="hidden min-[900px]:flex fixed left-7 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3.5 pointer-events-none transition-opacity duration-[400ms]"
        style={{ opacity: inPhases ? 1 : 0 }}
        aria-hidden="true"
      >
        <span className="font-bebas text-[13px] tracking-[0.18em] text-herb-cyan">{current}</span>
        <div className="relative w-0.5 h-[38vh] bg-[#E4E8EC]">
          <div
            className="absolute inset-0 bg-herb-cyan origin-top"
            style={{ transform: `scaleY(${progress.toFixed(4)})` }}
          />
        </div>
        <span className="font-bebas text-[13px] tracking-[0.18em] text-herb-slate">06</span>
      </div>

      <div
        className="min-[900px]:hidden sticky top-[60px] z-[45] h-0.5 -mb-0.5 pointer-events-none transition-colors duration-300"
        style={{ background: inPhases ? '#E4E8EC' : 'transparent' }}
        aria-hidden="true"
      >
        <div
          className="h-full bg-herb-cyan origin-left"
          style={{ transform: `scaleX(${inPhases ? progress.toFixed(4) : 0})` }}
        />
      </div>
    </>
  );
}
