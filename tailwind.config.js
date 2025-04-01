/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sanns: "DM Sans",
        interr: "Inter",
        manrope: "manrope"
      },
      backgroundColor: {
        header: "#FFFFFF",
        graybg: "#9B9D8E",
        bgGray: "#6B911B",
        colHow: "#FAFFEF",
        productCol: "#FCFFF5",
        test: "#4F6F0D"
      },
      textColor: {
        header: "#6B911B",
        gray: "#9B9D8E",
        blacky: "#141414"
      
     },
     
     backgroundImage: {
      bgFund: "url('https://media.istockphoto.com/id/2023691686/photo/farmer-working-in-the-field.jpg?s=612x612&w=0&k=20&c=dmqnAF2SvYggHjNUC1rRO107tQvUoV3gA9SevYyMvfc=')",
      bgFoot: "url('/foottest.jpg')",
      sectionImg: "url('https://media.istockphoto.com/id/1373228682/photo/shot-of-a-young-woman-working-on-a-farm.jpg?s=612x612&w=0&k=20&c=21Xh5ONIFu08mBXNsv6VLAtjBicv7e3GPRo6BTnpyY8=')",
    }
  },
  plugins: [],
  }}
