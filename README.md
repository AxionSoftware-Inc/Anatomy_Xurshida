# 🔒⚠️ DIQQAT — BU LOYIHA OPEN SOURCE EMAS

> ## ⛔ RUXSATSIZ FOYDALANISH QAT’IYAN TAQIQLANADI
> **Repository’ni ko‘rish, clone yoki fork qilish sizga koddan foydalanish huquqini bermaydi.** Muallif/repository egasining **OLDINDAN YOZMA RUXSATISIZ** original kod, algoritm, arxitektura, hujjat va assetlarni nusxalash, o‘zgartirish, tarqatish, build/run/deploy qilish, tijoriy yoki notijoriy mahsulotda ishlatish, sotish/sublicense qilish yoki AI/ML training/dataset uchun ishlatish **TAQIQLANADI**.
>
> **Public preview faqat ko‘rib chiqish va baholash uchun.** Production/tijoriy foydalanish uchun alohida yozma tijoriy litsenziya kerak.
>
> 📄 **[TO‘LIQ LITSENZIYA — LICENSE.md](LICENSE.md)**  
> © 2026 AxionSoftware-Inc / repository owner — **BARCHA HUQUQLAR HIMOYALANGAN.**

---

# medstudy

Minimalist, static medical learning platform built with Next.js App Router.

## Routes

- `/` — platform landing page
- `/fanlar/` — subject catalog
- `/fanlar/[slug]/` — subject and course list
- `/kurslar/` — course catalog
- `/kurslar/[slug]/` — serial course player

## Run locally

```bash
npm install
npm run dev
```

The project is configured for static export with `output: "export"`. A production export is generated in `out/` with:

```bash
npm run build
```

Course content and YouTube video IDs live in `lib/catalog.ts`.