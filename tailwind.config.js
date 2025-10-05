// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         'ieee-blue': {
//           50: '#eff6ff',
//           100: '#dbeafe',
//           200: '#bfdbfe',
//           300: '#93c5fd',
//           400: '#60a5fa',
//           500: '#3b82f6',
//           600: '#2563eb',
//           700: '#1d4ed8',
//           800: '#1e40af',
//           900: '#1e3a8a',
//           950: '#172554'
//         },
//         'ieee-gray': {
//           50: '#f8fafc',
//           100: '#f1f5f9',
//           200: '#e2e8f0',
//           300: '#cbd5e1',
//           400: '#94a3b8',
//           500: '#64748b',
//           600: '#475569',
//           700: '#334155',
//           800: '#1e293b',
//           900: '#0f172a'
//         }
//       },
//       fontFamily: {
//         'sans': ['Inter', 'system-ui', 'sans-serif'],
//       },
//       animation: {
//         'fade-in': 'fadeIn 0.6s ease-out',
//         'slide-up': 'slideUp 0.8s ease-out',
//         'float': 'float 6s ease-in-out infinite',
//         'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0', transform: 'translateY(20px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' }
//         },
//         slideUp: {
//           '0%': { opacity: '0', transform: 'translateY(40px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' }
//         },
//         float: {
//           '0%, 100%': { transform: 'translateY(0px)' },
//           '50%': { transform: 'translateY(-20px)' }
//         },
//         pulseSoft: {
//           '0%, 100%': { opacity: '0.4' },
//           '50%': { opacity: '0.8' }
//         }
//       }
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ieee-blue': {
          50:  '#FFF8E6',  // very light yellow
          100: '#FFEFC2',  // light pastel yellow
          200: '#FFD98C',  // soft yellow-orange
          300: '#FFC155',  // medium orange-yellow
          400: '#FFAB26',  // bright orange-yellow
          500: '#F28C00',  // main logo color
          600: '#D97706',  // deeper amber
          700: '#B45309',  // darker orange-brown
          800: '#92400E',  // dark burnt orange
          900: '#78350F',  // deep brown-orange
          950: '#451A03'   // almost dark brown
        },
        'ieee-gray': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        }
      } ,
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' }
        }
      }
    },
  },
  plugins: [],
};
