/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          100: '#F5E6D3',
          200: '#E6C9A8',
          300: '#D4A373',
          400: '#B87D4B',
          500: '#9C6644', // Primary brown
          600: '#7F5539',
          700: '#63402C',
          800: '#4A3022',
          900: '#332218',
        },
        cream: {
          50: '#FDFCFB',
          100: '#FAF7F2',
          200: '#F4ECE1',
          300: '#EBE0D0',
          400: '#E0D2BE',
        },
        charcoal: {
          800: '#2D3748',
          900: '#1A202C',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F3E5AB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')",
      }
    },
  },
  plugins: [],
}
