import styled from "styled-components";
import { GlobalStyle } from "./assets/scss/GlobalStyle";
import Header from "./components/Header/Header";

const StyledApp = styled.div`
  display: grid;
  grid-template-rows: 60px 10fr;
  height: 100vh;

  main {
    @media (min-width: 1921px) {
      padding: 0 2%;
    }
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <StyledApp>
        <Header />
        <main className="globalPadding">content</main>
      </StyledApp>
    </div>
  );
};

export default App;
