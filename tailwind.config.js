export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tf-primary': '#173B78',
        'tf-accent': '#F58220',
        'tf-dark': '#0B1E3A',
        'tf-text': '#38506F',
        'tf-bg-light': '#F8FAFC',
        'tf-border': '#E2E8F0',
        'tf-hover': '#214B8A',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
