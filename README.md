# 🚀 Tarık Eler - Portfolio

Kişisel portfolio web sitem. **GitHub Pages** üzerinde yayınlanır.

## 🌐 Canlı: [tarikeler-tarnak.github.io](https://tarikeler-tarnak.github.io)

## 📄 İçerik

- **Hakkımda** ve yetenekler
- **Öne çıkan projelerim** (GitHub repo bağlantılarıyla)
- **Blog** yazıları
- **GitHub Explorer** — repo dosyalarını inceleme
- İletişim ve sosyal bağlantılar

## 🛠 Teknoloji

- **Next.js 16** (App Router) — statik export (`output: 'export'`)
- React 19, TypeScript, Tailwind CSS 4
- `out/` klasöründeki statik çıktı GitHub Pages'e push edilir

## ▶️ Yerel çalıştırma

```bash
cd site
npm install --legacy-peer-deps
npm run dev
# http://localhost:3000
```

## 📦 Statik yayın

```bash
cd site
npm run build   # çıktı: out/
```

`out/` içeriği (SEO dosyalarıyla birlikte: `robots.txt`, `sitemap.xml`, `yandex_eb02552a5a4b93c4.html`) `main` dalına push edilir ve site otomatik yayınlanır.

> Not: Chat, admin panel ve iletişim formu sunucu gerektirdiği için statik GitHub Pages sürümünde çalışmaz; tam işlevsellik için `npm run dev` ile yerelde kullanılır.

**Yapan:** [Tarık Eler](https://github.com/TARIKELER-TARNAK)
