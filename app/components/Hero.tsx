"use client";

import { motion } from "framer-motion";

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: "easeOut" as const },
  }),
};

const title = "PORTFOLIO";

const letterColors = [
  "#EF4444", // red
  "#F97316", // orange
  "#EAB308", // yellow
  "#22C55E", // green
  "#06B6D4", // cyan
  "#3B82F6", // blue
  "#8B5CF6", // violet
  "#D946EF", // fuchsia
  "#EC4899", // pink
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 overflow-hidden relative">
      <div className="flex flex-col items-center gap-8">
        {/* PORTFOLIO heading - letter by letter */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-widest text-foreground select-none flex">
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              custom={i}
              className="inline-block hover:-translate-y-3 transition-all duration-200 cursor-default"
              style={{
                // @ts-expect-error CSS custom property
                "--hover-color": letterColors[i],
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = letterColors[i];
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "";
              }}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" as const }}
          className="w-40 h-40 md:w-52 md:h-52 rounded-full border-2 border-border overflow-hidden cursor-pointer hover:-translate-y-3 transition-all duration-200"
        >
          <img
            src="/hero-photo.jpg"
            alt="Asako Naoto"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.15em" }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" as const }}
          className="text-lg md:text-xl font-medium text-sub"
        >
          Asako Naoto
        </motion.p>
      </div>

      {/* Scroll hint - subtle arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.svg
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-sub"
        >
          <path d="M4 7 L10 13 L16 7" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
