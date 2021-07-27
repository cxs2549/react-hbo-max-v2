import { createGlobalStyle } from 'styled-components'

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

    --heroBG: black;
    --maxWidth: 1920px;
  }

  
  body {
    background-color: #000;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  .modal-open {
    overflow: hidden;
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

  main {
    /* margin-top: 60px; */
    position: relative;
    z-index: 1;
  }

  h1 {
      font-size: 1.45rem;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1.1;
      padding-bottom: 0.25rem;
      @media (min-width: 768px) {
        font-size: 1.75rem;
      }
      @media (min-width: 1024px) {
        font-size: 2.2rem;
      }
      @media (min-width: 1280px) {
        font-size: 290%;
        line-height: 1;
        padding-bottom: 0.5rem;
        text-shadow: 1px 1px 1px #6d2b63;
        letter-spacing: 0.03em;
      }
    }

    h3 {
		font-size: 115%;
		font-weight: 600;
		text-transform: capitalize;
	
		padding-bottom: .35rem;
		@media (min-width: 768px) {
		
			padding-bottom: .45rem;
			font-size: 120%;
		}
		@media (min-width: 1024px) {
			font-size: 138%;
		}
    @media (min-width: 1280px) {
     
      padding-bottom: .5rem;
      font-size: 144%;
    }
    @media (min-width: 1340px) {
      padding: 0;
      padding-bottom: .4rem;
    }
	}

  
`
