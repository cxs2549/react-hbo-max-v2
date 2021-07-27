import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  :root {
    --brandBlack: #0F0F0F;
    --brandPink: #FF00E4;
    --brandPurple: #9A35EF;
    --brandBlue: #4176D6;
    --brandYellow: #FBF9D3;
    --muted: #3C3C3C;

    --maxWidth: 1920px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  ion-icon { zoom: 1.5 }

  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }


  .globalPadding {
    padding: 0 1rem;
    @media (min-width: 768px) {
      padding: 0 1.25rem;
    }
    width: 100%;
    max-width: var(--maxWidth);;
    margin: 0 auto;
   @media (min-width: 1280px) {
     padding: 0 3%;
   }
    @media (min-width: 1921px) {
      padding: 0;
    }

  }
  
`;
