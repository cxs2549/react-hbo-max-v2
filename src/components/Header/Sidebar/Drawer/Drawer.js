import styled from "styled-components";

const StyledDrawer = styled.div`
  position: fixed;
  left: ${(props) => (props.open ? 0 : "-100%")};
  top: 60px;
  width: 75%;
  max-width: 370px;
  height: 100%;
  background-color: var(--brandBlack);
  transition: left 400ms ease-in;
  z-index: 9;
  @media (min-width: 640px) {
    left: ${(props) => (props.open ? "56px" : "-100%")};
  }
`;

const Drawer = ({ open }) => {
  return (
    <StyledDrawer open={open} className="globalPadding">
      hi
    </StyledDrawer>
  );
};

export default Drawer;
