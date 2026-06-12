import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F8F1E8',
          dark: '#EFE0D4',
        },
        cream: '#EFE0D4',
        rose: {
          DEFAULT: '#CF9C86',
          light: '#E4BEAE',
          dark: '#B27A63',
        },
        brown: {
          DEFAULT: '#5E4232',
          dark: '#3C271C',
          light: '#87664F',
          muted: '#9A7B68',
        },
        sage: {
          DEFAULT: '#A6A48C',
          light: '#C2C1AC',
          dark: '#86846E',
        },
        wine: {
          DEFAULT: '#7B3540',
          dark: '#5C2630',
        },
        gold: '#C49A66',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        script: ['var(--font-great-vibes)', 'cursive'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(60, 39, 28, 0.07)',
        'soft-lg': '0 8px 48px rgba(60, 39, 28, 0.12)',
        'rose': '0 4px 24px rgba(207, 156, 134, 0.35)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        'hero-pattern': "radial-gradient(ellipse at 20% 50%, rgba(207,156,134,0.20) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(123,53,64,0.10) 0%, transparent 50%)",
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#5E4232',
            maxWidth: 'none',
            h1: { color: '#3C271C', fontFamily: 'var(--font-cormorant)', fontWeight: '600' },
            h2: { color: '#3C271C', fontFamily: 'var(--font-cormorant)', fontWeight: '600' },
            h3: { color: '#3C271C', fontFamily: 'var(--font-cormorant)', fontWeight: '600' },
            h4: { color: '#3C271C' },
            strong: { color: '#3C271C' },
            a: { color: '#B27A63', textDecorationColor: '#CF9C86' },
            blockquote: { borderLeftColor: '#CF9C86', color: '#5E4232' },
            'ul > li::marker': { color: '#CF9C86' },
            'ol > li::marker': { color: '#CF9C86' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
