/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // CV-inspired professional palette
        ink: '#1c1c1e',
        sidebar: '#15171a',
        sidebarSoft: '#22262b',
        paper: '#f4efe6',
        paperSoft: '#ebe4d4',
        paperEdge: '#e0d9c7',
        muted: '#5c5c5c',
        mutedSoft: '#7a7a7a',
        mutedOnDark: '#a8a39a',
        accent: '#b8956a',
        accentDark: '#8a6e4a',
        divider: 'rgba(28,28,30,0.12)',
        dividerOnDark: 'rgba(255,255,255,0.10)',
      },
      boxShadow: {
        soft: '0 8px 28px -10px rgba(0,0,0,0.22)',
        card: '0 2px 14px -4px rgba(0,0,0,0.10)',
        photo: '0 18px 40px -18px rgba(0,0,0,0.55)',
      },
      borderRadius: {
        arch: '160px 160px 8px 8px',
      },
      letterSpacing: {
        wider2: '0.18em',
      },
    },
  },
  plugins: [],
}
