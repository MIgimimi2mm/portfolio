# Portfolio

公立はこだて未来大学 システム情報科学部の浅古尚登（Asako Naoto）が制作した個人ポートフォリオサイトです。
これまでの制作物・研究・学外活動をまとめ、就職活動でのアウトプットとして公開しています。

**URL:** https://asakonaoto.vercel.app/

## サイト構成

| セクション | 内容 |
| --- | --- |
| Hero | 名前・写真によるトップビジュアル |
| About | 経歴・タイムライン・資格・開発における強み |
| Works | 制作物4件（受賞歴・概要・詳細ページへのリンク） |
| Skills | 使用技術と、それぞれをどう使ってきたか |
| Contact | 連絡先 |

各 Works の詳細は `app/projects/*/page.tsx` に個別ページとして実装しており、背景・課題・工夫した点までまとめています。

## 技術スタック

- **Next.js 16 (App Router) / React 19 / TypeScript** — サイト全体の構築
- **Tailwind CSS 4** — スタイリング
- **Framer Motion** — スクロール連動アニメーション・ページ遷移演出
- **Phosphor Icons** — アイコン
- **Playwright** — E2Eテスト
