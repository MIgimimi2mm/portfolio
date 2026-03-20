"use client";
import Link from "next/link";
import { QrCode, HandPointing, Drop } from "@phosphor-icons/react";

const meta = [
  { label: "製作人数", value: "7人", icons: [] },
  { label: "制作期間", value: "4ヶ月", icons: [] },
  { label: "制作時期", value: "学部3年", icons: [] },
  {
    label: "使用技術",
    value: "",
    icons: [
      { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Raspberry Pi", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
    ],
  },
];

export default function Page() {
  return (
    <main className="min-h-screen px-8 md:px-16 lg:px-24">
      <section className="min-h-screen flex flex-col pt-10 -mx-8 md:-mx-16 lg:-mx-24 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto w-full flex flex-col flex-1">
          <Link href="/#projects" className="self-start text-xs text-[#9A9898] hover:text-[#1A1A1A] transition-colors mb-12">← 戻る</Link>
          <div className="flex-1 flex flex-col justify-center pb-16">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
              <div className="md:w-[45%] flex flex-col">
                <div className="flex items-center gap-3 mb-8"><span className="w-6 h-px bg-[#51652f] block" /><span className="text-[11px] font-mono text-[#51652f] tracking-[0.25em] uppercase">Project D</span></div>
                <img src="/hatakelogo.png" alt="ハイテクガーデン" className="w-80 object-contain mb-8" />
                <p className="text-base text-[#9A9898] mb-6">街の空き地を畑に変え、通行人が水やりに参加<br />できる体験型の新しい畑</p>
                <dl className="border-t border-[#E2E0DE] w-full">
                  {meta.map((item) => (
                    <div key={item.label} className="flex items-center gap-8 py-3 border-b border-[#E2E0DE]">
                      <dt className="text-xs text-[#9A9898] w-16 shrink-0">{item.label}</dt>
                      <dd className="flex items-center gap-1.5 text-sm font-semibold text-[#1A1A1A]">
                        {item.icons.length > 0 ? item.icons.map((ic, i) => (<span key={ic.name} className="flex items-center gap-1">{i > 0 && <span className="text-[#9A9898] mx-0.5">/</span>}<img src={ic.src} alt={ic.name} className="w-4 h-4" />{ic.name}</span>)) : item.value}
                      </dd>
                    </div>
                  ))}
                  <div className="flex items-center gap-8 py-3 border-b border-[#E2E0DE]"><dt className="text-xs text-[#9A9898] w-16 shrink-0">概要</dt><dd className="text-sm font-semibold text-[#1A1A1A]">政策提言プロジェクト</dd></div>
                </dl>
              </div>
              <div className="md:w-[55%]"><img src="/hatakehero.png" alt="ハイテクガーデン" className="w-full object-contain" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 00 Context / Theme ─── */}
      <section className="-mx-8 md:-mx-16 lg:-mx-24 bg-[#f6f7f7] px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-14">
            <span className="text-[10px] font-mono text-[#51652f] tracking-[0.4em] uppercase shrink-0">01 — Theme</span>
            <div className="flex-1 h-px bg-[#e0dcd6]" />
          </div>
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="md:w-[65%]">
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] leading-[1.15] mb-8">
                データを分析し、<br />新しい政策を提言する
              </h2>
              <div className="space-y-4 text-sm text-[#9A9898] leading-[2]">
                <p>「AI時代の地域の未来をデザインする」をテーマにした、函館市への政策提言プロジェクトに取り組みました。大学が位置する函館市をフィールドに、通年のプロジェクト学習として7人のチームで取り組みました。</p>
                <p>函館市の農業データと空き地データをそれぞれ分析する中で、２つの課題を結びつけて解決できると考え、本提言に至りました。</p>
              </div>
            </div>
            <div className="md:w-[35%]">
              <img src="/hakodate.png" alt="函館市" className="w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* 案1: 縦線カラム区切り・大数字ドーン */}
      <section className="-mx-8 md:-mx-16 lg:-mx-24 bg-white px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-14">
            <span className="text-[10px] font-mono text-[#51652f] tracking-[0.4em] uppercase shrink-0">02 — Problem</span>
            <div className="flex-1 h-px bg-[#e0dcd6]" />
          </div>
          <div className="flex flex-col md:flex-row gap-12 md:gap-4 items-center mb-20">
            <div className="md:w-[57%]">
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] leading-[1.15] mb-5">私たちが着目した<br />函館市の課題</h2>
              <p className="text-sm text-[#888] max-w-xl leading-[1.9]">函館市では、農業と空き地に関する2つの地域課題が同時に発生していました。</p>
            </div>
            <div className="md:w-[43%] flex justify-center">
              <img src="/課題.png" alt="函館市の課題" className="w-3/4 md:w-full max-w-[130px] object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-0 mb-20">
            {/* 課題① */}
            <div className="md:pr-12 md:border-r border-[#e0dcd6]">
              <p className="text-[10px] font-mono text-[#51652f] tracking-[0.4em] uppercase mb-3">課題 01</p>
              <p className="text-[28px] font-black text-[#1A1A1A] mb-6 leading-[1.15]">耕地面積の減少と<br />農家の負担増加</p>
              <img src="/back1.png" alt="耕地面積グラフ" className="w-full object-contain mb-1" />
              <p className="text-[10px] text-[#ccc] text-right mb-8 leading-relaxed">RESAS 地域課題分析システム<br />https://resas.go.jp/#/1/01202</p>
              <div className="py-4 border-b border-[#e0dcd6] flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#888] mb-1">経営耕地面積（2005→2020）</p>
                  <p className="text-base font-bold text-[#555]">179,680a → 109,757a</p>
                </div>
                <p className="text-[36px] font-black text-[#51652f] leading-none shrink-0">38.9<span className="text-sm">%減</span></p>
              </div>
              <div className="py-4 border-b border-[#e0dcd6] flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#888] mb-1">1経営体あたりの経営耕地面積（2005→2020）</p>
                  <p className="text-base font-bold text-[#555]">468a → 704a</p>
                </div>
                <p className="text-[36px] font-black text-[#e05a4e] leading-none shrink-0">50.4<span className="text-sm">%増</span></p>
              </div>
              <div className="flex justify-center mt-5 mb-3">
                <svg width="24" height="14" viewBox="0 0 24 14" fill="currentColor" className="text-[#51652f]/40">
                  <path d="M12 14L0 0h24L12 14z" />
                </svg>
              </div>
              <p className="text-[22px] font-black text-[#51652f] leading-[1.3] text-center">農業従事者の負担が増加している</p>
            </div>

            {/* 課題② */}
            <div className="md:pl-12 mt-16 md:mt-0">
              <p className="text-[10px] font-mono text-[#51652f] tracking-[0.4em] uppercase mb-3">課題 02</p>
              <p className="text-[28px] font-black text-[#1A1A1A] mb-6 leading-[1.15]">空き地の増加と<br />雑草除去</p>
              <img src="/back2.png" alt="課題②" className="w-full object-contain mb-1" />
              <p className="text-[10px] text-[#ccc] text-right mb-5 leading-relaxed">函館市中心市街地空き地・空き店舗等現状調査<br />https://www.city.hakodate.hokkaido.jp/docs/2022072600092/</p>
              <div className="flex justify-center mb-3">
                <svg width="24" height="14" viewBox="0 0 24 14" fill="currentColor" className="text-[#51652f]/40">
                  <path d="M12 14L0 0h24L12 14z" />
                </svg>
              </div>
              <p className="text-[22px] font-black text-[#51652f] leading-[1.3] mb-6 text-center">函館市の空き地が増加している</p>
              <p className="text-xl font-black text-[#1A1A1A] leading-[1.4] mb-4">空き地による雑草に関する条例</p>
              <div className="space-y-3 mt-1">
                <div className="flex items-center justify-between">
                  <div className="bg-[#51652f] text-white text-sm font-black rounded w-8 self-stretch flex items-center justify-center [writing-mode:vertical-rl] shrink-0">現状</div>
                  <div className="w-[80px] h-[80px] rounded-full border border-[#7a9a5a] flex items-center justify-center text-xs font-bold text-center text-[#333] leading-tight shrink-0">空き地の<br />雑草繁茂</div>
                  <svg width="10" height="7" viewBox="0 0 12 8" fill="currentColor" className="text-[#999] shrink-0"><path d="M8 0l4 4-4 4V5H0V3h8V0z" /></svg>
                  <div className="w-[80px] h-[80px] rounded-full border border-[#7a9a5a] flex items-center justify-center text-xs font-bold text-center text-[#333] leading-tight shrink-0">衛生害虫<br />の発生</div>
                  <svg width="10" height="7" viewBox="0 0 12 8" fill="currentColor" className="text-[#999] shrink-0"><path d="M8 0l4 4-4 4V5H0V3h8V0z" /></svg>
                  <div className="w-[80px] h-[80px] rounded-full border border-[#7a9a5a] flex items-center justify-center text-xs font-bold text-center text-[#333] leading-tight shrink-0">健康被害</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="bg-[#51652f] text-white text-sm font-black rounded w-8 self-stretch flex items-center justify-center [writing-mode:vertical-rl] shrink-0">理想</div>
                  <div className="w-[80px] h-[80px] rounded-full border border-[#7a9a5a] flex items-center justify-center text-xs font-bold text-center text-[#333] leading-tight shrink-0">雑草の<br />除去</div>
                  <svg width="10" height="7" viewBox="0 0 12 8" fill="currentColor" className="text-[#999] shrink-0"><path d="M8 0l4 4-4 4V5H0V3h8V0z" /></svg>
                  <div className="w-[80px] h-[80px] rounded-full border border-[#7a9a5a] flex items-center justify-center text-xs font-bold text-center text-[#333] leading-tight shrink-0">衛生環境<br />の確保</div>
                  <svg width="10" height="7" viewBox="0 0 12 8" fill="currentColor" className="text-[#999] shrink-0"><path d="M8 0l4 4-4 4V5H0V3h8V0z" /></svg>
                  <div className="w-[80px] h-[80px] rounded-full border border-[#7a9a5a] flex items-center justify-center text-xs font-bold text-center text-[#333] leading-tight shrink-0">生活環境<br />の保持</div>
                </div>
              </div>
              <p className="text-[10px] text-[#ccc] text-right mt-3 leading-relaxed">空き地の雑草等の除去について<br />https://www.city.hakodate.hokkaido.jp/docs/2014010700223/</p>
              <div className="flex justify-center mt-3 mb-3">
                <svg width="24" height="14" viewBox="0 0 24 14" fill="currentColor" className="text-[#51652f]/40">
                  <path d="M12 14L0 0h24L12 14z" />
                </svg>
              </div>
              <p className="text-[22px] font-black text-[#51652f] leading-[1.3] text-center">函館市は雑草を問題視している</p>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 03 Solution ─── */}
      <section className="-mx-8 md:-mx-16 lg:-mx-24 bg-[#f6f7f7] px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-14">
            <span className="text-[10px] font-mono text-[#51652f] tracking-[0.4em] uppercase shrink-0">03 — Solution</span>
            <div className="flex-1 h-px bg-[#e0dcd6]" />
          </div>
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="md:w-[45%]">
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] leading-[1.15] mb-6">
                空き地を<br />みんなの畑に
              </h2>
              <div className="space-y-4 text-sm text-[#9A9898] leading-[2]">
                <p>空き地を畑に転用し、設置したラズパイとスマートフォンアプリを連携させることで、通行人がQRコードをスキャンするだけで水やりに参加できるシステムを提案しました。</p>
                <p>農業従事者の負担を地域全体で分散しながら、空き地の管理問題も同時に解決する、2つの課題を一つで解決するアイデアです。</p>
              </div>
            </div>
            <div className="md:w-[55%]">
              <img src="/システムの流れ.png" alt="システムの流れ" className="w-full object-contain" />
            </div>
          </div>

          {/* ステップ */}
          <div className="mt-16">
            <div className="flex flex-col md:flex-row items-start">
              {[
                {
                  title: "QRコードをスキャン",
                  desc: "空き地に設置された看板のQRコードをスマートフォンで読み込む",
                  icon: <QrCode className="w-16 h-16" />,
                },
                {
                  title: "水やりボタンをタップ",
                  desc: "アプリ上の水やりボタンをタップする",
                  icon: <HandPointing className="w-16 h-16" />,
                },
                {
                  title: "ラズパイが水を散布",
                  desc: "ラズパイが信号を受信し、自動的に水を散布する",
                  icon: <Drop className="w-16 h-16" />,
                },
              ].map((item, i) => (
                <div key={item.title} className="flex flex-col md:flex-row items-center flex-1">
                  <div className="flex flex-col items-center text-center flex-1 px-6 py-4">
                    <div className="w-32 h-32 rounded-full bg-[#E8ECDF] flex items-center justify-center text-[#51652f] mb-6">
                      {item.icon}
                    </div>
                    <p className="font-bold text-lg mb-2">{item.title}</p>
                    <p className="text-sm text-[#9A9898] leading-relaxed">{item.desc}</p>
                  </div>
                  {i < 2 && (
                    <svg className="hidden md:block shrink-0 text-[#c8d4b8]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ─── 04 Technology ─── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-[#51652f] tracking-[0.3em] uppercase mb-10">04 — Technology</p>
          <h2 className="text-3xl md:text-4xl font-black mb-12">技術スタック</h2>

          <div className="grid grid-cols-2 gap-6">
            {/* フロントエンド */}
            <div className="bg-[#F2F4EE] rounded-2xl p-7 flex flex-col items-center gap-5">
              <p className="text-xs text-[#9A9898] self-stretch text-center border-b border-[#E2E0DE] pb-4 tracking-widest">フロントエンド</p>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                alt="Next.js"
                className="w-16 h-16 object-contain"
              />
              <p className="font-bold text-sm">Next.js</p>
            </div>
            {/* ハードウェア */}
            <div className="bg-[#F2F4EE] rounded-2xl p-7 flex flex-col items-center gap-5">
              <p className="text-xs text-[#9A9898] self-stretch text-center border-b border-[#E2E0DE] pb-4 tracking-widest">ハードウェア</p>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg"
                alt="Raspberry Pi"
                className="w-16 h-16 object-contain"
              />
              <p className="font-bold text-sm">Raspberry Pi</p>
            </div>
          </div>
        </div>
      </section>
      <section className="-mx-8 md:-mx-16 lg:-mx-24 bg-[#F0EFED] px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-[#51652f] tracking-[0.3em] uppercase mb-10">05 — Features</p>
          <h2 className="text-3xl md:text-4xl font-black mb-16">機能紹介</h2>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            <div className="md:w-[40%]">
              <img src="/hatakekinou.png" alt="機能紹介" className="w-full object-contain rounded-xl" />
            </div>
            <div className="md:w-[60%] space-y-8">
              {[
                { title: "畑の状態確認", desc: "畑の気温、湿度をラズパイでリアルタイムに取得します。" },
                { title: "水やりボタン", desc: "タッチすることで畑に設置されたラズパイが水を散布します。" },
                { title: "説明", desc: "ハイテクガーデンの背景や活動の経緯を表示します。" },
                { title: "仕組み", desc: "システムの構成や仕組みを表示します。" },
              ].map((f, i) => (
                <div key={f.title} className="flex gap-6 items-start border-t border-[#e0dcd6] pt-4">
                  <span className="text-[40px] font-black text-[#51652f]/20 leading-none shrink-0 w-12 text-right">0{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-lg text-[#1A1A1A] mb-1">{f.title}</h3>
                    <p className="text-sm text-[#9A9898] leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-mono text-[#51652f] tracking-[0.4em] uppercase mb-14">06 — Result</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-16">プロジェクトの成果</h2>

          <div className="space-y-20">
            {/* 01 学内プロトタイプでトマト栽培に成功 */}
            <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-16 items-center">
              <div className="md:w-[50%]">
                <p className="text-[10px] font-mono text-[#51652f] tracking-[0.3em] uppercase mb-3">01</p>
                <h3 className="text-3xl md:text-4xl font-black text-[#1A1A1A] leading-[1.2] mb-4">
                  学内プロトタイプで<br />トマト栽培に成功
                </h3>
                <p className="text-sm text-[#9A9898] leading-[2]">
                  ラズパイ連携システムを学内で実際に稼働させ、温度・湿度・水やりを自動制御しながらトマトの栽培に成功しました。
                </p>
              </div>
              <div className="md:w-[50%]">
                <img src="/tomato.png" alt="学内プロトタイプでトマト栽培に成功" className="w-full rounded-lg object-cover" />
              </div>
            </div>

            {/* 02 函館市職員への政策提言 */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
              <div className="md:w-[50%]">
                <p className="text-[10px] font-mono text-[#51652f] tracking-[0.3em] uppercase mb-3">02</p>
                <h3 className="text-3xl md:text-4xl font-black text-[#1A1A1A] leading-[1.2] mb-4">
                  函館市職員への<br />政策提言
                </h3>
                <p className="text-sm text-[#9A9898] leading-[2]">
                  実際に函館市の職員に対してプレゼンを行い、スマート農業による地域課題解決の提案を届けました。システムの仕組みから導入効果まで、実データをもとに説明しました。
                </p>
              </div>
              <div className="md:w-[50%]">
                <img src="/teian.png" alt="函館市職員への政策提言" className="w-full rounded-lg object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
