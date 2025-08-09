"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Minimal custom cursor — emoji hand.
 * - Respects prefers-reduced-motion
 * - Disabled on touch/coarse pointers
 * - Scales/tilts over links/buttons and on click
 */
export default function CustomCursor() {
  const handRef = useRef(null);

  const pos = useRef({ x: 0, y: 0 }); // target
  const hand = useRef({ x: 0, y: 0 }); // follower

  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const isActive = useRef(false);
  const rafId = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const anyFine = window.matchMedia("(any-pointer: fine)").matches;

    if (prefersReduced || !anyFine) { setEnabled(false); return; }

    setEnabled(true);

    const onMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };

  const onDown = () => { setActive(true); isActive.current = true; };
  const onUp = () => { setActive(false); isActive.current = false; };

  const onEnterInteractive = () => { setActive(true); isActive.current = true; };
  const onLeaveInteractive = () => { setActive(false); isActive.current = false; };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    // Delegate hover for interactive elements
    const enableHover = (sel) => {
      document.addEventListener(
        "mouseover",
        (e) => {
          const t = e.target;
          if (t && t.closest && t.closest(sel)) onEnterInteractive();
        },
        true
      );
      document.addEventListener(
        "mouseout",
        (e) => {
          const t = e.target;
          if (t && t.closest && t.closest(sel)) onLeaveInteractive();
        },
        true
      );
    };
    enableHover("a, button, [role='button'], input, textarea, select, .interactive");

    const animate = () => {
      // smooth follow
      hand.current.x += (pos.current.x - hand.current.x) * 0.2;
      hand.current.y += (pos.current.y - hand.current.y) * 0.2;

      if (handRef.current) {
        const scale = isActive.current ? 1.2 : 1;
        const rot = isActive.current ? 12 : 0;
        handRef.current.style.transform = `translate3d(${hand.current.x}px, ${hand.current.y}px, 0) rotate(${rot}deg) scale(${scale})`;
      }

      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!enabled) return null;

  const ringOpacity = active ? 0.95 : 0.8; // kept for subtle fade control

  return (
    <>
      {/* emoji hand */}
      <div
        ref={handRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] select-none"
        style={{
          fontSize: 22,
          lineHeight: 1,
          marginLeft: -11,
          marginTop: -11,
          transform: "translate3d(-100px,-100px,0)",
          transformOrigin: "70% 70%",
          opacity: ringOpacity,
          textShadow: "0 1px 2px rgba(0,0,0,.2)",
          filter: "drop-shadow(0 1px 1px rgba(0,0,0,.18))",
        }}
      >
        <span role="img" aria-label="swirling" className="pointer-events-none">
          ↖
        </span>
      </div>
    </>
  );
}
