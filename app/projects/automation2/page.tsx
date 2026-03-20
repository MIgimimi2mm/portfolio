import Link from "next/link";

// 図解案2: Before / After 比較 — 手作業 vs 自動化を縦2段で対比

export default function Page() {
  return (
    <main className="min-h-screen px-8 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto py-10">
        <div className="flex gap-4 mb-12 text-xs font-mono">
          <Link href="/projects/automation1" className="text-[#9A9898] hover:text-[#1A1A1A]">案1</Link>
          <span className="text-[#ccc]">|</span>
          <Link href="/projects/automation" className="text-[#9A9898] hover:text-[#1A1A1A]">← 本番</Link>
          <span className="text-[#ccc]">|</span>
          <Link href="/projects/automation3" className="text-[#9A9898] hover:text-[#1A1A1A]">案3</Link>
          <Link href="/projects/automation4" className="text-[#9A9898] hover:text-[#1A1A1A]">案4</Link>
        </div>
        <p className="text-xs text-[#9A9898] mb-8 font-mono">図解案2 — Before / After 比較</p>

        <div className="max-w-xs">
          <svg viewBox="0 0 280 420" xmlns="http://www.w3.org/2000/svg" className="w-full">

            {/* ══ BEFORE ══ */}
            <rect x="10" y="10" width="260" height="185" rx="10" fill="#FFF8F8" stroke="#E2E0DE" strokeWidth="1.5"/>
            <rect x="10" y="10" width="260" height="28" rx="10" fill="#E2E0DE"/>
            <rect x="10" y="28" width="260" height="10" rx="0" fill="#E2E0DE"/>
            <text x="140" y="29" textAnchor="middle" fontSize="10" fontWeight="700" fill="#9A9898" fontFamily="monospace">BEFORE — 手作業</text>

            {/* OTA → メール */}
            <rect x="24" y="52" width="56" height="28" rx="5" fill="white" stroke="#E2E0DE" strokeWidth="1"/>
            <text x="52" y="70" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1A1A1A">OTA</text>

            <line x1="80" y1="66" x2="100" y2="66" stroke="#9A9898" strokeWidth="1.5"/>
            <polygon points="97,62 105,66 97,70" fill="#9A9898"/>

            <rect x="104" y="52" width="56" height="28" rx="5" fill="white" stroke="#E2E0DE" strokeWidth="1"/>
            <text x="132" y="70" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1A1A1A">メール</text>

            <line x1="160" y1="66" x2="180" y2="66" stroke="#9A9898" strokeWidth="1.5"/>
            <polygon points="177,62 185,66 177,70" fill="#9A9898"/>

            {/* 人間アイコン */}
            <circle cx="209" cy="58" r="6" fill="none" stroke="#9A9898" strokeWidth="1.5"/>
            <path d="M200 80 Q209 70 218 80" fill="none" stroke="#9A9898" strokeWidth="1.5"/>
            <text x="209" y="92" textAnchor="middle" fontSize="8" fill="#9A9898">手入力</text>

            {/* 手入力 → Sheets */}
            <line x1="140" y1="100" x2="140" y2="115" stroke="#9A9898" strokeWidth="1" strokeDasharray="3 2"/>
            <polygon points="135,113 145,113 140,119" fill="#9A9898" fillOpacity="0.5"/>

            <rect x="75" y="120" width="130" height="28" rx="5" fill="white" stroke="#E2E0DE" strokeWidth="1"/>
            <text x="140" y="138" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1A1A1A">スプレッドシート</text>

            {/* ×マーク */}
            <text x="248" y="160" textAnchor="middle" fontSize="22" fontWeight="900" fill="#EF4444" fillOpacity="0.6">✕</text>
            <text x="140" y="178" textAnchor="middle" fontSize="9" fill="#9A9898">毎日50件を手で転記 / ミスが発生しやすい</text>

            {/* ══ AFTER ══ */}
            <rect x="10" y="210" width="260" height="185" rx="10" fill="#F5F0FF" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.4"/>
            <rect x="10" y="210" width="260" height="28" rx="10" fill="#7C3AED" fillOpacity="0.15"/>
            <rect x="10" y="228" width="260" height="10" fill="#7C3AED" fillOpacity="0.15"/>
            <text x="140" y="229" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7C3AED" fontFamily="monospace">AFTER — 自動化</text>

            {/* OTA → Python → Sheets */}
            <rect x="24" y="252" width="56" height="28" rx="5" fill="white" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.4"/>
            <text x="52" y="270" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1A1A1A">OTA</text>

            <line x1="80" y1="266" x2="100" y2="266" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.5"/>
            <polygon points="97,262 105,266 97,270" fill="#7C3AED" fillOpacity="0.5"/>

            <rect x="100" y="252" width="70" height="28" rx="5" fill="white" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.4"/>
            <text x="135" y="264" textAnchor="middle" fontSize="7" fill="#7C3AED" fontFamily="monospace">Python</text>
            <text x="135" y="275" textAnchor="middle" fontSize="8" fontWeight="700" fill="#1A1A1A">自動解析</text>

            <line x1="170" y1="266" x2="190" y2="266" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.5"/>
            <polygon points="187,262 195,266 187,270" fill="#7C3AED" fillOpacity="0.5"/>

            <rect x="192" y="252" width="64" height="28" rx="5" fill="white" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.4"/>
            <text x="224" y="270" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1A1A1A">Sheets</text>

            {/* ✓マーク */}
            <text x="248" y="360" textAnchor="middle" fontSize="22" fontWeight="900" fill="#22C55E" fillOpacity="0.7">✓</text>
            <text x="140" y="375" textAnchor="middle" fontSize="9" fill="#7C3AED" fontWeight="700">0分 ／ 50件/日 完全自動</text>

          </svg>
        </div>
      </div>
    </main>
  );
}
