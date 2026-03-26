/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
      },
      colors: {
        amen: {
          blue:    '#003580',
          navy:    '#001F4E',
          gold:    '#C8A000',
          amber:   '#F0C040',
          light:   '#E8F0FF',
        },
        surface: {
          900: '#0A0F1E',
          800: '#111827',
          700: '#1A2236',
          600: '#1E2D45',
          500: '#243352',
        }
      },
      animation: {
        'bounce-slow': 'bounce 1.4s infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0,53,128,0.4)' },
          '50%': { boxShadow: '0 0 20px 6px rgba(0,53,128,0.2)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
