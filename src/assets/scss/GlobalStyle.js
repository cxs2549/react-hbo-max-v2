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
    --muted: #3C3C3C;

    --maxWidth: 1920px;
  }

  ion-icon { zoom: 1.5 }


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
