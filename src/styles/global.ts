// This file shall contain styles that will affect the root file and its children
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans&display=swap'); */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    /* font-family: 'Montserrat', sans-serif; */
    scroll-behavior: smooth;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  background-color: rgba(0,0,0,0.1);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* font-size: 20px; */
}
`;

export default GlobalStyle;
