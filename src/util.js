export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function prefersReducedMotion() {
  try {
    return !!window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
  } catch {
    return false;
  }
}

/**
 * Animate a number from `from` -> `to`.
 * Returns a cancel function.
 */
export function animateNumber({
  from = 0,
  to = 0,
  durationMs = 900,
  easing = (t) => 1 - Math.pow(1 - t, 3),
  onUpdate,
  onComplete,
}) {
  let raf = 0;
  const start = performance.now();

  const tick = (now) => {
    const t = durationMs <= 0 ? 1 : clamp((now - start) / durationMs, 0, 1);
    const v = from + (to - from) * easing(t);
    onUpdate?.(v, t);
    if (t >= 1) {
      onComplete?.();
      raf = 0;
      return;
    }
    raf = requestAnimationFrame(tick);
  };

  raf = requestAnimationFrame(tick);
  return () => {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  };
}

