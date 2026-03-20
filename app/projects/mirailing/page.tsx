import Link from "next/link";

const steps = [
  { num: "01", title: "センシング", desc: "指輪から超音波を照射し\n反射波を受信" },
  { num: "02", title: "画像変換", desc: "反射波を画像に変換" },
  { num: "03", title: "機械学習", desc: "2D CNNで発話コマンドのデータを学習" },
  { num: "04", title: "発話内容の識別", desc: "学習したモデルが口パクの内容を識別" },
];

const meta = [
  { label: "製作人数", value: "1人" },
  { label: "制作期間", value: "1年間" },
  { label: "制作時期", value: "学部4年" },
  { label: "使用技術", value: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
];

export default function MirailingProject() {
  return (
    <main className="min-h-screen px-8 md:px-16 lg:px-24">

      {/* ─── Hero ─── */}
      <section className="min-h-screen flex flex-col pt-10">
        <div className="max-w-4xl mx-auto w-full flex flex-col flex-1">
          <Link href="/#projects" className="self-start text-xs text-[#9A9898] hover:text-[#1A1A1A] transition-colors mb-12">
            ← 戻る
          </Link>

          <div className="flex-1 flex flex-col justify-center pb-16">
            <div className="mb-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-[#C41E3A] block" />
                <span className="text-[11px] font-mono text-[#C41E3A] tracking-[0.25em] uppercase">Project B</span>
              </div>
              <h1 className="text-[80px] md:text-[112px] font-black text-[#1A1A1A] leading-[0.9] tracking-tight">ミライリング</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
              <div className="md:w-[45%] flex flex-col">
                <p className="text-base text-[#9A9898] mb-6">口パクをを認識する新しい入力インターフェース</p>
                <span className="self-start text-[11px] text-[#C41E3A] border border-[#C41E3A]/30 bg-[#C41E3A]/5 px-3 py-1.5 rounded-full mb-8">
                  Hakodate 2025 優秀賞受賞
                </span>
                <dl className="border-t border-[#E2E0DE] w-full mt-8">
                  {meta.map((item) => (
                    <div key={item.label} className="flex items-center gap-8 py-3 border-b border-[#E2E0DE]">
                      <dt className="text-xs text-[#9A9898] w-16 shrink-0">{item.label}</dt>
                      <dd className="flex items-center gap-1.5 text-sm font-semibold text-[#1A1A1A]">
                        {item.icon && <img src={item.icon} alt="" className="w-4 h-4" />}
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="flex items-center gap-8 py-3 border-b border-[#E2E0DE]">
                  <dt className="text-xs text-[#9A9898] w-16 shrink-0">概要</dt>
                  <dd className="text-sm font-semibold text-[#1A1A1A]">卒業研究の研究テーマ</dd>
                </div>
              </div>
              <div className="md:w-[45%] mt-8">
                <img src="/herosection.png" alt="ミライリング" className="w-full object-contain max-h-[350px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Overview ─── */}
      <section className="-mx-8 md:-mx-16 lg:-mx-24 bg-[#F0EFED] px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto">

          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">

            {/* 左: テキスト */}
            <div className="md:w-[45%] shrink-0">
              <p className="text-[10px] font-mono text-[#C41E3A] tracking-[0.4em] uppercase mb-6">Overview</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A] leading-[1.3] mb-8">
                口パクの動きをセンシングし<br />発話内容を認識する指輪
              </h2>
              <div className="space-y-4 text-base text-[#9A9898] leading-[2]">
                <p>
                  ミライリングは、声を出さずに口と舌だけを動かす無音発話（口パク）の動きをセンシングし、何を発話しているかを認識する自作の指輪型デバイスです。
                </p>
                <p>
                  音声アシスタントAIの急速な発達により、公共の場でも音声入力のニーズが高まっています。その一方で、声を出すことへの抵抗やプライバシーへの懸念も根強く残っています。そこで、声を一切出さずに操作できるインターフェースの実現に取り組みました。
                </p>
                <p>
                  学部4年の卒業研究として、デバイスの設計・制作から機械学習による認識システムの実装まで、一人で取り組んだ研究です。
                </p>
              </div>
            </div>

            {/* 右: 挿絵スペース */}
            <div className="flex-1">
              <img src="/mirairing.png" alt="ミライリングの仕組み" className="w-full object-contain rounded-2xl" />
            </div>

          </div>

        </div>
      </section>

      {/* ─── How It Works ─── 白背景 */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto">

          <p className="text-[10px] font-mono text-[#C41E3A] tracking-[0.4em] uppercase mb-4">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] leading-[1.1] mb-12">
            超音波センシングと<br />機械学習で無音操作を実現
          </h2>

          {/* 成果テキスト */}
          <div className="mb-16">
            <p className="text-base text-[#9A9898] leading-[2]">
              指輪型デバイスから超音波を口元に照射し、口・舌の動きによって変化する反射波を受信します。この反射波を時間・周波数成分で表したスペクトログラム画像に変換し、2D CNNへ入力することで発話コマンドを識別します。学習・評価の結果、テストデータに対する認識精度は<span className="font-bold text-[#1A1A1A]">97%</span>に達しました。
            </p>
          </div>

          {/* 4ステップテキスト */}
          <div className="flex mb-6">
            {steps.flatMap((step, i) => [
              <div key={step.num} className="flex-1 min-w-0">
                <p className="text-[40px] font-black text-[#E2E0DE] leading-none mb-3">{step.num}</p>
                <p className="font-black text-sm text-[#1A1A1A] mb-1.5">{step.title}</p>
                <p className="text-sm text-[#9A9898] leading-relaxed pr-4 whitespace-pre-line">{step.desc}</p>
              </div>,
              i < 3 ? <div key={`sp-${i}`} className="w-px bg-[#E2E0DE] shrink-0 mx-6 mt-2" /> : null,
            ])}
          </div>

          {/* 流れイメージ */}
          <div className="flex justify-center mb-6">
            <img src="/流れのイメージ.png" alt="システムの流れ" className="w-full object-contain" />
          </div>

        </div>
      </section>

      {/* ─── Award ─── グレー背景 */}
      <section className="-mx-8 md:-mx-16 lg:-mx-24 bg-[#F0EFED] px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="md:w-1/2">
            <p className="text-[10px] font-mono text-[#C41E3A] tracking-[0.4em] uppercase mb-6">Award</p>
            <p className="text-4xl md:text-5xl font-black leading-[1.2] text-[#1A1A1A] mb-2">優秀賞 受賞</p>
            <p className="text-sm font-mono text-[#9A9898] tracking-widest mb-8">Hakodate 2025 アカデミックリンク</p>
            <p className="text-[#9A9898] text-base leading-relaxed">
              Hakodate 2025 アカデミックリンクにて、優秀賞を受賞しました。超音波センシングと機械学習を組み合わせた先進的な研究内容が評価されました。
            </p>
          </div>
          <div className="w-full md:w-1/2 shrink-0">
            <img src="/ringaward.jpg" alt="優秀賞受賞" className="w-full rounded-2xl object-cover shadow-md" />
          </div>
        </div>
      </section>

      {/* ─── Related ─── 白背景 */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-mono text-[#C41E3A] tracking-[0.4em] uppercase mb-10">Related</p>
          <h2 className="text-4xl font-black text-[#1A1A1A] mb-12">関連リンク</h2>
          <div className="grid md:grid-cols-2 gap-6">

            <a href="https://www.fun.ac.jp/activity/30192" target="_blank" rel="noopener noreferrer"
              className="group border border-[#E2E0DE] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden aspect-video">
                <img src="/ringsam1.jpg" alt="公立はこだて未来大学 掲載記事" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 bg-white">
                <span className="text-[10px] font-bold text-[#C41E3A] tracking-widest uppercase mb-2 block">記事</span>
                <p className="font-bold text-sm leading-snug text-[#1A1A1A]">公立はこだて未来大学 掲載記事</p>
                <p className="text-xs text-[#9A9898] mt-2">fun.ac.jp</p>
              </div>
            </a>

            <a href="https://www.cc-hakodate.jp/cch_info/8028" target="_blank" rel="noopener noreferrer"
              className="group border border-[#E2E0DE] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden aspect-video">
                <img src="/ringsam2.jpg" alt="函館地域産業振興財団 掲載記事" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 bg-white">
                <span className="text-[10px] font-bold text-[#C41E3A] tracking-widest uppercase mb-2 block">記事</span>
                <p className="font-bold text-sm leading-snug text-[#1A1A1A]">函館地域産業振興財団 掲載記事</p>
                <p className="text-xs text-[#9A9898] mt-2">cc-hakodate.jp</p>
              </div>
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}
