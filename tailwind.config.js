/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#00E85D',
          darkGreen: '#007A33',
          glow: 'rgba(0, 232, 93, 0.45)',
          pillBg: '#18181b',
          dockBg: 'rgba(20, 20, 22, 0.85)',
          cyan: '#38bdf8',
          blue: '#2563eb',
        },
        brandDark: '#000000',
        brandSurface: '#080808',
        brandBorder: '#1c1c1e',
        brandMuted: '#86868b',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
