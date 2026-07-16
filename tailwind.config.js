export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tf-primary': '#0B2E6B',
        'tf-accent': '#F57C00',
        'tf-dark': '#1E293B',
        'tf-text': '#64748B',
        'tf-bg-light': '#F8FAFC',
        'tf-border': '#E2E8F0',
        'tf-hover': '#0D3A7A',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
