import styled from "styled-components";
import { useRoutes } from "react-router";
import { GlobalStyle } from "./assets/scss/GlobalStyle";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import Search from "./views/Search/Search";
import Account from "./views/Account/Account";
import MyList from "./views/Account/MyList/MyList";
import Downloads from "./views/Account/Downloads/Downloads";
import Continue from "./views/Account/Continue/Continue";

const StyledApp = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr;
  height: 100%;
  scrollbar-width: none;
  main {
    scrollbar-width: none;
    height: calc(100vh - 120px);
    @media (min-width: 640px) {
      height: calc(100vh - 60px);
      margin-left: 60px;
    }
  }
`;

const routes = [
  { path: "/", element: <Home /> },
  { path: "/search", element: <Search /> },
  {
    path: "/account",
    element: <Account />,
    children: [
      { path: "/my-list", element: <MyList /> },
      { path: "/downloads", element: <Downloads /> },
      { path: "/continue-watching", element: <Continue /> },
    ],
  },
];

const App = () => {
  const element = useRoutes(routes);

  return (
    <div>
      <GlobalStyle />
      <StyledApp>
        <Header />
        <main>{element}</main>
      </StyledApp>
    </div>
  );
};

export default App;
