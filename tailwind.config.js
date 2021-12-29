
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
      purge: false,
      theme: {
        textShadow: {
          'default': '0 2px 0 #220',
          'md': '0 2px 2px #4965CB',
          'h2': '0 0 3px #FF0000, 0 0 5px #0000FF',
          'h1': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(200, 0, 35, .9)',
       },
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'white': '#fff',
          'p-grey': '#535C68',
          'head-blk': '#2B2F35',
          'accent-orng': '#FD815A',
          'footer-bg': '#333B49',
          'foot-col-head': '#8F9AAA',
          'foot-col-p': '#C1C8D6',
          'btn-blue-bg': '#E5ECFF',
          'btn-blue-txt': '#4965CB',
          'hero-bg': '#F9FAFD',
          'nav-link': '#7B8798',


         
      },

      },
      variants: {
        borderColor: ["hover", "focus"],
        Text: ['responsive', 'hover', 'focus', 'active']
      },
      plugins: [
        require('tailwindcss-textshadow')

      ],
    };

    //varients need to be listed in config 