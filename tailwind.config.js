/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#07080d',
          900: '#0b0d14',
          800: '#11141d',
          700: '#181c28',
        },
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(20px,-24px) scale(1.08)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        orbit: 'orbit 14s linear infinite',
        float: 'float 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
