# 🖥️ Dark Techy Portfolio — Next.js

A sleek, dark-themed developer portfolio built with **Next.js 14** and **TypeScript**.

## ✨ Features
- Custom animated cursor
- Scanline + noise grain effects for that techy CRT feel
- CSS grid background
- Animated hero with glowing text
- Skills, Projects, About & Contact sections
- Smooth scroll navigation
- Fully responsive

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Change your info
Edit `app/page.tsx`:
- Update your **name**, **bio**, and **title** in the Hero section
- Update the **stats** in the About section
- Add your real **projects** in the `projects` array
- Update your **email** and **social links** in the Contact section

### Add your photo
Replace the avatar placeholder in `app/page.tsx` with an `<Image>` tag:
```tsx
import Image from "next/image";
<Image src="/your-photo.jpg" alt="Your Name" fill style={{ objectFit: "cover" }} />
```
Place your photo in the `/public` folder.

### Change colors
Edit `app/globals.css` — all colors are CSS variables at the top:
```css
:root {
  --accent: #00f5c4;   /* Main green accent */
  --accent2: #4d8eff;  /* Blue accent */
  --accent3: #ff3e6c;  /* Red accent */
}
```

## 🏗️ Build for Production
```bash
npm run build
npm start
```

## 📦 Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Just connect your repo to Vercel and it deploys automatically!
