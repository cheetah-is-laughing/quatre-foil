import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color:#00B900;
    --secondary-color:#ff922b;
    --white:#fff;
    --black-10: #e6e6e6;
    --black-20: #ccc;
    --black-30: #b3b3b3;
    --black-40: #999;
    --black-50: #808080;
    --black-60: #666;
    --black-70: #4c4c4c;
    --black-80: #333;
    --black-90: #191919;
    --black-100: #000;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    // font-family: 'Righteous', cursive;
    color: var(--primary-color);
    background-color: var(--white);
    line-height: 1.5;
    scroll-behavior: smooth;
  }

  body {
    height: calc(100vh - 70px);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1rem;
    color: inherit;
    cursor: pointer;
    /* display: inline-block; */
    display: grid;
    place-items: center;
  }

  input {
    outline: none;
    border: none;
    font: inherit;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ul {
    list-style: none;
  }

  nav {
    color: var(--white);
    background-color: var(--primary-color);
  }

  h1 {
    font-family: 'Righteous', cursive;
  }

  #root {
    min-height: 100%;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
  }

  svg {
    font-size: 1.5rem;
    margin: 0.25rem;
    width: 24px;
  }
`;
