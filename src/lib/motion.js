/**
 * Shared animation system — keep timings/easings consistent across the site.
 */

export const easeOutExpo = [0.16, 1, 0.3, 1];
export const easeGeneral = [0.25, 0.1, 0.25, 1];

export const duration = {
  entrance: 0.75,
  entranceSlow: 0.85,
  micro: 0.25,
  letter: 0.45,
};

export const viewportOnce = { once: true, amount: 0.2, margin: '0px 0px -80px 0px' };

export const entranceTransition = {
  duration: duration.entrance,
  ease: easeOutExpo,
};

export const generalTransition = {
  duration: duration.entrance,
  ease: easeGeneral,
};

export const microTransition = {
  duration: duration.micro,
  ease: 'easeOut',
};

/** Parent: cascade children in */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

/** Child: gentle fade + slide up */
export const fadeUpItem = {
  hidden: { opacity: 0, y: 30, willChange: 'transform, opacity' },
  visible: {
    opacity: 1,
    y: 0,
    willChange: 'auto',
    transition: entranceTransition,
  },
};

/** Child: fade + slide from left (subtle) */
export const fadeLeftItem = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: entranceTransition,
  },
};

/** Child: fade + slide from right (subtle) */
export const fadeRightItem = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: entranceTransition,
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: entranceTransition,
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: duration.entranceSlow,
      ease: easeOutExpo,
    },
  },
};
