export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tf-primary': '#25D366',
        'tf-accent': '#FF9500',
        'tf-dark': '#001A4D',
        'tf-text': '#2C3E50',
        'tf-bg-light': '#ECF0F1',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
