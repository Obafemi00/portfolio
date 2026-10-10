'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Magnetic from '@/components/ui/Magnetic';
import { easings, durations } from '@/lib/motion';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden bg-white">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle, #05ABC4 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(ellipse at 70% 40%, black 0%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 70% 40%, black 0%, transparent 70%)',
        }}
      />

      <div className="container-content relative z-10 grid md:grid-cols-2 gap-12 items-center py-20">
        <div className="flex flex-col gap-8 max-w-2xl">
          <motion.h1
            className="text-h1 font-hammersmith text-herb-ink balance"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.reveal, ease: easings.herb }}
          >
            We build modern, reliable, scalable digital systems.
          </motion.h1>

          <motion.p
            className="text-lg text-herb-slate font-inter max-w-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: durations.reveal,
              ease: easings.herb,
              delay: 0.2,
            }}
          >
            Web design, development, and management for teams that need it done right.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: durations.reveal,
              ease: easings.herb,
              delay: 0.4,
            }}
          >
            <Magnetic>
              <Button href="/work" variant="primary" size="lg">
                See our work
              </Button>
            </Magnetic>
            <Magnetic>
              <Button href="mailto:obafemi00@gmail.com" variant="secondary" size="lg">
                Start a project
              </Button>
            </Magnetic>
          </motion.div>
        </div>

        <div className="hidden md:block" aria-hidden="true" />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="w-px h-12 bg-herb-cyan/30 relative overflow-hidden">
          <motion.span
            className="absolute inset-x-0 top-0 w-px h-4 bg-herb-cyan"
            animate={{ y: [0, 32, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </span>
      </div>
    </section>
  );
}
