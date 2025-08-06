/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "344px",
        sm:"430px",
        md:"780px",
        tablet:"1220px",
        xl:"1400px"
      },
      animation: {
        downgrade: "downgrade 1s ease-in-out",
        upgrade: "downgrade 1s ease-in-out reverse",
        downGrowCard: "downGrowCard 1s ease-in-out",
        upGrowCard: "upGrowCard 1s ease-in-out",
        infoAppear: "infoAppear 1s forwards var(--delay-anim)",
        infoDisappear: "infoDisappear 1s",
        // transparent: "transparent 0.5s",
      },
      keyframes: {
        downgrade: {
          from: {
            opacity: 1,
            transform: "scale(1)",
          },
          to: {
            opacity: 0,
            transform: "scale(1.3)",
          },
        },
        downGrowCard: {
          "0%": {
            width: "10rem",
            height: "auto",
            left: "41.5%",
          },
          "50%": {
            width: "100vw",
            height: "100vh",
            left: "0",
          },
          "100%": {
            width: "100vw",
            height: "100vh",
            left: "0",
          },
        },
        upGrowCard: {
          "0%": {
            width: "100vw",
            height: "100vh",
            left: "0",
          },
          "50%": {
            width: "10rem",
            height: "auto",
            left: "41.5%",
          },
          "100%": {
            width: "10rem",
            height: "auto",
            left: "41.5%",
          },
        },
        infoAppear: {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
            display: "none",
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: "1",
            display: "flex",
          },
        },
        infoDisappear: {
          "0%": {
            transform: "translateY(0%)",
            display: "none",
             opacity: "1",
          },
          "100%": {
            transform: "translateY(100%)",
             opacity: "0",
             display: "flex",
          },
        },
      },
    },
  },
  plugins: [],
};

