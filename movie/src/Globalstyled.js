import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    scrollbar-width: none;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default GlobalStyle;