import { createGlobalStyle } from 'styled-components';

/* Lato Font import */
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

  /* Ondo Font local import */
  @font-face {
    font-family: 'Ondo';
    src: local('OndoBoldRegular'), url('./assets/fonts/Ondo/FONTSPRINGDEMO-OndoBoldRegular.ttf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #2d1e6b;
    --gradient-color: linear-gradient(
      90deg,
      rgba(101, 66, 244, 1) 43.84%,
      rgba(249, 118, 255, 1) 68.39%,
      rgba(181, 0, 152, 1) 91.97%
    );
  }

  body {
    font-family: 'Lato', Arial, sans-serif;
    background-color: #10102a;
    color: white;
    margin: 0;
    font-size: 18.72px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.04em;
  }

  /* Custom classes can be defined here if needed */
  .gradient-border {
    border-image-slice: 1;
    border-image-source: var(--gradient-color);
  }

  .gradient-bg {
    background-image: var(--gradient-color);
  }

  .gradient-text {
    background-image: var(--gradient-color);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .card-shadow {
    box-shadow: 0px 4px 20px -1px #00000000;
  }
`;

export default GlobalStyles;
