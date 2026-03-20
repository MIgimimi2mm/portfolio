import Link from "next/link";
import ImageSlider from "./ImageSlider";

const meta = [
  { label: "製作人数", value: "6人" },
  { label: "制作期間", value: "1ヶ月" },
  { label: "制作時期", value: "学部4年" },
  { label: "使用技術", value: "React Native / TypeScript", icon: "/logo-react.svg" },
];

const features = [
  {
    num: "01",
    title: "廃棄ログ・可視化",
    desc: "廃棄した食品名・廃棄量・購入量を記録し、月ごとの廃棄量と損失金額をグラフで可視化。データを蓄積することで、自分の行動を振り返るきっかけを提供します。",
    imgs: ["/AnalyticsScreen1.jpg", "/AnalyticsScreen2.jpg", "/AnalyticsScreen3.jpg"],
  },
  {
    num: "02",
    title: "AI購入診断",
    desc: "商品名・内容量・賞味期限を入力すると、Gemini Flash 2.5 Lite が購入量の適否を判断し、代替案とともにアドバイスを返します。買い物中にその場で使えることを重視して設計しました。",
    imgs: ["/AIDiagnosisScreen1.jpg", "/AIDiagnosisScreen2.jpg", "/AIDiagnosisScreen3.jpg"],
  },
  {
    num: "03",
    title: "食材カレンダー",
    desc: "AIの提案と連携し、購入食材の使用スケジュールをカレンダーで管理できます。消費期限や使用予定を一覧で把握することで、計画的な自炊をサポートします。",
    imgs: ["/CalendarScreen1.jpg", "/CalendarScreen2.jpg", "/CalendarScreen3.jpg"],
  },
];

export default function HackathonProject() {
  return (
    <main className="min-h-screen px-8 md:px-16 lg:px-24">

      {/* ─── Hero ─── */}
      <section className="min-h-screen flex flex-col pt-10">
        <div className="max-w-4xl mx-auto w-full flex flex-col flex-1">
          <Link href="/#projects" className="self-start text-xs text-sub hover:text-[#039ADA] transition-colors mb-16">
            ← 戻る
          </Link>
          <div className="flex-1 flex flex-col md:flex-row items-center gap-16 md:gap-0 pb-20">
            <div className="md:w-[44%] flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-px bg-[#039ADA] block" />
                <span className="text-[11px] font-mono text-[#039ADA] tracking-[0.25em] uppercase font-bold">Project A</span>
              </div>
              <h1 className="text-[88px] md:text-[118px] font-black text-[#FF7B53] leading-[0.9] tracking-tight mb-8">Chop</h1>
              <p className="text-base text-sub mb-8">食材の買い過ぎを、買う前に防ぐ。</p>
              <span className="self-start text-[11px] font-bold text-[#039ADA] border border-[#039ADA]/30 bg-[#039ADA]/5 px-3 py-1.5 rounded-full mb-10">
                Tornado 2025 最優秀賞受賞
              </span>
              <dl className="border-t border-border w-full max-w-xs">
                {meta.map((item) => (
                  <div key={item.label} className="flex items-center gap-8 py-3 border-b border-border">
                    <dt className="text-xs text-sub w-16 shrink-0">{item.label}</dt>
                    <dd className="flex items-center gap-1.5 text-sm font-semibold">
                      {item.icon && <img src={item.icon} alt="" className="w-4 h-4" />}
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <a href="https://github.com/yudo417/Workspace_katsuUdon.git" target="_blank" rel="noopener noreferrer"
                className="self-start mt-8 text-[11px] text-sub hover:text-[#039ADA] transition-colors">
                github.com/yudo417/Workspace_katsuUdon →
              </a>
            </div>
            <div className="md:w-[56%] flex items-center justify-center md:justify-end -mr-8 md:-mr-24 lg:-mr-136">
              <img src="/chop-phones.png" alt="Chop" className="w-full max-w-[640px] md:w-[110%] object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 01 Problem ─── */}
      <section className="-mx-8 md:-mx-16 lg:-mx-24 bg-[#01202d] text-white px-8 md:px-16 lg:px-24 py-28">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-[#FF7B53] tracking-[0.3em] uppercase mb-16">01 — Problem</p>

          {/* 見出し + 画像 */}
          <div className="grid md:grid-cols-[7fr_3fr] gap-12 items-center mb-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.2] mb-6">
                買った食材、<br />全部使い切れていますか？
              </h2>
              <p className="text-white/60 leading-relaxed text-base">
                一人暮らしを始めた大学生の多くが直面する、慣れない自炊と余らせてしまう食材の問題。その根本は「廃棄後の対処」ではなく「購入時の判断」にあると私たちは考えました。
              </p>
            </div>
            <img
              src="/使い切れてる？.png"
              alt="買った食材、全部使い切れていますか？"
              className="rounded-3xl w-full object-contain"
            />
          </div>

          {/* 問題の流れ */}
          <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-0 mb-20">
            {[
              { step: "STEP 1", label: "大学生", sub: "一人暮らし・自炊初心者" },
              { step: "STEP 2", label: "慣れない買い物", sub: "不定期な自炊・量の判断が難しい" },
              { step: "STEP 3", label: "使い切れずに廃棄", sub: "食材もお金も無駄に" },
            ].flatMap((item, i) => [
              <div key={item.step} className="flex-1 border-l-4 border-[#039ADA] bg-white/5 rounded-r-2xl px-6 py-5">
                <p className="text-[10px] text-[#039ADA] font-mono tracking-widest mb-2">{item.step}</p>
                <p className="font-bold text-base mb-1">{item.label}</p>
                <p className="text-xs text-white/50 leading-snug">{item.sub}</p>
              </div>,
              i < 2 ? (
                <div key={`arrow-${i}`} className="hidden md:flex shrink-0 mx-3 items-center self-stretch">
                  <svg className="text-white/20" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5l8 7-8 7V5z" />
                  </svg>
                </div>
              ) : null,
            ])}
          </div>

          {/* 43% */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="shrink-0 text-center">
              <div className="relative inline-block leading-none">
                <span className="text-[88px] md:text-[108px] font-black text-[#FF7B53] leading-none">43</span>
                <span className="text-2xl font-black text-[#FF7B53] absolute bottom-2 -right-6">%</span>
              </div>
            </div>
            <div>
              <p className="text-lg md:text-xl font-bold mb-3">家庭フードロスの約43%は「直接廃棄」</p>
              <p className="text-white/60 text-sm leading-relaxed">
                手つかず・食べ残しではなく「最初から捨てる」直接廃棄の割合は、増加傾向にあります。<br />
                そこで私たちは廃棄が起きてから対処するのではなく、<strong className="text-white">食材を購入する段階で防ぐ</strong>アプローチを考えました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02 Solution ─── */}
      <section className="-mx-8 md:-mx-16 lg:-mx-24 bg-[#039ADA] text-white px-8 md:px-16 lg:px-24 py-28">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-white/60 tracking-[0.3em] uppercase mb-16">02 — Solution</p>
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 mb-16">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black leading-[1.15] mb-6">購入する前に手を打つ</h2>
              <p className="text-white/80 text-base max-w-xl">
                食材の買い物中にAIに相談することで、無駄な買い物を防ぎます。
                {/* TODO 文章がAIっぽい。トンマナが浮いて見える */}
              </p>
            </div>
            <img
              src="/解決策.png"
              alt="解決策"
              className="w-full md:w-72 lg:w-80 rounded-2xl object-contain shrink-0"
            />
          </div>

          <div className="flex flex-col md:flex-row items-start">
            {[
              {
                title: "廃棄量・損失を可視化",
                desc: "廃棄した量と損した金額を記録してグラフで可視化",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="28" width="8" height="14" rx="2" />
                    <rect x="20" y="18" width="8" height="24" rx="2" />
                    <rect x="34" y="8" width="8" height="34" rx="2" />
                  </svg>
                ),
              },
              {
                title: "使用計画を立てる",
                desc: "食品を使い切るためのスケジュールをカレンダーで管理",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="10" width="36" height="32" rx="3" />
                    <line x1="6" y1="20" x2="42" y2="20" />
                    <line x1="16" y1="6" x2="16" y2="14" />
                    <line x1="32" y1="6" x2="32" y2="14" />
                    <line x1="14" y1="30" x2="20" y2="30" />
                    <line x1="24" y1="30" x2="34" y2="30" />
                    <line x1="14" y1="36" x2="24" y2="36" />
                  </svg>
                ),
              },
              {
                title: "買う前にAIがアドバイス",
                desc: "購入で迷ったらAIが適切な量をその場で診断・提案",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M24 6l2.5 7.5L34 16l-7.5 2.5L24 26l-2.5-7.5L14 16l7.5-2.5z" />
                    <path d="M10 30l1.5 4.5L16 36l-4.5 1.5L10 42l-1.5-4.5L4 36l4.5-1.5z" />
                    <path d="M36 28l1.2 3.8L41 33l-3.8 1.2L36 38l-1.2-3.8L31 33l3.8-1.2z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={item.title} className="flex flex-col md:flex-row items-center flex-1">
                <div className="flex flex-col items-center text-center flex-1 px-6 py-8">
                  <div className="w-32 h-32 rounded-full bg-white/15 flex items-center justify-center text-white mb-6">
                    {item.icon}
                  </div>
                  <p className="font-bold text-lg mb-2">{item.title}</p>
                  <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
                </div>
                {i < 2 && (
                  <svg className="hidden md:block shrink-0 text-white" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5l8 7-8 7V5z" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 03 Tech Stack ─── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-[#039ADA] tracking-[0.3em] uppercase mb-10">03 — Tech Stack</p>
          <h2 className="text-4xl font-black mb-12">使用技術</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white border border-white/80 rounded-2xl p-7 flex flex-col items-center gap-5">
              <p className="text-xs text-sub self-stretch text-center border-b border-border pb-4 tracking-widest">API</p>
              <img
                src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
                alt="Gemini"
                className="w-16 h-16 object-contain"
              />
              <p className="font-bold text-center text-sm">Gemini Flash<br />2.5 Lite</p>
            </div>
            <div className="bg-white border border-white/80 rounded-2xl p-7 flex flex-col gap-5">
              <p className="text-xs text-sub text-center border-b border-border pb-4 tracking-widest">フロントエンド</p>
              <div className="flex flex-col gap-4 items-center">
                {[
                  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                  { name: "React Native", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                  { name: "Expo", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg" },
                ].map((t) => (
                  <div key={t.name} className="flex items-center gap-3">
                    <img src={t.src} alt={t.name} className="w-8 h-8 object-contain" />
                    <span className="font-semibold text-sm">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-white/80 rounded-2xl p-7 flex flex-col items-center gap-5">
              <p className="text-xs text-sub self-stretch text-center border-b border-border pb-4 tracking-widest">データベース</p>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
                alt="SQLite"
                className="w-16 h-16 object-contain"
              />
              <p className="font-bold text-sm">SQLite</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 04 Features ─── */}
      <section className="-mx-8 md:-mx-16 lg:-mx-24 bg-section px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-[#039ADA] tracking-[0.3em] uppercase mb-10">04 — Features</p>
          <h2 className="text-4xl font-black mb-20">機能紹介</h2>
          <div className="flex flex-col gap-24">
            {features.map((f, i) => (
              <div
                key={f.num}
                className={`flex flex-col md:flex-row gap-10 md:gap-16 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="w-full md:w-1/2 shrink-0">
                  <ImageSlider imgs={f.imgs} alt={f.title} />
                </div>
                <div className="md:w-1/2">
                  <p className="text-[80px] font-black text-[#039ADA]/20 leading-none mb-2 -ml-1">{f.num}</p>
                  <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                  <p className="text-sub leading-relaxed text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 05 My Role ─── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-[#039ADA] tracking-[0.3em] uppercase mb-10">05 — My Role</p>
          <h2 className="text-4xl font-black mb-12">担当・工夫した点</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "フロントエンド実装", desc: "React Native + Expo でカレンダー画面・廃棄記録の可視化画面を中心に実装。アプリ全体のUIトンマナの整理も担当しました。" },
              { title: "UX改善の提案", desc: "操作の迷いをなくすため、画面ごとの導線を繰り返し議論・調整しました。審査員からUI/UXを直接評価していただきました。" },
              { title: "議論を重ねた選択", desc: "チームで不要な機能を削る議論を重ね、誰でも直感的に使えるシンプルさを追求しました。「AI購入診断」1つに絞ることで、迷いのない体験を実現しました。" },
            ].map((r) => (
              <div key={r.title} className="border-t-4 border-[#039ADA] bg-white rounded-b-2xl p-6 shadow-sm">
                <p className="font-bold mb-3 text-foreground">{r.title}</p>
                <p className="text-sm text-sub leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 06 Award ─── */}
      <section className="-mx-8 md:-mx-16 lg:-mx-24 bg-section px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="md:w-1/2">
            <p className="text-xs font-mono text-[#039ADA] tracking-[0.3em] uppercase mb-6">06 — Award</p>
            <p className="text-4xl md:text-5xl font-black leading-[1.2] mb-2">最優秀賞 受賞</p>
            <p className="text-sm font-mono text-sub tracking-widest mb-8">Tornado 2025</p>
            <p className="text-sub text-base leading-relaxed">
              Tornado 2025 にて、全チームの中から最優秀賞を受賞しました。審査員からはUI/UXの完成度と、課題設定の解像度の高さを評価いただきました。
            </p>
          </div>
          <div className="w-full md:w-1/2 shrink-0">
            <img
              src="https://bcnretail.kuroco.app/files/user/202509181141_5.jpg"
              alt="最優秀賞受賞"
              className="w-full rounded-2xl object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      {/* ─── 07 Related ─── */}
      <section className="-mx-8 md:-mx-16 lg:-mx-24 bg-section px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-[#039ADA] tracking-[0.3em] uppercase mb-10">07 — Related</p>
          <h2 className="text-4xl font-black mb-12">関連リンク</h2>
          <div className="grid md:grid-cols-3 gap-6">

            {/* YouTube */}
            <a href="https://m.youtube.com/live/EAOvNJF7OXE?si=ICHJ5_d2krcC9qPQ" target="_blank" rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src="https://img.youtube.com/vi/EAOvNJF7OXE/maxresdefault.jpg"
                  alt="ハッカソン発表会"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold text-[#039ADA] tracking-widest uppercase mb-2 block">YouTube Live</span>
                <p className="font-bold text-sm leading-snug">ハッカソン発表会 ライブ配信</p>
                <p className="text-xs text-sub mt-2">Tornado 2025</p>
              </div>
            </a>

            {/* GenZ.jp */}
            <a href="https://genz.jp/news/20251006/" target="_blank" rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src="https://genz.jp/wp-content/uploads/2025/10/20250828_news_img-001.png"
                  alt="GenZ.jp 掲載記事"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold text-[#039ADA] tracking-widest uppercase mb-2 block">記事</span>
                <p className="font-bold text-sm leading-snug">GenZ.jp 掲載記事</p>
                <p className="text-xs text-sub mt-2">genz.jp</p>
              </div>
            </a>

            {/* BCN+R */}
            <a href="https://www.bcnretail.com/news/detail/20250918_557332.html" target="_blank" rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src="https://bcnretail.kuroco.app/files/user/202509181141_5.jpg"
                  alt="BCN+R 掲載記事"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold text-[#039ADA] tracking-widest uppercase mb-2 block">記事</span>
                <p className="font-bold text-sm leading-snug">BCN+R 掲載記事</p>
                <p className="text-xs text-sub mt-2">bcnretail.com</p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* ─── CTA ── bg: white に着地 ─── */}
      <div className="max-w-4xl mx-auto py-28 flex flex-col items-center text-center gap-6">
        <p className="text-3xl font-black">コードを読んでみる</p>
        <a
          href="https://github.com/yudo417/Workspace_katsuUdon.git"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold px-8 py-4 bg-[#FF7B53] text-white rounded-2xl hover:opacity-80 transition-opacity"
        >
          GitHub でコードを見る →
        </a>
      </div>

    </main>
  );
}
