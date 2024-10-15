/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electricBlue: '#018ce6',
        mediumGrey: '#949494',
        orangeCrayola: '#FD872D',
        orangeLight : '#fee0c8',
        darkJungleGreen: '#204945',
        rhino : '#777E90',
        bgLightBlue: '#f0f4ff'
      },
      backgroundImage: {
        'hero-baner-background': "url('/public/assets_Image/hero_baner_background.png')"
      }
    },
    fontFamily: {
      poppins: ['Poppins'],
    }
  },
  plugins: [],
}