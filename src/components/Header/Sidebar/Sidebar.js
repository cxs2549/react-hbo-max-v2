import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledSidebar = styled.div`
  display: none;
  position: fixed;
  left: 0;
  top: 60px;
  height: 100vh;
  width: 60px;
  background-color: var(--brandBlack);
  z-index: 10;
  @media (min-width: 640px) {
    display: flex;
  }
  @media (min-width: 1536px) {
    display: none;
  }

  #holder {
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100%;
    margin: 0 auto;
  }

  a {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    height: 100%;
    min-height: 60px;
    max-height: 60px;
    color: white;
    opacity: 0.75;
  }
  .active {
    color: var(--brandPink);
    opacity: 1;
  }
`;

const Sidebar = ({clicked}) => {
  return (
    <StyledSidebar>
      <div id="holder">
        <NavLink to="/" end onClick={clicked}>
          <ion-icon
            activeClassName="active"
            id="icon"
            name="home-outline"
          ></ion-icon>
        </NavLink>
        <NavLink to="/search" activeClassName="active" onClick={clicked}>
          <ion-icon id="icon" name="search-outline"></ion-icon>
        </NavLink>
        <NavLink to="/account" activeClassName="active" onClick={clicked}>
          <ion-icon id="icon" name="person-outline"></ion-icon>
        </NavLink>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
