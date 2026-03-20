"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const timeline = [
  { year: "2022", text: "埼玉県立伊奈学園総合高等学校 卒業" },
  { year: "2022", text: "公立はこだて未来大学 システム情報科学部 入学" },
  { year: "2024", text: "地方創生★アイディアコンテスト 出場" },
  { year: "2025", text: "Tornado 2025 ハッカソン 最優秀賞 受賞" },
  { year: "2025", text: "Hakodate 2025 アカデミックリンク 優秀賞 受賞" }, //a
  { year: "2026", text: "公立はこだて未来大学 卒業見込み" },
  { year: "2026", text: "大学院 システム情報科学研究科 進学予定" },
];

const qualifications = ["基本情報技術者"];

const strengths = [
  {
    number: "01",
    title: "ユーザー目線での体験改善",
    description:
      "ユーザーの課題を深く理解し、議論を重ねながら最適な導線・UIを設計できるよう心がけています。",
  },
  {
    number: "02",
    title: "直感的なUI設計",
    description:
      "必要な情報を過不足なく配置し、ユーザーを操作に迷わせないUI設計を常に意識しています。",
  },
  {
    number: "03",
    title: "自主的な改善提案",
    description:
      "開発時の違和感や非効率を見逃さず、周囲を巻き込みながら改善案を提案・推進していくことを大切にしています。",
  },
];

export default function About() {
  const photoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" className="py-24 px-6 bg-section">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          custom={0}
          className="text-2xl md:text-3xl font-bold text-center mb-4"
        >
          About
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          custom={1}
          className="text-center text-sub mb-12"
        >
          自己紹介・経歴
        </motion.p>

        {/* 2-column layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-16">
          {/* Left: Photo with parallax */}
          <motion.div
            ref={photoRef}
            style={{ y: photoY }}
            className="flex-shrink-0"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="w-80 h-[400px] md:w-96 md:h-[480px] rounded-2xl border border-border overflow-hidden"
            >
              <img
                src="/about-photo.jpg"
                alt="Asako Naoto"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
            className="max-w-md"
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-1">浅古 尚登</h3>
              <p className="text-sub text-sm mb-1">Asako Naoto</p>
              <p className="text-sub text-sm">
                公立はこだて未来大学 システム情報科学部 → 大学院進学予定
              </p>
            </div>

            {/* Timeline */}
            <div className="relative mb-8">
              <div className="absolute left-[56px] top-2 bottom-2 w-px bg-border" />
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06, ease: "easeOut" as const }}
                  className="relative flex items-start mb-3 last:mb-0"
                >
                  <span className="text-xs font-mono text-accent font-bold w-10 flex-shrink-0 pt-0.5">
                    {item.year}
                  </span>
                  <div className="relative z-10 mx-3 flex-shrink-0 mt-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent border-2 border-white" />
                  </div>
                  <p className="text-sm pt-0.5 pb-2">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Qualifications */}
            <div>
              <h3 className="text-sm font-bold text-sub mb-3">資格</h3>
              <div className="flex gap-3 flex-wrap">
                {qualifications.map((q) => (
                  <motion.span
                    key={q}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-sm px-4 py-2 bg-white border border-border rounded-lg cursor-default"
                  >
                    {q}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Self-introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          custom={0}
          className="mt-16 max-w-3xl mx-auto border-t border-border pt-10"
        >
          <h3 className="text-sm font-bold text-sub mb-5 tracking-wider uppercase">
            自己紹介文
          </h3>
          <p className="text-sm md:text-base leading-loose">
            はじめまして。公立はこだて未来大学システム情報科学部4年の浅古尚登です。
            大学では、新しいインターフェースの入力手法に関する研究に取り組んでいます。
          </p>
          <br />
          <p className="text-sm md:text-base leading-looses">
            開発では、ユーザーの課題やニーズを分析し、直感的に使えるように画面構成や導線を考えながら実装することを大切にしています。
            最近はAIを活用した開発にも取り組み、調査や試作、改善のサイクルを回しながらプロダクトを形にしています。
            フロントエンドを中心に、使いやすさを継続的に改善できるエンジニアを目指しています。
          </p>
        </motion.div>

        {/* Strengths */}
        <div className="mt-10 max-w-3xl mx-auto border-t border-border pt-10">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-sm font-bold text-sub mb-8 tracking-wider uppercase"
          >
            開発における自分自身の強み
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-10">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUp}
                custom={i + 1}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="cursor-default"
              >
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  className="text-3xl font-black text-accent/20 block mb-2"
                >
                  {s.number}
                </motion.span>
                <h4 className="text-sm font-bold mb-2 leading-snug">
                  {s.title}
                </h4>
                <p className="text-xs text-sub leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
