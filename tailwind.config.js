module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins"
    },
    container: {
      padding: {
        DEFAULT: "30px",
        lg: "0"
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px"
    },
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#F5E6E0"
      },
      backgroundImage: {
        hero: "url('./img/bg_hero.svg')"
      },
      // Add the clip-path extension here
      clipPath: {
        parallelogram: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        ".clip-parallelogram": {
          clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
          position: "relative",
          overflow: "hidden",
          zIndex: 0 // Ensure z-index is appropriate
        },
        ".parallelogram-border": {
          position: "absolute",
          top: 0,
          left: "-2px", // Adjust based on border thickness
          right: "-2px",
          bottom: 0,
          border: "2px solid #A855F7", // Adjust to your desired purple shade
          transform: "skew(-20deg)", // Match the clip-path skew
          zIndex: -1 // Place it behind the text
        }
      });
    }
  ]
};
