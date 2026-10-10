'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Magnetic from '@/components/ui/Magnetic';
import { easings, durations } from '@/lib/motion';

const desktopLines = ['We build modern, reliable,', 'scalable digital systems.'];
const mobileLines = ['We build modern,', 'reliable, scalable', 'digital systems.'];

const revealEase = [0.2, 0.8, 0.2, 1] as const;

type RevealLinesProps = {
  lines: string[];
  className: string;
  reduced: boolean;
};

function RevealLines({ lines, className, reduced }: RevealLinesProps) {
  return (
    <span className={className} aria-hidden="true">
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              reduced
                ? { duration: 0 }
                : { duration: 0.9, ease: revealEase, delay: 0.15 + i * 0.12 }
            }
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const reduced = useReducedMotion() ?? false;

  const fadeIn = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: reduced
      ? { duration: 0 }
      : { duration: durations.reveal, ease: easings.herb, delay },
  });

  return (
    <section className="relative md:min-h-[calc(100vh-76px)] flex items-center bg-white">
      <div className="container-content w-full pt-16 pb-[72px] md:pt-24 md:pb-[140px] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 flex flex-col gap-[22px] md:gap-7">
          <div className="font-bebas text-herb-cyan text-[13px] tracking-[0.24em] md:text-sm md:tracking-[0.28em]">
            WEB DESIGN · DEVELOPMENT · MANAGEMENT
          </div>

          <h1 className="m-0 font-hammersmith font-normal text-herb-ink text-[38px] md:text-[52px] leading-[1.1] tracking-[-0.01em] max-w-[760px]">
            <span className="sr-only">We build modern, reliable, scalable digital systems.</span>
            <RevealLines lines={desktopLines} className="hidden md:block" reduced={reduced} />
            <RevealLines lines={mobileLines} className="block md:hidden" reduced={reduced} />
          </h1>

          <motion.p
            className="m-0 text-base md:text-lg leading-[1.6] text-herb-slate font-inter max-w-[520px]"
            {...fadeIn(0.35)}
          >
            Web design, development, and management for teams that need it done right.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-3 md:gap-3.5 mt-2.5 md:mt-3"
            {...fadeIn(0.5)}
          >
            <Magnetic className="w-full md:w-auto">
              <Button
                href="/work"
                variant="primary"
                size="lg"
                className="w-full md:w-auto h-[52px] md:h-auto px-[26px] py-[13px] text-[15px] shadow-none hover:shadow-none"
              >
                See our work
              </Button>
            </Magnetic>
            <Magnetic className="w-full md:w-auto">
              <Button
                href="mailto:obafemi00@gmail.com"
                variant="secondary"
                size="lg"
                className="w-full md:w-auto h-[52px] md:h-auto px-[24.5px] py-[11.5px] text-[15px] border-[1.5px]"
              >
                Start a project
              </Button>
            </Magnetic>
          </motion.div>
        </div>

        <div
          className="md:col-span-4 relative h-[180px] md:h-[460px] mt-6 md:mt-0 -mx-6 md:mx-0"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 opacity-[0.85]"
            style={{
              backgroundImage: 'radial-gradient(circle, #05ABC4 1.6px, transparent 2px)',
              backgroundSize: '32px 32px',
              backgroundPosition: 'center',
              maskImage:
                'radial-gradient(ellipse at 55% 50%, #000 0%, rgba(0,0,0,0.55) 30%, transparent 68%)',
              WebkitMaskImage:
                'radial-gradient(ellipse at 55% 50%, #000 0%, rgba(0,0,0,0.55) 30%, transparent 68%)',
            }}
          />
        </div>
      </div>

      <div
        className="hidden md:block absolute left-1/2 bottom-10 -translate-x-1/2 w-px h-16 bg-herb-cyan/30"
        aria-hidden="true"
      >
        <span className="hero-cue-dot absolute -left-[2.5px] top-0 w-1.5 h-1.5 rounded-full bg-herb-cyan" />
      </div>

      <style>{`
        @keyframes hero-cue {
          0% { transform: translateY(0); opacity: 0; }
          15% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(58px); opacity: 0; }
        }
        .hero-cue-dot {
          animation: hero-cue 2.2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-cue-dot {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
