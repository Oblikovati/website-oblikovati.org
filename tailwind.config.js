/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Oblikovati Design System v1.0 — Dark Theme (Matte Carbon surfaces & borders).
        ink: {
          950: '#0D0E11', // bg.canvas.frame
          900: '#121317', // bg.surface.base
          850: '#181A20', // bg.surface.elevated
          800: '#1F222A', // bg.surface.subtle
          700: '#2D313D', // border.default / bg.surface.hover
          600: '#3F4556', // border.strong / bg.surface.active
        },
        // Calibrated Indigo-Violet brand accent + Crisp Teal selection accent.
        signal: {
          DEFAULT: '#8172FA', // accent.brand.default
          fill: '#6754E8',    // accent.brand.fill (WCAG AA with #FFFFFF text)
          hover: '#7866F2',   // accent.brand.hover
          active: '#5845D6',  // accent.brand.active
          soft: '#2DD4BF',    // accent.selection.bright (Teal)
          deep: '#6754E8',    // accent.brand.fill
        },
        teal: {
          DEFAULT: '#14B8A6', // accent.selection.default
          bright: '#2DD4BF',  // accent.selection.bright
          deep: '#0D9488',
        },
        amber: {
          DEFAULT: '#F59E0B', // accent.work.default
          bright: '#FBBF24',  // accent.work.bright
        },
        // Dark Theme achromatic text hierarchy.
        slatey: {
          100: '#ECEEF2', // text.primary
          200: '#D2D7E2', // icon/body emphasis
          300: '#9CA3B2', // text.secondary
          400: '#7C8496', // text.muted
          500: '#525866', // text.disabled
        },
      },
      fontFamily: {
        // Oblikovati Typography System: Inter UI/display + JetBrains Mono technical.
        display: [
          'Inter',
          'Segoe UI Variable',
          'Segoe UI',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        sans: [
          'Inter',
          'Segoe UI Variable',
          'Segoe UI',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        serif: [
          'Inter',
          'Segoe UI Variable',
          'Segoe UI',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Cascadia Mono',
          'Consolas',
          'ui-monospace',
          'monospace',
        ],
      },
      fontSize: {
        '2xs': ['0.656rem', { lineHeight: '1.4' }],
        xs: ['0.781rem', { lineHeight: '1.5' }],
        sm: ['0.906rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.6' }],
        lg: ['1.125rem', { lineHeight: '1.55' }],
        xl: ['1.375rem', { lineHeight: '1.25' }],
        '2xl': ['1.875rem', { lineHeight: '1.15' }],
        '3xl': ['2.5rem', { lineHeight: '1.08' }],
        '4xl': ['3.5rem', { lineHeight: '1.02' }],
        '5xl': ['5rem', { lineHeight: '0.98' }],
      },
      letterSpacing: {
        tightest: '-0.025em',
        snug: '-0.015em',
        label: '0.12em',
      },
      maxWidth: {
        content: '76rem',
      },
      borderRadius: {
        // Architectural sharpness (4px–8px restrained radii).
        xl2: '0.5rem',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(129,114,250,0.22), 0 12px 32px rgba(0,0,0,0.60)',
        panel: '0 12px 32px rgba(0,0,0,0.60)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'brand-gradient': 'linear-gradient(120deg, #8172FA 0%, #2DD4BF 100%)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.35s cubic-bezier(0.2, 0.0, 0.0, 1.0) both',
        'spin-slow': 'spin-slow 48s linear infinite',
        'float-soft': 'float-soft 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
