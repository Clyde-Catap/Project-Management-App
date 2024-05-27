/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',  // This is the default value
      'md': '0.375rem',
      'lg': '1.0rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {},
  },
  plugins: [],
}
