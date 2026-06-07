/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep engineering-grade dark surface palette.
        ink: {
          950: '#070b14',
          900: '#0b1220',
          850: '#0e1626',
          800: '#111c30',
          700: '#1a2942',
          600: '#243757',
        },
        // Brand accents pulled from the logo gradient (teal -> sky).
        signal: {
          DEFAULT: '#38bdf8',
          soft: '#5eead4',
          deep: '#0ea5e9',
        },
        slatey: {
          100: '#e6edf6',
          200: '#cdd9e8',
          300: '#a9bace',
          400: '#7e92ac',
          500: '#5d7088',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
      maxWidth: {
        content: '76rem',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(56,189,248,0.18), 0 18px 50px -18px rgba(56,189,248,0.35)',
        panel: '0 24px 60px -30px rgba(0,0,0,0.8)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(94,234,212,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.045) 1px, transparent 1px)',
        'brand-gradient': 'linear-gradient(120deg, #5eead4 0%, #38bdf8 100%)',
      },
      backgroundSize: {
        grid: '46px 46px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'spin-slow': 'spin-slow 48s linear infinite',
        'float-soft': 'float-soft 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
