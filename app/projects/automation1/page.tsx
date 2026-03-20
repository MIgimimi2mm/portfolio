import Link from "next/link";

// 図解案1: 縦ステップフロー — ボックス+矢印の直線的な流れ

export default function Page() {
  return (
    <main className="min-h-screen px-8 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto py-10">
        <div className="flex gap-4 mb-12 text-xs font-mono">
          <Link href="/projects/automation" className="text-[#9A9898] hover:text-[#1A1A1A]">← 本番</Link>
          <span className="text-[#ccc]">|</span>
          <Link href="/projects/automation2" className="text-[#9A9898] hover:text-[#1A1A1A]">案2</Link>
          <Link href="/projects/automation3" className="text-[#9A9898] hover:text-[#1A1A1A]">案3</Link>
          <Link href="/projects/automation4" className="text-[#9A9898] hover:text-[#1A1A1A]">案4</Link>
        </div>
        <p className="text-xs text-[#9A9898] mb-8 font-mono">図解案1 — 縦ステップフロー（ボックス+直線矢印）</p>

        <div className="max-w-xs">
          <svg viewBox="0 0 280 420" xmlns="http://www.w3.org/2000/svg" className="w-full">

            {/* ── OTA ソース群 ── */}
            <rect x="10" y="10" width="80" height="36" rx="6" fill="white" stroke="#E2E0DE" strokeWidth="1.5"/>
            <text x="50" y="33" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1A1A1A">楽天</text>

            <rect x="100" y="10" width="80" height="36" rx="6" fill="white" stroke="#E2E0DE" strokeWidth="1.5"/>
            <text x="140" y="33" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1A1A1A">じゃらん</text>

            <rect x="190" y="10" width="80" height="36" rx="6" fill="white" stroke="#E2E0DE" strokeWidth="1.5"/>
            <text x="230" y="33" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1A1A1A">その他OTA</text>

            {/* OTA → 集約線 */}
            <line x1="50"  y1="46" x2="140" y2="80" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 3"/>
            <line x1="140" y1="46" x2="140" y2="80" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 3"/>
            <line x1="230" y1="46" x2="140" y2="80" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 3"/>

            {/* ラベル */}
            <text x="140" y="73" textAnchor="middle" fontSize="8" fill="#9A9898" fontFamily="monospace">予約確認メール</text>

            {/* ── Gmail API ── */}
            <rect x="60" y="88" width="160" height="44" rx="8" fill="#F5F0FF" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.4"/>
            <text x="140" y="106" textAnchor="middle" fontSize="8" fill="#7C3AED" fontFamily="monospace" letterSpacing="1">STEP 01</text>
            <text x="140" y="122" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1A1A1A">Gmail API で自動取得</text>

            {/* 矢印 */}
            <line x1="140" y1="132" x2="140" y2="158" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.4"/>
            <polygon points="134,155 146,155 140,163" fill="#7C3AED" fillOpacity="0.4"/>
            <text x="148" y="149" fontSize="8" fill="#9A9898" fontFamily="monospace">正規表現で抽出</text>

            {/* ── Python 解析 ── */}
            <rect x="60" y="170" width="160" height="44" rx="8" fill="#F5F0FF" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.4"/>
            <text x="140" y="188" textAnchor="middle" fontSize="8" fill="#7C3AED" fontFamily="monospace" letterSpacing="1">STEP 02</text>
            <text x="140" y="204" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1A1A1A">Python で解析・構造化</text>

            {/* 矢印 */}
            <line x1="140" y1="214" x2="140" y2="240" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.4"/>
            <polygon points="134,237 146,237 140,245" fill="#7C3AED" fillOpacity="0.4"/>
            <text x="148" y="231" fontSize="8" fill="#9A9898" fontFamily="monospace">GAS 経由で即時反映</text>

            {/* ── Google Sheets ── */}
            <rect x="60" y="252" width="160" height="44" rx="8" fill="#F5F0FF" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.4"/>
            <text x="140" y="270" textAnchor="middle" fontSize="8" fill="#7C3AED" fontFamily="monospace" letterSpacing="1">STEP 03</text>
            <text x="140" y="286" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1A1A1A">Sheets へ自動入力</text>

            {/* ── 成果 ── */}
            <rect x="20" y="318" width="240" height="36" rx="6" fill="#7C3AED" fillOpacity="0.08" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.3"/>
            <text x="140" y="338" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7C3AED">手入力時間 → 0分 ／ 50件/日を自動処理</text>

            {/* 矢印（Sheetsから成果へ） */}
            <line x1="140" y1="296" x2="140" y2="316" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.4"/>
            <polygon points="134,313 146,313 140,320" fill="#7C3AED" fillOpacity="0.4"/>

          </svg>
        </div>
      </div>
    </main>
  );
}
