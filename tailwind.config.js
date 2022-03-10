module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D87D4A',
        secondary: '#fbaf85',
        black: '#000',
        white: '#fff',
        lightgray: '#FAFAFA',
        darkgray: '#F1F1F1',
        apRed: '#CD2C2C'
      },
      fontFamily: {
        sans: [
          'Manrope',
          'sans-serif'
        ]
      },
      fontSize: {
        'xs': '0.8125rem',
        'sm': '.875rem',
        'base': '1rem',
        'md': '1.125rem',
        'lg': '1.5rem',
        'xl': '1.75rem',
        '2xl': '2rem',
        '3xl': '2.25rem',
        '4xl': '2.5rem',
        '5xl': '2.75rem',
        '6xl': '3rem',
        '7xl': '3.25rem',
        '8xl': '3.5rem'
      },
      lineHeight: {
        'normal': '1.5625rem',
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.625rem'
      },
      letterSpacing: {
        'ap-1': '1px',
        'ap-1.3': '1.3px',
        'ap-1.5': '1.5px',
        'ap-1.7': '1.7px',
        'ap-2': '2px',
        'overline': '10px'
      },
      objectPosition: {
        'center-bottom': 'center bottom',
      },
      translate: {
        '60p': '60%',
      },
      gridTemplateColumns: {
        'gallery': '40% 60%'
      },
      keyframes: {
        enterFromRight: {
          '0%': 'transform: translateX(100%)',
          '100%': 'transform: translateX(0)'
        }
      },
      animation: {
        enterFromRight: 'enterFromRight 1s ease-in'
      }
    },
  },
  plugins: [],
}
