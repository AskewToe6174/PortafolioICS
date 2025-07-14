/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // activamos modo oscuro vía clase
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        // Claro
        primary: '#007aff',
        secondary: '#5856d6',
        background: '#f0f2f5',
        cardBg: 'rgba(255, 255, 255, 0.8)',
        glass: 'rgba(255, 255, 255, 0.25)',
        textPrimary: '#1c1c1e',
        textSecondary: '#636366',
        borderLight: 'rgba(60, 60, 67, 0.29)',
        shadow: 'rgba(0, 0, 0, 0.1)',

        // Oscuro
        'primary-dark': '#0a84ff',
        'secondary-dark': '#5e5ce6',
        'background-dark': '#1c1c1e',
        'cardBg-dark': 'rgba(28, 28, 30, 0.85)',
        'glass-dark': 'rgba(28, 28, 30, 0.35)',
        'textPrimary-dark': '#f0f0f5',
        'textSecondary-dark': '#8e8e93',
        'borderLight-dark': 'rgba(84, 84, 88, 0.65)',
        'shadow-dark': 'rgba(255, 255, 255, 0.1)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-dark': '0 8px 32px 0 rgba(100, 100, 140, 0.7)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
