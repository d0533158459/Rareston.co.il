/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bronze: {
          50: '#fdf8f0',
          100: '#f9edda',
          200: '#f2d9b3',
          300: '#e8be82',
          400: '#db9d4e',
          500: '#CD7F32',
          600: '#b86a28',
          700: '#9a5323',
          800: '#7d4322',
          900: '#67371f',
        },
        gold: {
          50: '#fdfbec',
          100: '#faf5cb',
          200: '#f5e98a',
          300: '#edd94a',
          400: '#e4c625',
          500: '#D4AF37',
          600: '#b78d1a',
          700: '#916b17',
          800: '#77551a',
          900: '#65461c',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FFF8F0',
          200: '#FFF0DC',
          300: '#F5E6D3',
          400: '#EDD5B8',
          500: '#E0C49A',
        },
        stone: {
          50: '#FAF8F5',
          100: '#F2EDE6',
          200: '#E8DDD2',
          300: '#D4C4B0',
          400: '#BFA88E',
          500: '#A68B6D',
          600: '#8B7055',
          700: '#6B5440',
          800: '#4A3828',
          900: '#2A1F15',
        },
        luxury: {
          black: '#0D0B08',
          dark: '#1A1612',
          charcoal: '#2C2620',
          muted: '#6B6260',
          light: '#F7F3EE',
        }
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
        heebo: ['Heebo', 'sans-serif'],
        playfair: ['Playfair Display', 'Georgia', 'serif'],
        assistant: ['Assistant', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #CD7F32 0%, #D4AF37 50%, #CD7F32 100%)',
        'luxury-gradient': 'linear-gradient(180deg, rgba(13,11,8,0.85) 0%, rgba(13,11,8,0.4) 50%, rgba(13,11,8,0.7) 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
      },
      boxShadow: {
        'luxury': '0 25px 60px -12px rgba(13, 11, 8, 0.4)',
        'gold': '0 8px 32px -4px rgba(212, 175, 55, 0.3)',
        'card': '0 4px 24px -4px rgba(0, 0, 0, 0.15)',
        'glass': 'inset 0 1px 0 rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.3)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(212, 175, 55, 0)' },
        },
      },
    },
  },
  plugins: [],
}
