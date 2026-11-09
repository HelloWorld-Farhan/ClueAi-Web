# Clue AI Official Web Portal (`ClueAi-Web`)

> **The Official Marketing & Download Website for Clue AI — The Ultimate Invisible AI Interview Intelligence Copilot.**  
> Built with **React 19, TypeScript, Vite, Tailwind CSS, Lucide Icons, and Framer Motion**. Production-ready for **Cloudflare Pages**.

---

## 🌟 Highlights & Features

- 🌌 **Celestial Curved Horizon (from `code7.html`)**: Radial glowing atmospheric dome with deep space gradients and neon cyan lighting.
- ⚡ **Interactive Dock Preview (from `code.html`)**: In-browser live simulation of the Clue AI floating pill dock, audio waveform visualization, and multi-model selector (Gemini 2.0, Claude 3.5 Sonnet, GPT-4o, DeepSeek-R1).
- 💻 **Complete Multi-Platform Download Matrix**:
  - **Windows (x64)**: Direct standalone `.exe` installer + copyable PowerShell and CMD one-liners.
  - **macOS (Intel & Apple Silicon M1-M4)**: Direct universal `.dmg` disk image + copyable Terminal `curl` & `hdiutil` commands.
  - **Linux**: Standalone AppImage execution instructions.
- 📬 **Live Google Apps Script Feedback Engine**: Connected directly to the cloud backend webhook with dynamic ratings, categories, confetti celebrations, and async status handling.
- ☁️ **Cloudflare Pages Native**: Zero-config static output in `dist/` with `public/_redirects` for single-page application routing.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Bundler & Dev Server** | [Vite 6](https://vitejs.dev/) |
| **Styling & Theme** | [Tailwind CSS v3](https://tailwindcss.com/) with PostCSS & Autoprefixer |
| **Motion & Micro-interactions** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Celebratory FX** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Cloud Backend** | Google Apps Script Webhook API |
| **Deployment Target** | Cloudflare Pages / Vercel / Netlify |

---

## 🚀 Quick Setup & Localhost Development

### 1. Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or pnpm

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/HelloWorld-Farhan/ClueAi-Web.git

# Enter project directory
cd ClueAi-Web

# Install dependencies
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with hot module replacement (HMR).

### 4. Build for Production
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory ready for deployment.

---

## ☁️ Deploying to Cloudflare Pages

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages > Create application > Pages > Connect to Git**.
2. Select the repository: `HelloWorld-Farhan/ClueAi-Web`.
3. In **Build Settings**, configure:
   - **Framework Preset**: `Vite` (or `None`)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Click **Save and Deploy**.
5. Cloudflare Pages automatically handles SPA client-side routing via `public/_redirects` (`/* /index.html 200`).

---

## 📬 Cloud Feedback Webhook Configuration

Feedback is processed via the Google Apps Script webhook:
```typescript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyWqhztb7GbVlghFBJeusoJ-YcYx-9WPsADg9JbUXTOY-QKTpjR1ivKNyJP3iJ3wzpgKw/exec';
```
Payload schema:
```json
{
  "type": "feedback",
  "source": "clueai_website",
  "name": "Alex Developer",
  "email": "alex@example.com",
  "rating": 5,
  "category": "Feature Request",
  "comments": "Love the hardware stealth mode! Please add custom shortcut support.",
  "timestamp": "2026-11-09T10:00:00.000Z"
}
```

---

## 🔗 Related Ecosystem Repositories

- **Clue AI Desktop App**: [https://github.com/HelloWorld-Farhan/ClueAi](https://github.com/HelloWorld-Farhan/ClueAi)
- **Clue AI Web Portal**: [https://github.com/HelloWorld-Farhan/ClueAi-Web](https://github.com/HelloWorld-Farhan/ClueAi-Web)
- **Developer Portfolio**: [https://farhan-khalid-portfolio.vercel.app/](https://farhan-khalid-portfolio.vercel.app/)

---

## 📄 License & Attribution

Copyright &copy; 2026 Clue AI. Developed by [Farhan Khalid](https://farhan-khalid-portfolio.vercel.app/). All rights reserved.

