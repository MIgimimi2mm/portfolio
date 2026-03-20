"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

type Props = {
  imgs: string[];
  alt: string;
};

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

// ライトボックス
function Lightbox({ imgs, alt, startIndex, onClose }: { imgs: string[]; alt: string; startIndex: number; onClose: () => void }) {
  const [[current, dir], setCurrent] = useState([startIndex, 0]);

  const goTo = (next: number) => setCurrent([next, next > current ? 1 : -1]);
  const prev = () => goTo((current - 1 + imgs.length) % imgs.length);
  const next = () => goTo((current + 1) % imgs.length);

  // ESCで閉じる
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current]);

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* 背景 */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* コンテンツ */}
      <div className="relative z-10 flex items-center gap-4 px-6 max-w-screen-md w-full">
        {/* 左矢印 */}
        <button
          onClick={prev}
          className="shrink-0 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition"
          aria-label="前の画像"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* 画像 */}
        <div className="relative flex-1 overflow-hidden rounded-2xl" style={{ maxHeight: "85vh" }}>
          <AnimatePresence initial={false} custom={dir} mode="popLayout">
            <motion.img
              key={current}
              src={imgs[current]}
              alt={`${alt} ${current + 1}`}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="w-full object-contain rounded-2xl"
              style={{ maxHeight: "85vh" }}
              draggable={false}
            />
          </AnimatePresence>
        </div>

        {/* 右矢印 */}
        <button
          onClick={next}
          className="shrink-0 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition"
          aria-label="次の画像"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* 閉じるボタン */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition"
        aria-label="閉じる"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* ドット */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {imgs.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`画像 ${i + 1}`}>
            <motion.div
              animate={{ width: i === current ? 24 : 8, opacity: i === current ? 1 : 0.5 }}
              transition={{ duration: 0.3 }}
              className="h-1.5 rounded-full bg-white"
            />
          </button>
        ))}
      </div>
    </motion.div>,
    document.body
  );
}

export default function ImageSlider({ imgs, alt }: Props) {
  const [[current, dir], setCurrent] = useState([0, 0]);
  const [hovered, setHovered] = useState(false);
  const [inCenter, setInCenter] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (next: number) => {
    const d = next > current ? 1 : -1;
    setCurrent([next, d]);
  };
  const prev = (e: React.MouseEvent) => { e.stopPropagation(); goTo((current - 1 + imgs.length) % imgs.length); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); goTo((current + 1) % imgs.length); };

  useEffect(() => {
    if (!containerRef.current || imgs.length <= 1) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInCenter(entry.isIntersecting),
      { rootMargin: "-35% 0px -35% 0px", threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [imgs.length]);

  useEffect(() => {
    if (inCenter && !hovered && !lightbox && imgs.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrent(([c]) => [(c + 1) % imgs.length, 1]);
      }, 2500);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [inCenter, hovered, lightbox, imgs.length]);

  if (imgs.length === 1) {
    return (
      <img
        src={imgs[0]}
        alt={alt}
        className="rounded-3xl w-full shadow-xl object-contain cursor-zoom-in"
        style={{ maxHeight: "480px" }}
        onClick={() => setLightbox(true)}
      />
    );
  }

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full select-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* 画像ステージ */}
        <div
          className="relative overflow-hidden rounded-3xl shadow-xl bg-white cursor-zoom-in"
          style={{ maxHeight: "480px" }}
          onClick={() => setLightbox(true)}
        >
          <img src={imgs[current]} alt="" aria-hidden className="w-full object-contain invisible" style={{ maxHeight: "480px" }} />

          <AnimatePresence initial={false} custom={dir} mode="popLayout">
            <motion.img
              key={current}
              src={imgs[current]}
              alt={`${alt} ${current + 1}`}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0 w-full h-full object-contain"
              style={{ maxHeight: "480px" }}
              draggable={false}
            />
          </AnimatePresence>

          {/* ホバー時矢印 */}
          <motion.div
            className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={prev}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 backdrop-blur-md shadow-md flex items-center justify-center text-gray-700 hover:bg-white hover:scale-105 active:scale-95 transition-transform"
              aria-label="前の画像"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={next}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 backdrop-blur-md shadow-md flex items-center justify-center text-gray-700 hover:bg-white hover:scale-105 active:scale-95 transition-transform"
              aria-label="次の画像"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* ドットナビ */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {imgs.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`画像 ${i + 1}`}>
              <motion.div
                animate={{ width: i === current ? 24 : 8, opacity: i === current ? 1 : 0.3 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-1.5 rounded-full bg-[#039ADA]"
              />
            </button>
          ))}
        </div>
      </div>

      {/* ライトボックス */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox imgs={imgs} alt={alt} startIndex={current} onClose={() => setLightbox(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
