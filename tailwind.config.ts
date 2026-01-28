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
          DEFAULT: '#D43636', // Updated: Vivid Metallic Red
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#D43636',
          900: '#7F1D1D', // Deep burgundy for gradients/shadows
        },
        'prysm-thinq': {
          DEFAULT: '#2563EB', // Updated: Royal/Azure Blue (much lighter than previous Navy)
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#2563EB', 
          900: '#1E3A8A', // Kept the deep navy only for the darkest shadows
        },
        'prysm-best': {
          DEFAULT: '#FFB84D', // Keeping as Electric Amber/Gold
          50: '#FFF4E6',
          100: '#FFE8CC',
          500: '#FFB84D',
          900: '#CC8A1E',
        },
        'nightnite': {
          DEFAULT: '#4C1D95', // Keeping as Midnight Purple
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