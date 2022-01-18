import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --Moderate-blue: hsl(238, 40%, 52%);
    --Soft-Red: hsl(358, 79%, 66%);
    --Light-grayish-blue: hsl(239, 57%, 85%);
    --Pale-red: hsl(357, 100%, 86%);

    --Dark-blue: hsl(212, 24%, 26%);
    --Grayish-Blue: hsl(211, 10%, 45%);
    --Light-gray: hsl(223, 19%, 93%);
    --Very-light-gray: hsl(228, 33%, 97%);
    --White: hsl(0, 0%, 100%);
  }    

  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--Very-light-gray);
    font-family: 'Rubik', sans-serif;
    font-size: .9rem;
    line-height: 1.5;
  }

  img,
  picture,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  textarea,
  button {
    font: inherit;
  }
`;

export default GlobalStyles;
