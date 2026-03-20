import Link from "next/link";

// 図解案3: ハブ&スポーク — Pythonが中心、OTA群が周囲から流れ込み、Sheetsへ出力

export default function Page() {
  return (
    <main className="min-h-screen px-8 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto py-10">
        <div className="flex gap-4 mb-12 text-xs font-mono">
          <Link href="/projects/automation1" className="text-[#9A9898] hover:text-[#1A1A1A]">案1</Link>
          <Link href="/projects/automation2" className="text-[#9A9898] hover:text-[#1A1A1A]">案2</Link>
          <span className="text-[#ccc]">|</span>
          <Link href="/projects/automation" className="text-[#9A9898] hover:text-[#1A1A1A]">← 本番</Link>
          <span className="text-[#ccc]">|</span>
          <Link href="/projects/automation4" className="text-[#9A9898] hover:text-[#1A1A1A]">案4</Link>
        </div>
        <p className="text-xs text-[#9A9898] mb-8 font-mono">図解案3 — ハブ&スポーク（Pythonが中心）</p>

        <div className="max-w-xs">
          <svg viewBox="0 0 280 420" xmlns="http://www.w3.org/2000/svg" className="w-full">

            {/* ── OTA ソース（上段、扇形に配置） ── */}
            {/* 楽天 */}
            <rect x="16" y="20" width="72" height="32" rx="6" fill="white" stroke="#E2E0DE" strokeWidth="1.5"/>
            <text x="52" y="40" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1A1A1A">楽天</text>

            {/* じゃらん */}
            <rect x="104" y="10" width="72" height="32" rx="6" fill="white" stroke="#E2E0DE" strokeWidth="1.5"/>
            <text x="140" y="30" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1A1A1A">じゃらん</text>

            {/* その他 */}
            <rect x="192" y="20" width="72" height="32" rx="6" fill="white" stroke="#E2E0DE" strokeWidth="1.5"/>
            <text x="228" y="40" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1A1A1A">その他OTA</text>

            {/* OTA → Python のスポーク */}
            <line x1="88" y1="52" x2="128" y2="148" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="5 3"/>
            <line x1="140" y1="42" x2="140" y2="135" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="5 3"/>
            <line x1="192" y1="52" x2="152" y2="148" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="5 3"/>

            {/* メールラベル */}
            <text x="60" y="105" fontSize="7" fill="#9A9898" fontFamily="monospace" transform="rotate(-30 60 105)">予約メール</text>
            <text x="148" y="90" fontSize="7" fill="#9A9898" fontFamily="monospace">予約メール</text>
            <text x="175" y="95" fontSize="7" fill="#9A9898" fontFamily="monospace" transform="rotate(30 175 95)">予約メール</text>

            {/* ── Python ハブ（中心） ── */}
            <circle cx="140" cy="190" r="52" fill="#F5F0FF" stroke="#7C3AED" strokeWidth="2" strokeOpacity="0.4"/>
            <circle cx="140" cy="190" r="44" fill="white" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.2"/>
            <text x="140" y="182" textAnchor="middle" fontSize="8" fill="#7C3AED" fontFamily="monospace" letterSpacing="1">Python</text>
            <text x="140" y="197" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1A1A1A">解析・構造化</text>
            <text x="140" y="211" textAnchor="middle" fontSize="8" fill="#9A9898">正規表現で抽出</text>

            {/* Python → GAS 矢印 */}
            <line x1="140" y1="242" x2="140" y2="268" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.4"/>
            <polygon points="134,265 146,265 140,273" fill="#7C3AED" fillOpacity="0.4"/>
            <text x="148" y="258" fontSize="7" fill="#9A9898" fontFamily="monospace">GAS 経由で反映</text>

            {/* ── Google Sheets 出力 ── */}
            <rect x="60" y="278" width="160" height="44" rx="8" fill="#F5F0FF" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.5"/>
            <text x="140" y="296" textAnchor="middle" fontSize="8" fill="#7C3AED" fontFamily="monospace" letterSpacing="1">OUTPUT</text>
            <text x="140" y="312" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1A1A1A">Google Sheets 自動入力</text>

            {/* 成果テキスト */}
            <text x="140" y="355" textAnchor="middle" fontSize="9" fill="#9A9898">手入力時間</text>
            <text x="140" y="372" textAnchor="middle" fontSize="22" fontWeight="900" fill="#7C3AED">0 分</text>
            <text x="140" y="390" textAnchor="middle" fontSize="9" fill="#9A9898">繁忙期 50件/日 を自動処理</text>

          </svg>
        </div>
      </div>
    </main>
  );
}
