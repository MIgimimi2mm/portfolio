import Link from "next/link";

export default function ProjectC() {
  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm text-sub hover:text-accent transition-colors mb-8"
        >
          ← 戻る
        </Link>

        <span className="text-xs font-mono text-accent font-bold block mb-2">
          PROJECT C
        </span>
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          プロジェクトタイトル（仮）
        </h1>

        {/* Screenshot placeholder */}
        <div className="w-full h-56 md:h-72 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl mb-8 flex items-center justify-center text-sub text-sm">
          スクリーンショット（要追加）
        </div>

        <p className="text-sub leading-relaxed mb-10">
          プロジェクトの詳細説明が入ります。後ほど内容を差し替えてください。
        </p>
      </div>
    </main>
  );
}
