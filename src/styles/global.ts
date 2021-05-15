import { createGlobalStyle } from 'styled-components'

/**
 * Carregamento dos estilos globais
 * Estilos que estarão em todas as páginas
 */
const GlobalStyles = createGlobalStyle`
  /* font-display, quando ainda não tem nossa fonte carregada
   ele faz o swap usa uma fonte semelhante no sistema operacional */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'), local('Poppins-Light'),
        url('/fonts/poppins-v12-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'), local('Poppins-Regular'),
        url('/fonts/poppins-v12-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url('/fonts/poppins-v12-latin-600.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* texto bonito e suavizado com CSS ref https://devhints.io/css-antialias*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
