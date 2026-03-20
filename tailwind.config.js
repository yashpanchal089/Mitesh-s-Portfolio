/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
        },
        calm: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
        },
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #f8fafc 100%)',
        'gradient-hero': 'linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(59, 130, 246, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.04)',
        'glass': '0 8px 32px rgba(59, 130, 246, 0.06)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
