module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    screens: {
      sm: '489px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    // colors:{
    //   leaf: '#067274',
    //   white: '#FFFFFF',
    //   'Teal': {
    //       200: '#62FFE1',
    //       700: '#0f766e',
    //       600: '#096B6F'
    //   }
    //   ,red:    '#E23030',
    //   'Pbg': {
    //       500: '#64748b'
    //   },
    //   Gray: {
    //       100: '#d1d5db',
    //       200: '#e5e7eb',
    //       700: '#374151'
    // },
    // }
  },
  plugins: [require("daisyui")],
}