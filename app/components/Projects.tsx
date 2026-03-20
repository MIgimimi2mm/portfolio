"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const projects = [
  {
    tag: "PROJECT A",
    title: "Chop",
    subtitle: "最優秀賞受賞",
    description:
      "食材の買いすぎを購入する前に防ぎ、節約しながらフードロス問題にアプローチするアプリ。Tornado 2025 ハッカソンで最優秀賞を受賞。",
    thumbnail: "/thumb-chop.png",
    href: "/projects/hackathon",
  },
  {
    tag: "PROJECT B",
    title: "ミライリング",
    subtitle: "優秀賞受賞",
    description:
      "無声発話認識をするための指輪型インターフェースを製作。大学の研究で製作。Hakodate 2025 アカデミックリンクで優秀賞を受賞。",
    thumbnail: "/projectBサムネ.png",
    href: "/projects/mirailing",
  },
  {
    tag: "PROJECT C",
    title: "レンタカーDX",
    subtitle: "",
    description:
      "レンタカーのアルバイト先で業務効率化のために複数のシステムを開発。OTA予約の自動集約、QRコードを使った傷チェック、オーバーブッキング自動検知など、現場の課題に沿ったシステムを開発。",
    thumbnail: "/thumb-automation.png",
    href: "/projects/automation",
  },
  {
    tag: "PROJECT D",
    title: "ハイテクガーデン",
    subtitle: "",
    description:
      "街中の空き地を小規模な畑に転用し、通行人に水やりをしてもらうことで、参加型の農業を実現を目指したプロジェクト。",
    thumbnail: "/thumb-garden.png",
    href: "/projects/high-tech-garden",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          custom={0}
          className="text-2xl md:text-3xl font-bold text-center mb-4"
        >
          Works
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          custom={1}
          className="text-center text-sub mb-12"
        >
          制作実績
        </motion.p>

        <div className="grid md:grid-cols-2 gap-x-6 gap-y-10 max-w-3xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.tag}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
              custom={i}
            >
              <Link href={project.href} className="group block">
                {/* Thumbnail with overlay on hover */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="w-full aspect-video rounded-xl overflow-hidden mb-3 relative"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md">
                      View Project →
                    </span>
                  </div>
                </motion.div>

                <div className="flex items-baseline gap-2 mb-1.5">
                  <span className="text-[11px] font-mono text-accent font-bold">
                    {project.tag}
                  </span>
                  {project.subtitle && (
                    <span className="text-[11px] font-bold text-accent/60">
                      {project.subtitle}
                    </span>
                  )}
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-sub leading-relaxed">
                  {project.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
