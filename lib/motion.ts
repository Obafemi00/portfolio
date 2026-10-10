import type { Variants } from 'framer-motion';

export const easings = {
  herb: [0.65, 0, 0.35, 1] as const,
};

export const durations = {
  micro: 0.2,
  component: 0.4,
  reveal: 0.7,
  page: 1.0,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.reveal, ease: easings.herb },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: durations.component, ease: easings.herb },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const maskReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.reveal, ease: easings.herb },
  },
};
