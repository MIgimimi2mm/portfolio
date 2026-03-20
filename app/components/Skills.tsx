"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const techStack = [
  {
    name: "Python",
    logo: "/logo-python.svg",
    description: "大学の研究とアルバイト先のシステム開発で使用中。",
  },
  {
    name: "React",
    logo: "/logo-react.svg",
    description: "ハッカソンプロダクトのフロントエンドをReactで構築。主にカレンダー機能を担当。",
  },
  {
    name: "Next.js",
    logo: "/logo-nextjs.svg",
    description: "ウェブアプリ製作で使用。本ポートフォリオの構築にも活用しています。",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-section">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          custom={0}
          className="text-2xl md:text-3xl font-bold text-center mb-4"
        >
          Skills
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          custom={1}
          className="text-center text-sub mb-14"
        >
          技術スタック
        </motion.p>

        {/* Tech cards */}
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
              custom={i}
              whileHover={{
                x: 6,
                transition: { duration: 0.2 },
              }}
              className="flex items-center gap-5 p-5 bg-white border border-border rounded-2xl hover:border-accent/50 hover:shadow-sm transition-colors duration-300 cursor-default"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-10 h-10 flex-shrink-0"
              />
              <div className="min-w-0">
                <h4 className="text-sm font-bold mb-1">{tech.name}</h4>
                <p className="text-xs text-sub leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
