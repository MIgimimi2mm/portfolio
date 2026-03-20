import Link from "next/link";

// 図解案4: データ変換フォーカス — メール本文→構造化データへの変換プロセスを可視化

export default function Page() {
  return (
    <main className="min-h-screen px-8 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto py-10">
        <div className="flex gap-4 mb-12 text-xs font-mono">
          <Link href="/projects/automation1" className="text-[#9A9898] hover:text-[#1A1A1A]">案1</Link>
          <Link href="/projects/automation2" className="text-[#9A9898] hover:text-[#1A1A1A]">案2</Link>
          <Link href="/projects/automation3" className="text-[#9A9898] hover:text-[#1A1A1A]">案3</Link>
          <span className="text-[#ccc]">|</span>
          <Link href="/projects/automation" className="text-[#9A9898] hover:text-[#1A1A1A]">← 本番</Link>
        </div>
        <p className="text-xs text-[#9A9898] mb-8 font-mono">図解案4 — データ変換フォーカス（メール→テーブル）</p>

        <div className="max-w-xs">
          <svg viewBox="0 0 280 420" xmlns="http://www.w3.org/2000/svg" className="w-full">

            {/* ── INPUT: メール本文 ── */}
            <rect x="10" y="10" width="260" height="145" rx="8" fill="white" stroke="#E2E0DE" strokeWidth="1.5"/>
            {/* メールヘッダー */}
            <rect x="10" y="10" width="260" height="24" rx="8" fill="#F0EFED"/>
            <rect x="10" y="26" width="260" height="8" rx="0" fill="#F0EFED"/>
            <text x="20" y="27" fontSize="8" fill="#9A9898" fontFamily="monospace">受信トレイ — 楽天トラベル</text>

            {/* メール本文（テキスト） */}
            <text x="20" y="56" fontSize="8" fill="#9A9898" fontFamily="monospace">件名: 【楽天トラベル】予約確認</text>
            <text x="20" y="72" fontSize="8" fill="#9A9898" fontFamily="monospace">チェックイン: 2024/08/14</text>
            <text x="20" y="88" fontSize="8" fill="#9A9898" fontFamily="monospace">お客様名: 山田 太郎 様</text>
            <text x="20" y="104" fontSize="8" fill="#9A9898" fontFamily="monospace">車種: コンパクトカー</text>
            <text x="20" y="120" fontSize="8" fill="#9A9898" fontFamily="monospace">予約番号: RK-20240814-0032</text>
            <text x="20" y="136" fontSize="8" fill="#9A9898" fontFamily="monospace">...</text>

            {/* INPUTラベル */}
            <text x="244" y="24" textAnchor="end" fontSize="7" fill="#9A9898" fontFamily="monospace">INPUT</text>

            {/* ── Python 変換処理 ── */}
            <line x1="140" y1="155" x2="140" y2="172" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.4"/>
            <polygon points="134,169 146,169 140,177" fill="#7C3AED" fillOpacity="0.4"/>

            <rect x="50" y="178" width="180" height="36" rx="8" fill="#7C3AED" fillOpacity="0.08" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.3"/>
            <text x="140" y="192" textAnchor="middle" fontSize="7" fill="#7C3AED" fontFamily="monospace" letterSpacing="1">Python — 正規表現</text>
            <text x="140" y="206" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7C3AED">解析・フィールド抽出</text>

            <line x1="140" y1="214" x2="140" y2="231" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.4"/>
            <polygon points="134,228 146,228 140,235" fill="#7C3AED" fillOpacity="0.4"/>

            {/* ── OUTPUT: 構造化テーブル ── */}
            <rect x="10" y="237" width="260" height="130" rx="8" fill="#F5F0FF" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.4"/>
            {/* テーブルヘッダー */}
            <rect x="10" y="237" width="260" height="22" rx="8" fill="#7C3AED" fillOpacity="0.15"/>
            <rect x="10" y="251" width="260" height="8" rx="0" fill="#7C3AED" fillOpacity="0.15"/>
            <text x="20" y="252" fontSize="7" fill="#7C3AED" fontFamily="monospace">日付</text>
            <text x="90" y="252" fontSize="7" fill="#7C3AED" fontFamily="monospace">氏名</text>
            <text x="175" y="252" fontSize="7" fill="#7C3AED" fontFamily="monospace">車種</text>

            {/* テーブル行 */}
            <line x1="10" y1="270" x2="270" y2="270" stroke="#7C3AED" strokeWidth="0.5" strokeOpacity="0.2"/>
            <text x="20" y="266" fontSize="8" fill="#1A1A1A">08/14</text>
            <text x="90" y="266" fontSize="8" fill="#1A1A1A">山田 太郎</text>
            <text x="175" y="266" fontSize="8" fill="#1A1A1A">コンパクト</text>

            <line x1="10" y1="284" x2="270" y2="284" stroke="#7C3AED" strokeWidth="0.5" strokeOpacity="0.2"/>
            <text x="20" y="280" fontSize="8" fill="#1A1A1A">08/14</text>
            <text x="90" y="280" fontSize="8" fill="#1A1A1A">佐藤 花子</text>
            <text x="175" y="280" fontSize="8" fill="#1A1A1A">ミニバン</text>

            <line x1="10" y1="298" x2="270" y2="298" stroke="#7C3AED" strokeWidth="0.5" strokeOpacity="0.2"/>
            <text x="20" y="294" fontSize="8" fill="#1A1A1A">08/15</text>
            <text x="90" y="294" fontSize="8" fill="#1A1A1A">鈴木 一郎</text>
            <text x="175" y="294" fontSize="8" fill="#1A1A1A">SUV</text>

            <text x="140" y="322" textAnchor="middle" fontSize="7" fill="#9A9898" fontFamily="monospace">〜 自動で続く 〜</text>

            {/* OUTPUTラベル */}
            <text x="244" y="251" textAnchor="end" fontSize="7" fill="#7C3AED" fontFamily="monospace">OUTPUT</text>

            {/* 成果 */}
            <text x="140" y="390" textAnchor="middle" fontSize="9" fontWeight="700" fill="#7C3AED">手入力時間 0分 ／ 50件/日 自動処理</text>

          </svg>
        </div>

        <p className="text-xs text-[#9A9898] mt-16 mb-8 font-mono">文字なし版</p>
        <div className="max-w-xs">
          <svg viewBox="0 0 280 420" xmlns="http://www.w3.org/2000/svg" className="w-full">

            {/* ── INPUT ── */}
            <rect x="10" y="10" width="260" height="145" rx="8" fill="white" stroke="#E2E0DE" strokeWidth="1.5"/>
            <rect x="10" y="10" width="260" height="24" rx="8" fill="#F0EFED"/>
            <rect x="10" y="26" width="260" height="8" rx="0" fill="#F0EFED"/>

            {/* 本文の線ダミー */}
            <rect x="20" y="48" width="180" height="6" rx="2" fill="#E2E0DE" fillOpacity="0.6"/>
            <rect x="20" y="64" width="140" height="6" rx="2" fill="#E2E0DE" fillOpacity="0.6"/>
            <rect x="20" y="80" width="160" height="6" rx="2" fill="#E2E0DE" fillOpacity="0.6"/>
            <rect x="20" y="96" width="120" height="6" rx="2" fill="#E2E0DE" fillOpacity="0.6"/>
            <rect x="20" y="112" width="170" height="6" rx="2" fill="#E2E0DE" fillOpacity="0.6"/>
            <rect x="20" y="128" width="40" height="6" rx="2" fill="#E2E0DE" fillOpacity="0.6"/>

            {/* ── Python 変換処理 ── */}
            <line x1="140" y1="155" x2="140" y2="172" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.4"/>
            <polygon points="134,169 146,169 140,177" fill="#7C3AED" fillOpacity="0.4"/>

            <rect x="50" y="178" width="180" height="36" rx="8" fill="#7C3AED" fillOpacity="0.08" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.3"/>

            <line x1="140" y1="214" x2="140" y2="231" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.4"/>
            <polygon points="134,228 146,228 140,235" fill="#7C3AED" fillOpacity="0.4"/>

            {/* ── OUTPUT ── */}
            <rect x="10" y="237" width="260" height="130" rx="8" fill="#F5F0FF" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.4"/>
            <rect x="10" y="237" width="260" height="22" rx="8" fill="#7C3AED" fillOpacity="0.15"/>
            <rect x="10" y="251" width="260" height="8" rx="0" fill="#7C3AED" fillOpacity="0.15"/>

            {/* テーブル行ダミー */}
            <line x1="10" y1="270" x2="270" y2="270" stroke="#7C3AED" strokeWidth="0.5" strokeOpacity="0.2"/>
            <rect x="20" y="260" width="40" height="6" rx="2" fill="#1A1A1A" fillOpacity="0.15"/>
            <rect x="90" y="260" width="60" height="6" rx="2" fill="#1A1A1A" fillOpacity="0.15"/>
            <rect x="175" y="260" width="55" height="6" rx="2" fill="#1A1A1A" fillOpacity="0.15"/>

            <line x1="10" y1="284" x2="270" y2="284" stroke="#7C3AED" strokeWidth="0.5" strokeOpacity="0.2"/>
            <rect x="20" y="274" width="40" height="6" rx="2" fill="#1A1A1A" fillOpacity="0.15"/>
            <rect x="90" y="274" width="60" height="6" rx="2" fill="#1A1A1A" fillOpacity="0.15"/>
            <rect x="175" y="274" width="45" height="6" rx="2" fill="#1A1A1A" fillOpacity="0.15"/>

            <line x1="10" y1="298" x2="270" y2="298" stroke="#7C3AED" strokeWidth="0.5" strokeOpacity="0.2"/>
            <rect x="20" y="288" width="40" height="6" rx="2" fill="#1A1A1A" fillOpacity="0.15"/>
            <rect x="90" y="288" width="60" height="6" rx="2" fill="#1A1A1A" fillOpacity="0.15"/>
            <rect x="175" y="288" width="30" height="6" rx="2" fill="#1A1A1A" fillOpacity="0.15"/>

          </svg>
        </div>
      </div>
    </main>
  );
}
