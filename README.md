# Clue AI Official Web Portal (`ClueAi-Web`)

> **The Official Web Experience for Clue AI — The Undetected Realtime AI Copilot for Technical Interviews.**  
> Crafted with **React 19, TypeScript, Vite, Tailwind CSS, Lucide Icons, and Framer Motion**. Faithful recreation matching **`code.html`** and **`code7.html`**. Production-ready for **Cloudflare Pages**.

---

## 🌟 Visual Architecture & Design Language

Faithfully built using the exact design foundations of **`code.html`** and **`code7.html`**:

1. 🌌 **Celestial Curved Horizon & Radial 9-Card Ring (from `code7.html`)**:
   - Signature `.arc-horizon` celestial dome with emerald gradient & top edge atmospheric glow.
   - Exact 9 radial display cards (`.arc-card`) fanning along the horizon curve (`-28deg` to `+30deg`):
     - Card 1: Stealth Guard (OBS & Zoom invisible)
     - Card 2: Whisper Real-time STT (<50ms audio capture)
     - Card 3: Multi-LLM Engine (Gemini 2.0, Claude 3.5 Sonnet, GPT-4o, DeepSeek-R1)
     - Card 4: Python & TypeScript live sandbox execution
     - Card 5 (Apex Center): Floating Clue AI Pill Dock with live status
     - Card 6: Smart Screen OCR Snipping
     - Card 7: Local SQLite Session Logs & PDF Export
     - Card 8: Dual-Stage Silent Updater (v5.9.9)
     - Card 9: Multi-Inbox Cloud Sync via Google Apps Script
   - Hero typography: **"Say it big"** with CTA pills.
   - Recognition & Awards box with 4 circular monochrome badges (`.award-badge`): **BEST UI**, **BEST UX**, **STEALTH INVISIBILITY PASSED**, **SPECIAL KUDOS**.

2. 💭 **Ambient Zeitgeist Quotes Cloud & Bottom Floating Dock (from `code.html`)**:
   - Fixed header with brand identity, glowing green category indicator, segmented view pill, and search/menu buttons.
   - Fullscreen 6x5 ambient quotes grid with 30 AI & interview intelligence statements in `text-neutral-600/35`.
   - Massive foreground hero quote: **"This is no substitute for hard code"**.
   - Signature `.neon-glow-btn` CTA button: **"Who said that? / Get Clue AI"**.
   - Fixed bottom floating dock (`data-purpose="timeline-dock"`):
     - Live audience status pill with pulsing emerald indicator (`data-purpose="live-status-pill"`).
     - Date circle (`09 Nov`).
     - Live ticking countdown timer (`02 · 13 · 17`).
     - Previous / Pause-Play / Next playback controls.
     - Fullscreen toggle & options buttons.

3. 💻 **Multi-Platform Terminal Download Hub**:
   - **Windows (x64)**: Direct `.exe` + copyable PowerShell (`irm ... | iex`) and CMD one-liners.
   - **macOS (Intel & Apple Silicon)**: Direct `.dmg` + copyable Terminal `curl` & `hdiutil` commands.
   - **Linux**: Standalone AppImage execution instructions.

4. 📬 **Live Google Apps Script Feedback Engine**:
   - Connected directly to Google Apps Script webhook:
     `https://script.google.com/macros/s/AKfycbyWqhztb7GbVlghFBJeusoJ-YcYx-9WPsADg9JbUXTOY-QKTpjR1ivKNyJP3iJ3wzpgKw/exec`
   - Interactive modal with star rating, categories, instant validation, confetti celebration, and zero-telemetry privacy.

5. ☁️ **Cloudflare Pages Native**:
   - Pre-configured `public/_redirects` (`/* /index.html 200`) for seamless client-side SPA routing.

---

## 🛠️ Tech Stack

| Component | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Tooling & Bundler** | [Vite 6](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/) |
| **Animation & FX** | [Framer Motion](https://www.framer.com/motion/) + [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Cloud Webhook** | Google Apps Script Webhook API |
| **Target Host** | Cloudflare Pages / Vercel |

---

## 🚀 Build Instructions

### 1. Installation
```bash
cd ClueAi-Web
npm install
```

### 2. Production Build
```bash
npm run build
```
Generates production-optimized static assets in `dist/`.

---

## ☁️ Deploy to Cloudflare Pages

1. In your Cloudflare Dashboard, go to **Workers & Pages > Create application > Pages > Connect to Git**.
2. Select `HelloWorld-Farhan/ClueAi-Web`.
3. Set:
   - **Framework Preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Deploy!
