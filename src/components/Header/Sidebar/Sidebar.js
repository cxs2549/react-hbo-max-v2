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

  #holder {
    padding-top: 1.6rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 2.5rem;
    height: 100%;
    margin: 0 auto;
  }

  ion-icon {
    font-size: 1.5rem;
  }
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <div id="holder">
        <ion-icon id="icon" name="home-outline"></ion-icon>
        <ion-icon id="icon" name="search-outline"></ion-icon>
        <ion-icon id="icon" name="person-outline"></ion-icon>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
