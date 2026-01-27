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
        // Base palette
        'bg-primary': '#0A0A0A',
        'bg-secondary': '#F5F5F7',
        'text-primary': '#EDEDED',
        'text-secondary': '#B5B5B5',
        'accent-gold': '#C9A24D',
        'accent-silver': '#D4D4D4',
        // Product accent colors
        'prysm-intima': {
          DEFAULT: '#E8B4A0',
          50: '#FAF0ED',
          100: '#F5E1DB',
          500: '#E8B4A0',
          900: '#B88F7A',
        },
        'prysm-thinq': {
          DEFAULT: '#1E3A8A',
          50: '#E6EDF5',
          100: '#CCDBEB',
          500: '#1E3A8A',
          900: '#0F1D45',
        },
        'prysm-best': {
          DEFAULT: '#FFB84D',
          50: '#FFF4E6',
          100: '#FFE8CC',
          500: '#FFB84D',
          900: '#CC8A1E',
        },
        'nightnite': {
          DEFAULT: '#4C1D95',
          50: '#EDE7F6',
          100: '#DBCFED',
          500: '#4C1D95',
          900: '#2D1157',
        },
      },
      fontFamily: {
        'heading': ['var(--font-heading)', 'serif'],
        'body': ['var(--font-body)', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.05em',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
}
export default config
