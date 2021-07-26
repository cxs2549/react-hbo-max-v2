import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid black;
  }
`;

const Header = () => {
  return (
    <StyledHeader >
      <nav className="globalPadding">
        <div>logo</div>
        <div>links</div>
      </nav>
    </StyledHeader>
  );
};

export default Header;
