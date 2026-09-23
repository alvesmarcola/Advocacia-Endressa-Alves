import { createGlobalStyle } from 'styled-components'
import { defaultTheme } from './themes/defaultTheme'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => defaultTheme.offWhite};
    color: ${({ theme }) => defaultTheme.coffee};

    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  html {
    scroll-behavior: smooth;

    @media (max-width: 1088px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }

    &::-webkit-scrollbar {
      border-radius: 8px;
      width: 0.5rem;
      background: ${({ theme }) => defaultTheme.beige};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: ${({ theme }) => defaultTheme.plum};
    }
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 400;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`