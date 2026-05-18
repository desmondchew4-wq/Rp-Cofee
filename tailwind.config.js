/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          black: '#0A0A0A',
          dark: '#1A1208',
          brown: '#2C1A0E',
          medium: '#4A2C17',
          warm: '#6B3F24',
          gold: '#C9952A',
          amber: '#E8A830',
          cream: '#F5E6C8',
          light: '#FAF0DC',
          smoke: '#2A1F14',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'steam1': 'steam1 3s ease-in-out infinite',
        'steam2': 'steam2 3s ease-in-out infinite 0.5s',
        'steam3': 'steam3 3s ease-in-out infinite 1s',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        steam1: {
          '0%, 100%': { transform: 'translateY(0) translateX(0) scaleX(1)', opacity: '0' },
          '15%': { opacity: '0.6' },
          '50%': { transform: 'translateY(-40px) translateX(-8px) scaleX(1.2)', opacity: '0.3' },
          '100%': { transform: 'translateY(-80px) translateX(0) scaleX(0.8)', opacity: '0' },
        },
        steam2: {
          '0%, 100%': { transform: 'translateY(0) translateX(0) scaleX(1)', opacity: '0' },
          '15%': { opacity: '0.5' },
          '50%': { transform: 'translateY(-45px) translateX(8px) scaleX(1.3)', opacity: '0.25' },
          '100%': { transform: 'translateY(-85px) translateX(0) scaleX(0.9)', opacity: '0' },
        },
        steam3: {
          '0%, 100%': { transform: 'translateY(0) translateX(0) scaleX(1)', opacity: '0' },
          '15%': { opacity: '0.4' },
          '50%': { transform: 'translateY(-35px) translateX(-5px) scaleX(1.1)', opacity: '0.2' },
          '100%': { transform: 'translateY(-75px) translateX(3px) scaleX(0.7)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          from: { textShadow: '0 0 10px #C9952A, 0 0 20px #C9952A' },
          to: { textShadow: '0 0 20px #E8A830, 0 0 40px #E8A830, 0 0 60px #C9952A' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201, 149, 42, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(201, 149, 42, 0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
