import { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import Bottombar from "./Bottombar/Bottombar";
import Sidebar from "./Sidebar/Sidebar";
import Drawer from "./Sidebar/Drawer/Drawer";
import Overlay from "./Sidebar/Overlay/Overlay";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  color: #fff;
  background-color: var(--brandBlack);
  #icon {
    cursor: pointer;
  }
  nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    #logoContainer {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      max-width: 130px;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: brightness(0) invert(1);
      }
    }
    & > div {
      display: flex;
      align-items: center;
    }
    > div:first-child {
      margin-left: -3px;
    }
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledHeader>
      <nav className="globalPadding">
        <div onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <ion-icon id="icon" name="close-outline" size="large"></ion-icon>
          ) : (
            <ion-icon id="icon" name="menu-outline" size="large"></ion-icon>
          )}
        </div>
        <div id="logoContainer">
          <img src={logo} alt="" />
        </div>
        {/* <div>right</div> */}
      </nav>
      <Sidebar />
      <Drawer open={isOpen} />
      <Overlay open={isOpen} clicked={() => setIsOpen(false)} />
      <Bottombar />
    </StyledHeader>
  );
};

export default Header;
