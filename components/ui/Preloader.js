"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [show, setShow] = useState(true);

  // Auto-hide after a short delay; keep dependency shape stable
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setShow(false), 1400); // quick, not annoying
    return () => clearTimeout(t);
  }, [show]);

  useEffect(() => {
    // Lock scroll while preloader is visible
    const { documentElement: html, body } = document;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    if (show) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
    }
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
          className="fixed inset-0 z-[60] grid place-items-center app-bg"
        >
          <motion.svg
            width="200"
            height="120"
            viewBox="0 0 200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <defs>
              <linearGradient id="ls-stroke" x1="0" y1="0" x2="200" y2="120" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(16,185,129,0.9)" />
                <stop offset="100%" stopColor="rgba(34,211,238,0.9)" />
              </linearGradient>
            </defs>
            {/* L */}
            <motion.path
              d="M30 20 L30 95 L85 95"
              stroke="url(#ls-stroke)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            {/* S */}
            <motion.path
              d="M125 25 C105 25 103 45 125 45 C147 45 147 65 125 65 C103 65 103 85 125 95"
              stroke="url(#ls-stroke)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, ease: "easeInOut", delay: 0.65 }}
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
