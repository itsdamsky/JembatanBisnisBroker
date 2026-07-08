"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
  animate as framerAnimate,
  MotionValue,
} from "framer-motion";
import {
  ReactNode,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

/* ------------------------------------------------------------------ */
/* Utilities                                                            */
/* ------------------------------------------------------------------ */

function shortestOffset(index: number, position: number, total: number) {
  const diff = index - position;
  return diff - total * Math.round(diff / total);
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

/* ------------------------------------------------------------------ */
/* Card — every visual property derives from ONE value:                 */
/* distanceFromCenter. Spatial transforms (position/depth/rotation/     */
/* scale) stay hard-locked to the shared track so the whole stage       */
/* moves as one rigid object. Atmospheric properties (opacity/blur/     */
/* brightness/contrast) run through their own trailing spring so they   */
/* settle a beat behind the rigid motion — this is what makes the       */
/* motion read as organic rather than mechanically synchronized.        */
/* ------------------------------------------------------------------ */

interface CardProps {
  index: number;
  total: number;
  trackPosition: MotionValue<number>;
  activeWidth: number;
  thumbWidth: number;
  cardHeight: number;
  gap: number;
  onClick: () => void;
  children: (isActive: boolean) => ReactNode;
}

const Card = memo(function Card({
  index,
  total,
  trackPosition,
  activeWidth,
  thumbWidth,
  cardHeight,
  gap,
  onClick,
  children,
}: CardProps) {
  /* ---- the single source of truth ---- */
  const distance = useTransform(trackPosition, (tp) =>
    shortestOffset(index, tp, total)
  );
  const absDistance = useTransform(distance, (d) => Math.abs(d));

  // thumbWidth is preserved from the public API, but repurposed as the
  // target SCALE ratio for distant cards rather than a literal box width
  // — the footprint never resizes, only its apparent scale in 3D space.
  const minScale = clamp(thumbWidth / activeWidth, 0.32, 0.92);
  const spacing = activeWidth * 0.62 + gap;

  /* ---- spatial transforms: hard-locked to `distance`, GPU-only ---- */
  const translateX = useTransform(distance, (d) => d * spacing);
  const translateZ = useTransform(absDistance, (d) => -d * 260);
  const rotateY = useTransform(distance, (d) => clamp(-d * 34, -50, 50));
  const scale = useTransform(
    absDistance,
    [0, 1, 2, 3],
    [1, minScale, minScale * 0.86, minScale * 0.72]
  );

  /* ---- atmospheric properties: trailing spring for organic settle ---- */
  const opacityRaw = useTransform(absDistance, [0, 1, 2, 3], [1, 0.55, 0.22, 0]);
  const blurRaw = useTransform(absDistance, [0, 1, 2, 3], [0, 3, 7, 14]);
  const brightnessRaw = useTransform(absDistance, [0, 1, 2, 3], [1, 0.7, 0.5, 0.35]);
  const contrastRaw = useTransform(absDistance, [0, 1, 2], [1.05, 0.95, 0.9]);

  const trailSpring = { stiffness: 120, damping: 20, mass: 0.6 };
  const opacity = useSpring(opacityRaw, trailSpring);
  const blurPx = useSpring(blurRaw, trailSpring);
  const brightness = useSpring(brightnessRaw, trailSpring);
  const contrast = useSpring(contrastRaw, trailSpring);

  const filter = useTransform(
    [blurPx, brightness, contrast],
    ([b, br, c]: number[]) => `blur(${b}px) brightness(${br}) contrast(${c})`
  );

  const zIndex = useTransform(absDistance, (d) => Math.round(200 - d * 10));
  const pointerEvents = useTransform(absDistance, (d) =>
    d > 3.2 ? "none" : "auto"
  );

  // dynamic shadow — strongest for the active card, fades to nothing
  // almost immediately for neighbours, reinforcing hierarchy
  const shadowStrength = useTransform(absDistance, [0, 0.6, 1.5], [1, 0.3, 0]);
  const boxShadow = useTransform(
    shadowStrength,
    (s) =>
      `0 ${40 * s}px ${90 * s}px -20px rgba(0,0,0,${0.55 * s}), 0 0 ${
        60 * s
      }px rgba(59,130,246,${0.25 * s})`
  );

  const [isActive, setIsActive] = useState(index === 0);
  useEffect(() => {
    return absDistance.on("change", (d) => {
      setIsActive((prev) => {
        const next = d < 0.5;
        return prev === next ? prev : next;
      });
    });
  }, [absDistance]);

  return (
    <motion.div
      onClick={onClick}
      className="absolute top-1/2 left-1/2 cursor-pointer will-change-transform"
      style={{
        // static footprint — NEVER animated. All apparent sizing comes
        // from `scale` + `translateZ` under perspective, not layout.
        width: activeWidth,
        height: cardHeight,
        marginLeft: -activeWidth / 2,
        marginTop: -cardHeight / 2,
        x: translateX,
        z: translateZ,
        rotateY,
        scale,
        opacity,
        filter,
        zIndex,
        boxShadow,
        pointerEvents,
        transformStyle: "preserve-3d",
      }}
    >
      {/* glass rim — gradient border, strongest on the active card */}
      <div
        className="absolute inset-0 rounded-[28px] pointer-events-none z-10"
        style={{
          border: "1px solid rgba(255,255,255,0.18)",
          background: isActive
            ? "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0) 45%)"
            : "transparent",
        }}
      />

      {/* ambient glow behind the active card — real exit animation via
          AnimatePresence, not an instant mount/unmount pop */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="glow"
            className="absolute -inset-10 rounded-[40px] bg-blue-400/25 blur-3xl -z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </AnimatePresence>

      <div className="w-full h-full rounded-[28px] overflow-hidden relative">
        {children(isActive)}
        {/* soft reflection */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
});

/* ------------------------------------------------------------------ */
/* Carousel                                                              */
/* ------------------------------------------------------------------ */

export interface Carousel3DProps<T> {
  items: T[];
  renderCard: (item: T, isActive: boolean, index: number) => ReactNode;
  activeWidth?: number;
  thumbWidth?: number;
  cardHeight?: number;
  gap?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  dotClassName?: string;
  activeDotClassName?: string;
  onActiveChange?: (index: number) => void;
}

export default function Carousel3D<T>({
  items,
  renderCard,
  activeWidth = 380,
  thumbWidth = 190,
  cardHeight = 420,
  gap = 20,
  autoPlay = true,
  autoPlayInterval = 4500,
  className = "",
  dotClassName = "bg-slate-300 hover:bg-slate-400",
  activeDotClassName = "bg-brand",
  onActiveChange,
}: Carousel3DProps<T>) {
  const total = items.length;
  const trackPosition = useMotionValue(0);
  const [active, setActive] = useState(0);

  const isDragging = useRef(false);
  const dragMoved = useRef(false);
  const suppressClick = useRef(false);
  const dragStartClientX = useRef(0);
  const dragStartPosition = useRef(0);
  const lastMoveTime = useRef(0);
  const lastMoveX = useRef(0);
  const velocity = useRef(0);
  const autoplayTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const wheelLock = useRef(false);
  const wheelAccum = useRef(0);

  const spacing = activeWidth * 0.62 + gap;

  const goTo = useCallback(
    (targetIndexRaw: number, initialVelocity = 0) => {
      const normalized = ((targetIndexRaw % total) + total) % total;
      const current = trackPosition.get();
      const diff = normalized - current;
      const wrappedDiff = diff - total * Math.round(diff / total);
      const target = current + wrappedDiff;

      // distance-adaptive spring: a 1-slide nudge and a multi-slide
      // flick should not feel identical — heavier jumps get slightly
      // softer stiffness/more damping so momentum reads as real weight
      const jumpDistance = Math.abs(wrappedDiff);
      const stiffness = jumpDistance > 1.5 ? 170 : 240;
      const damping = jumpDistance > 1.5 ? 24 : 20;

      framerAnimate(trackPosition, target, {
        type: "spring",
        stiffness,
        damping,
        mass: 0.9,
        velocity: initialVelocity,
        onComplete: () => trackPosition.set(normalized),
      });

      setActive(normalized);
      onActiveChange?.(normalized);
    },
    [total, trackPosition, onActiveChange]
  );

  const next = useCallback(
    () => goTo(Math.round(trackPosition.get()) + 1),
    [goTo, trackPosition]
  );
  const prev = useCallback(
    () => goTo(Math.round(trackPosition.get()) - 1),
    [goTo, trackPosition]
  );

  const stopAutoplay = useCallback(() => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
      autoplayTimer.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (!autoPlay) return;
    stopAutoplay();
    autoplayTimer.current = setInterval(next, autoPlayInterval);
  }, [autoPlay, autoPlayInterval, next, stopAutoplay]);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ---- drag: heavy, premium, velocity-aware ---- */
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragMoved.current = false;
    dragStartClientX.current = e.clientX;
    dragStartPosition.current = trackPosition.get();
    lastMoveTime.current = performance.now();
    lastMoveX.current = e.clientX;
    velocity.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    stopAutoplay();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStartClientX.current;
    if (Math.abs(dx) > 8) dragMoved.current = true;
    trackPosition.set(dragStartPosition.current - dx / spacing);

    const now = performance.now();
    const dt = now - lastMoveTime.current;
    if (dt > 0) {
      const instant = (e.clientX - lastMoveX.current) / dt;
      // EMA smoothing — raw per-frame velocity is noisy
      velocity.current = velocity.current * 0.7 + instant * 0.3;
    }
    lastMoveTime.current = now;
    lastMoveX.current = e.clientX;
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (dragMoved.current) {
      suppressClick.current = true;
      setTimeout(() => (suppressClick.current = false), 60);
    }

    const flickThreshold = 0.5; // px/ms
    const current = trackPosition.get();
    let target = Math.round(current);

    if (Math.abs(velocity.current) > flickThreshold) {
      const extraSlides = Math.min(
        2,
        Math.floor(Math.abs(velocity.current) / flickThreshold)
      );
      target = Math.round(current) - Math.sign(velocity.current) * extraSlides;
    }

    // momentum survives into the release spring instead of stopping
    // dead and relaunching from rest
    const trackVelocity = -(velocity.current / spacing) * 1000;

    goTo(target, trackVelocity);
    startAutoplay();
  };

  /* ---- wheel: same premium threshold + cooldown behaviour ---- */
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (wheelLock.current) return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    wheelAccum.current += delta;
    if (Math.abs(wheelAccum.current) < 60) return;
    wheelLock.current = true;
    wheelAccum.current > 0 ? next() : prev();
    wheelAccum.current = 0;
    setTimeout(() => (wheelLock.current = false), 650);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  return (
    <div className={className}>
      <div
        role="region"
        aria-roledescription="carousel"
        tabIndex={0}
        className="relative w-full select-none outline-none cursor-grab active:cursor-grabbing touch-pan-y"
        style={{ height: cardHeight }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
        onKeyDown={handleKeyDown}
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        {/* the 3D stage — depth needs room to exist, so this is never
            clipped with overflow-hidden the way a flat slider would be */}
        <div
          className="absolute inset-0"
          style={{ perspective: 1500, transformStyle: "preserve-3d" }}
        >
          {items.map((item, index) => (
            <Card
              key={index}
              index={index}
              total={total}
              trackPosition={trackPosition}
              activeWidth={activeWidth}
              thumbWidth={thumbWidth}
              cardHeight={cardHeight}
              gap={gap}
              onClick={() => {
                if (!suppressClick.current) goTo(index);
              }}
            >
              {(isActive) => renderCard(item, isActive, index)}
            </Card>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Ke slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              active === i ? `w-8 ${activeDotClassName}` : `w-2.5 ${dotClassName}`
            }`}
          />
        ))}
      </div>
    </div>
  );
}