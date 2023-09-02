/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-20': '#F8F4EB',
        'gray-50': '#EFE6E6',
        'gray-100': '#DFCCCC',
        'gray-500': '#5E5E5E',
        'primary-50': '#f6f7f2',
        'primary-100': '#EEEFE6',
        'primary-300': '#A9AF82',
        'primary-500': '#878C68',
        'secondary-100': '#FFD8D9',
        'secondary-300': '#FD9089',
        'secondary-500': '#E3817B',
      },
      backgroundImage: () => ({
        'gradient-yellowred':
          'linear-gradient(90deg, #FF616A 0%, #FFC837 100%)',
        'mobile-home': "url('./assets/yoga-hero-lillies.png')",
      }),
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: '480px',
      sm: '768',
      md: '1060px',
    },
  },
  plugins: [],
};
