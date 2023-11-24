import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Poppins', sans-serif;

    outline: none;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;

    -webkit-font-smoothing: antialiased;

    background-color: #1C1B1E;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter .25s;
  }

  button:hover, a:hover {
    filter: brightness(.8);
  }

  main {
    width: 100%;
    padding: 0 12.3rem;
  }
`