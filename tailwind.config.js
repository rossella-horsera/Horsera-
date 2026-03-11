/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Horsera Design System tokens
        parchment: '#FAF7F3',
        stone: '#F0EBE4',
        dusk: '#1C1510',

        cognac: {
          DEFAULT: '#8C5A3C',
          light: '#C2896A',
          subtle: '#F5EDE6',
        },
        champagne: {
          DEFAULT: '#C9A96E',
          muted: '#E8D9B8',
          subtle: '#F8F3EC',
        },
        cadence: {
          DEFAULT: '#6B7FA3',
          light: '#EEF2F8',
          border: '#6B7FA3',
        },

        progress: '#7D9B76',
        working: '#C9A96E',
        attention: '#C4714A',

        ink: {
          DEFAULT: '#1A140E',
          muted: '#7A6B5D',
          subtle: '#B5A898',
        },

        border: '#EDE7DF',
      },
      fontFamily: {
        serif: ["'Playfair Display'", 'serif'],
        sans: ["'DM Sans'", 'sans-serif'],
        mono: ["'DM Mono'", 'monospace'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
};
