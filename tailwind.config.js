/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth : {
        container: "1280px",
        input :"480px"
      },
      fontFamily : {
        nunito: ['"Nunito Sans"']
      },
      boxShadow: {
        headershadow: "0px 2px 4px rgba(0, 0, 0, 0.0562443)",
        input: "0px 2px 9px rgba(0, 0, 0, 0.0532439)",
        card: "0px 0px 7px 2px rgba(0, 0, 0, 0.0294384)",
        back: "0px 0px 7px rgba(0, 0, 0, 0.293139)",
        footer: "0px 0px 4px 1px rgba(0, 0, 0, 0.104931)"
      },
      borderRadius: {
        roundet: "5px"
      },
      backgroundPosition: {
        calc: "32px , center",
        back: "calc(50% - 40px)",
        select: "calc(50px + 120px) calc(50px - 28px)"
      }
    },
  },
  plugins: [],
}
