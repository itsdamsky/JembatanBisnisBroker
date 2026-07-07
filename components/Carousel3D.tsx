"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate as framerAnimate,
  MotionValue,
} from "framer-motion";
import {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

/** Shortest signed distance from `position` to `index` on a circular
 *  track of length `total`. Works for fractional (mid-drag) positions. */
function shortestOffset(index: number, position: number, total: number) {
  const diff = index - position;
  return diff - total * Math.round(diff / total);
}

const SPRING = { type: "spring" as const, stiffness: 260, damping: 32, mass: 1 };

/* ------------------------------------------------------------------ */
/* Single card                                                         */
/* ------------------------------------------------------------------ */

interface CardProps {
  index: number;
  total: number;
  trackPosition: MotionValue<number>;
  cardWidth: number;
  cardHeight: number;
  onClick: () => void;
  children: (isActive: boolean) => ReactNode;
}

function Card({
  index,
  total,
  trackPosition,
  cardWidth,
  cardHeight,
  onClick,
  children,
}: CardProps) {
  const offset = useTransform(trackPosition, (tp) =>
    shortestOffset(index, tp, total)
  );
  const absOffset = useTransform(offset, (o) => Math.abs(o));

  // Horizontal spacing is derived from cardWidth so cards visually overlap
  // like a premium coverflow rather than sitting edge-to-edge.
  const spacing = cardWidth * 0.62;

  const x = useTransform(offset, (o) => o * spacing - cardWidth / 2);
  const scale = useTransform(absOffset, [0, 1, 2, 3], [1, 0.87, 0.74, 0.62]);
  const opacity = useTransform(absOffset, [0, 1, 2, 2.6], [1, 0.55, 0.22, 0]);
  const blurPx = useTransform(absOffset, [0, 1, 2, 3], [0, 2, 5, 9]);
  const filter = useTransform(blurPx, (b) => `blur(${b}px)`);
  const rotateY = useTransform(offset, (o) =>
    Math.max(-42, Math.min(42, o * -26))
  );
  const z = useTransform(absOffset, (d) => -d * 140);
  const zIndex = useTransform(absOffset, (d) => Math.round(100 - d * 10));
  const pointerEvents = useTransform(absOffset, (d) =>
    d > 2.6 ? "none" : "auto"
  );

  const [isActive, setIsActive] = useState(index === 0);
  useEffect(() => {
    return absOffset.on("change", (d) => {
      setIsActive((prev) => {
        const next = d < 0.5;
        return prev === next ? prev : next;
      });
    });
  }, [absOffset]);

  return (
    <motion.div
      onClick={onClick}
      className="absolute top-1/2 left-1/2 cursor-pointer will-change-transform"
      style={{
        width: cardWidth,
        height: cardHeight,
        marginTop: -cardHeight / 2,
        x,
        scale,
        opacity,
        filter,
        rotateY,
        z,
        zIndex,
        pointerEvents,
      }}
    >
      {children(isActive)}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Carousel                                                             */
/* ------------------------------------------------------------------ */

export interface Carousel3DProps<T> {
  items: T[];
  renderCard: (item: T, isActive: boolean, index: number) => ReactNode;
  cardWidth?: number;
  cardHeight?: number;
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
  cardWidth = 420,
  cardHeight = 460,
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
  const autoplayTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const wheelLock = useRef(false);

  const goTo = useCallback(
    (targetIndexRaw: number) => {
      const normalized = ((targetIndexRaw % total) + total) % total;
      const current = trackPosition.get();
      const diff = normalized - current;
      const wrappedDiff = diff - total * Math.round(diff / total);
      const target = current + wrappedDiff;

      framerAnimate(trackPosition, target, {
        ...SPRING,
        onComplete: () => trackPosition.set(normalized),
      });

      setActive(normalized);
      onActiveChange?.(normalized);
    },
    [total, trackPosition, onActiveChange]
  );

  const next = useCallback(() => {
    goTo(Math.round(trackPosition.get()) + 1);
  }, [goTo, trackPosition]);

  const prev = useCallback(() => {
    goTo(Math.round(trackPosition.get()) - 1);
  }, [goTo, trackPosition]);

  /* ---- autoplay ---- */
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

  /* ---- drag (mouse + touch via pointer events) ---- */
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragMoved.current = false;
    dragStartClientX.current = e.clientX;
    dragStartPosition.current = trackPosition.get();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    stopAutoplay();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStartClientX.current;
    if (Math.abs(dx) > 6) dragMoved.current = true;
    const spacing = cardWidth * 0.62;
    trackPosition.set(dragStartPosition.current - dx / spacing);
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (dragMoved.current) {
      suppressClick.current = true;
      setTimeout(() => (suppressClick.current = false), 60);
    }
    goTo(Math.round(trackPosition.get()));
    startAutoplay();
  };

  /* ---- wheel ---- */
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (wheelLock.current) return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) < 10) return;
    wheelLock.current = true;
    delta > 0 ? next() : prev();
    setTimeout(() => (wheelLock.current = false), 450);
  };

  /* ---- keyboard ---- */
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
        style={{ height: cardHeight, perspective: 1600 }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
        onKeyDown={handleKeyDown}
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        {items.map((item, index) => (
          <Card
            key={index}
            index={index}
            total={total}
            trackPosition={trackPosition}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            onClick={() => {
              if (!suppressClick.current) goTo(index);
            }}
          >
            {(isActive) => renderCard(item, isActive, index)}
          </Card>
        ))}
      </div>

      {/* Pagination dots */}
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