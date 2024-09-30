module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato", "Arial", "sans-serif"], // Merging Lato font
      ondo: ["Ondo", "Arial", "sans-serif"] // Adding Ondo font
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
        primary: "#2d1e6b", // Updated primary color
        secondary: "#F5E6E0"
      },
      backgroundImage: {
        hero: "url('./img/bg_hero.svg')" // Hero background image
      },
      clipPath: {
        parallelogram: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"
      },
      fontSize: {
        "custom-base": "16px" // Custom font size
      },
      lineHeight: {
        "custom-lh": "29.62px" // Custom line height
      },
      letterSpacing: {
        "custom-ls": "0.04em" // Custom letter spacing
      },
      gradientColorStops: {
        "primary-gradient": "rgba(101, 66, 244, 1)", // Additional gradient stops
        "secondary-gradient": "rgba(249, 118, 255, 1)",
        "tertiary-gradient": "rgba(181, 0, 152, 1)"
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
