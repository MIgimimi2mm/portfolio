import Link from "next/link";

const meta = [
  { label: "製作人数", value: "1人", icon: "" },
  { label: "制作期間", value: "学部3年~現在", icon: "" },
  {
    label: "使用技術", value: "", icons: [
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    ]
  },
  { label: "概要", value: "アルバイト先レンタカー店", icon: "" },

];

const systems = [
  {
    num: "01",
    title: "OTA予約の自動集約",
    desc: "楽天・じゃらんなど複数OTAから届く予約確認メールを Python で自動取得し、正規表現で予約者名・貸出日・予約車種を抽出。スプレッドシートへ即時反映し、担当者の転記作業を完全になくしました。",
    stack: [
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Google Sheets API", src: "https://cdn.simpleicons.org/googlesheets" },
    ],
    effect: [
      "予約データの転記作業を自動化",
      "手作業による入力ミスを削減",
    ],
    imgs: [],
    imageUrl: "/auto01.png",
  },
  {
    num: "02",
    title: "QRコードを用いた\n傷チェックシステム",
    desc: "紙への手書きで管理していた車両の傷記録をデジタル化しました。スタッフが傷写真をアップロードし、車内のQRコードを読み取ることでお客様ご自身でも傷の状態をその場で確認できる仕組みを構築。記録の曖昧さがなくなり、傷に関するトラブルを削減しました。",
    stack: [
      { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "SQLite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
    ],
    effect: [
      "傷写真で記録の曖昧さを解消",
      "傷に関するトラブルを削減"
    ],
    imgs: [],
    imageUrl: "/auto02.png",
    imgSmall: true,
  },
  {
    num: "03",
    title: "オーバーブッキングの自動検知",
    desc: "スプレッドシートに集約されたOTA予約データと予約管理システムの入力済み予約を照合し、未入力の予約をアルゴリズムで自動仮割当。在庫を割り当てられなかった場合はLINEで担当者に通知し、オーバーブッキングを早期に気づく仕組みを構築しました。",
    stack: [
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Messaging API", src: "https://cdn.simpleicons.org/line" },
    ],
    effect: [
      "オーバーブッキングの発生を抑制",
    ],
    imgs: [],
    imageUrl: "/over.png",
    imgWidth: "w-5/6",
  },
];

export default function AutomationProject() {
  return (
    <main className="min-h-screen px-8 md:px-16 lg:px-24">

      {/* ─── Hero ─── */}
      <section className="min-h-screen flex flex-col pt-10">
        <div className="max-w-4xl mx-auto w-full flex flex-col flex-1">
          <Link href="/#projects" className="self-start text-xs text-[#9A9898] hover:text-[#1A1A1A] transition-colors mb-12">
            ← 戻る
          </Link>

          <div className="flex-1 flex flex-col justify-center pb-16">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-[#7C3AED] block" />
                <span className="text-[11px] font-mono text-[#7C3AED] tracking-[0.25em] uppercase">Project C</span>
              </div>
              <h1 className="text-[76px] md:text-[108px] font-black text-[#1A1A1A] leading-[0.88] tracking-tight mb-6">
                レンタカーDX
              </h1>
              <p className="text-base text-[#9A9898]">アルバイト先に導入した業務効率化システム</p>
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch">
              {/* Meta */}
              <div className="md:w-[40%] flex flex-col">
                <dl className="border-t border-[#E2E0DE] w-full mt-8">
                  {meta.map((item) => (
                    <div key={item.label} className="flex items-center gap-8 py-3 border-b border-[#E2E0DE]">
                      <dt className="text-xs text-[#9A9898] w-16 shrink-0">{item.label}</dt>
                      <dd className="flex items-center gap-1.5 text-sm font-semibold text-[#1A1A1A]">
                        {item.icons && item.icons.length > 0 ? item.icons.map((ic: { name: string; src: string }, i: number) => (
                          <span key={ic.name} className="flex items-center gap-1">
                            {i > 0 && <span className="text-[#9A9898] mx-0.5">/</span>}
                            <img src={ic.src} alt={ic.name} className="w-4 h-4" />
                            {ic.name}
                          </span>
                        )) : item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                {/* Systems index */}
                <div className="mt-8 flex flex-col gap-3">
                  {systems.map((s) => (
                    <div key={s.num} className="flex items-center gap-4">
                      <span className="text-[11px] font-mono text-[#7C3AED]/50">{s.num}</span>
                      <span className="text-xs text-[#9A9898] leading-snug">{s.title.replace("\n", " ")}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Hero image */}
              <div className="md:w-[60%]">
                <div className="w-full h-full min-h-[200px] rounded-2xl overflow-hidden">
                  <img src="/carhero.png" alt="レンタカーDX hero" className="w-full h-full object-cover" />
                </div>
                <p className="text-[9px] text-[#9A9898]/50 mt-1 text-center leading-tight">
                  <a href="https://storyset.com/transport" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#9A9898]">Transport illustrations by Storyset</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Background ─── */}
      <section className="-mx-8 md:-mx-16 lg:-mx-24 bg-[#F0EFED] px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-14">
            <span className="text-[10px] font-mono text-[#7C3AED] tracking-[0.4em] uppercase shrink-0">Background</span>
            <div className="flex-1 h-px bg-[#e0dcd6]" />
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <div className="md:w-[62%]">
              <h2 className="text-3xl md:text-4xl font-black mb-8">
                アルバイト先で開発に至るまで
              </h2>
              <div className="space-y-4 text-base text-[#9A9898] leading-[2]">
                <p>アルバイト先のレンタカー店では、予約・在庫・顧客管理など複数のシステムが連携しておらず、毎日の予約確認や転記といった定型作業の多くが手作業で行われており工数が多くなっていました。</p>
                <p>自発的に自動化ツールを作成して社内に提案したところ好評を得たため、現場の様々な課題に対してシステム開発を広げていきました。</p>
              </div>
            </div>
            <div className="md:w-[38%]">
              <img src="/道のり.png" alt="開発の道のり" className="w-full h-auto rounded-2xl object-contain" />
              <p className="text-[9px] text-[#9A9898]/50 mt-1 text-center leading-tight">
                <a href="https://storyset.com/work" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#9A9898]">Work illustrations by Storyset</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Systems ─── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-[#7C3AED] tracking-[0.3em] uppercase mb-6">Systems</p>
          <h2 className="text-3xl md:text-4xl font-black mb-20">作ったシステム</h2>

          <div className="flex flex-col gap-28">
            {systems.map((s, i) => (
              <div key={s.num} className={`flex flex-col md:flex-row gap-12 md:gap-16 items-start ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>

                {/* Images */}
                <div className="w-full md:w-1/2 shrink-0">
                  {(s as typeof s & { imageUrl?: string }).imageUrl ? (
                    <div>
                      <div className="w-full h-full min-h-[300px] flex items-start rounded-2xl overflow-hidden">
                        <img src={(s as typeof s & { imageUrl?: string }).imageUrl} alt={s.title} className={`h-auto max-h-min object-contain object-top ${(s as typeof s & { imgWidth?: string }).imgWidth ?? ((s as typeof s & { imgSmall?: boolean }).imgSmall ? "w-3/4" : "w-full")}`} />
                      </div>
                      {i === 1 && (
                        <p className="text-[9px] text-[#9A9898]/50 mt-1 text-center leading-tight">
                          <a href="https://storyset.com/technology" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#9A9898]">Technology illustrations by Storyset</a>
                        </p>
                      )}
                      {i === 2 && (
                        <p className="text-[9px] text-[#9A9898]/50 mt-1 text-center leading-tight">
                          <a href="https://storyset.com/online" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#9A9898]">Online illustrations by Storyset</a>
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {s.imgs.map((label, j) => (
                        <div key={j} className={`w-full ${s.imgs.length === 1 ? "aspect-[3/4]" : "aspect-video"} bg-[#F5F0FF] rounded-2xl flex items-center justify-center ${j === 1 ? "opacity-70" : ""}`}>
                          <p className="text-[10px] font-mono tracking-widest uppercase opacity-30 text-center px-4">{label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Text */}
                <div className="md:w-1/2 pt-2">
                  <p className="text-[72px] font-black text-[#7C3AED]/15 leading-none mb-3 -ml-1">{s.num}</p>

                  <h3 className="text-2xl font-black text-[#1A1A1A] leading-[1.2] mb-5 whitespace-pre-line">{s.title}</h3>
                  <p className="text-sm text-[#9A9898] leading-[2] mb-8">{s.desc}</p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {s.stack.map((t) => (
                      <div key={t.name} className="flex items-center gap-2">
                        <img src={t.src} alt={t.name} className="w-5 h-5 object-contain" />
                        <span className="text-sm font-semibold text-[#1A1A1A]">{t.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Effect */}
                  <div className="border-t border-[#E2E0DE] pt-5">
                    <p className="text-[10px] font-mono text-[#9A9898] tracking-widest uppercase mb-3">Effect</p>
                    <ul className="flex flex-col gap-2">
                      {(Array.isArray(s.effect) ? s.effect : [s.effect]).map((eff, j) => (
                        <li key={j} className="flex gap-3 text-sm text-[#1A1A1A] font-medium leading-relaxed">
                          <span className="text-[#3DAA70] shrink-0 mt-0.5 mt-[2px]">✓</span>
                          <span>{eff}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Result ─── */}
      <section className="-mx-8 md:-mx-16 lg:-mx-24 bg-[#F0EFED] px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-[#7C3AED] tracking-[0.3em] uppercase mb-6">Result</p>
          <h2 className="text-3xl md:text-4xl font-black mb-16">導入の成果</h2>

          {/* アイコン＋説明文 横並び */}
          <div className="flex flex-col md:flex-row items-start mb-20">
            {[
              {
                title: "転記ミスゼロへ",
                desc: "OTA予約の自動集約で転記作業を完全排除。手作業によるミスが解消",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="4" width="24" height="32" rx="3" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                    <path d="M14 14h12M14 20h12M14 26h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="36" cy="34" r="8" fill="#EDE9FF" stroke="currentColor" strokeWidth="2" />
                    <path d="M32 34l2.5 2.5L40 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "顧客トラブル激減",
                desc: "QRコードによる傷チェックのデジタル化で記録の曖昧さを解消",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4L8 10v14c0 9 7 17 16 20 9-3 16-11 16-20V10L24 4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                    <path d="M17 24l5 5 9-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "OBリスク解消",
                desc: "在庫の自動照合とLINE通知でオーバーブッキングを早期検知。",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 6a14 14 0 0 1 14 14c0 6 1 10 3 13H7c2-3 3-7 3-13A14 14 0 0 1 24 6z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                    <path d="M20 33c0 2.2 1.8 4 4 4s4-1.8 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="36" cy="12" r="5" fill="#7C3AED" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={item.title} className="flex flex-col md:flex-row items-center flex-1">
                <div className="flex flex-col items-center text-center flex-1 px-6 py-8">
                  <div className="w-24 h-24 rounded-full bg-[#EDE9FF] flex items-center justify-center text-[#7C3AED] mb-6">
                    {item.icon}
                  </div>
                  <p className="font-bold text-lg mb-2">{item.title}</p>
                  <p className="text-sm text-[#9A9898] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* コメントブロック（D案） */}
          <div className="rounded-2xl overflow-hidden border border-[#E2E0DE]">
            {/* 上段ラベル帯（1カラム） */}
            <div className="bg-white px-8 py-6 border-b border-[#E2E0DE]">
              <p className="text-[10px] font-mono text-[#7C3AED] tracking-[0.4em] uppercase mb-2">Voice</p>
              <p className="text-xl font-black text-[#1A1A1A]">I.H.社長より</p>
              <p className="text-xs text-[#9A9898] mt-1">導入後にコメントをいただきました。</p>
            </div>
            {/* 下段引用（2カラム） */}
            <div className="bg-white px-8 md:px-12 py-8">
              <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
                <div className="md:flex-1">
                  <p className="text-[64px] font-black text-[#7C3AED]/10 leading-none select-none">&ldquo;</p>
                  <p className="text-sm text-[#1A1A1A] leading-[2.2] -mt-4">
                    予約・在庫管理が連携しておらず手作業が多かった当店の課題を、現場目線で解決してくれました。OTA予約の自動集約で転記ミスを一掃し、QRコードによる傷チェックのデジタル化で顧客トラブルも激減。さらに在庫の自動照合とLINE通知でオーバーブッキングを未然に防げるようになり、繁忙期でも安心して運営できています。単なる効率化に留まらず、ミスのない安全な店舗運営の基盤を作ってくれたことに感謝しています。
                  </p>
                  <p className="text-xs text-[#9A9898] font-mono mt-6">— I.H.社長</p>
                </div>
                <div className="md:w-[140px] shrink-0" style={{ marginTop: "30px" }}>
                  <img src="/president.png" alt="店舗責任者" className="w-full aspect-[3/4] rounded-2xl object-cover" style={{ objectPosition: "center 50%" }} />
                  <p className="text-[9px] text-[#9A9898]/50 mt-1 text-center leading-tight">
                    <a href="https://storyset.com/people" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#9A9898]">People illustrations by Storyset</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
