import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import Bottombar from "./Bottombar/Bottombar";
import Sidebar from "./Sidebar/Sidebar";
import Drawer from "./Sidebar/Drawer/Drawer";
import Overlay from "./Sidebar/Overlay/Overlay";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  color: #fff;
  background-color: var(--brandBlack);
  position: relative;
  z-index: 900;
  #icon {
    cursor: pointer;
  }

  .purp {
    color: var(--brandPurple);
    transition: 1s;
  }
  #navWrapper {
    position: fixed;
    width: 100%;
    max-width: var(--maxWidth);
    margin: 0 auto;
    height: 60px;
  }
  .active {
    color: var(--brandPurple) !important;
  }
  .activeFade {
    color: var(--brandBlack) !important;
  }
  nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    z-index: 100;
    background-color: var(--brandBlack);
    border-bottom: 1px solid var(--muted);
    max-width: var(--maxWidth);
    margin: 0 auto;
    #left {
      display: flex;
      align-items: center;
      gap: 3rem;
      #searchIcon {
        color: rgba(255, 255, 255, 0.8);
        display: none;
        font-size: 22px;

        @media (min-width: 1536px) {
          display: block;
        }
      }
    }
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
    #right {
      display: none;
      @media (min-width: 1536px) {
        display: block;
      }
      a {
        color: rgba(255, 255, 255, 0.8);
        &:hover {
          color: white;
        }
      }
      button {
        font-size: 16px;
        font-style: normal;
        text-decoration: none;
        text-transform: none;
        line-height: 20px;
        letter-spacing: 0px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.8);
        background-color: transparent;
        border: none;
        margin-left: 3rem;
        cursor: pointer;
        &:hover {
          color: white;
        }
      }
    }
    & > div {
      display: flex;
      align-items: center;
    }
    > div:first-child {
      margin-left: -3px;
      @media (min-width: 640px) {
        margin-left: 0;
      }
    }
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  };
  const handleClose = () => {
    setIsOpen(false);

    document.body.classList.remove("modal-open");
  };
  return (
    <StyledHeader>
      <div id="navWrapper">
        <nav>
          <div id="left">
            <div onClick={handleClick}>
              {isOpen ? (
                <div className="purp">
                  <ion-icon id="icon" name="close-outline" size="large" />
                </div>
              ) : (
                <ion-icon id="icon" name="menu-outline" size="large" />
              )}
            </div>
            <div>
              <NavLink to="search" id="searchIcon" activeClassName="activeFade">
                <ion-icon id="icon" name="search-outline"></ion-icon>
              </NavLink>
            </div>
            <div />
          </div>
          <div id="logoContainer">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div id="right">
            <button>Subscribe Now</button>
            <button>
              <Link to="account">My Account</Link>
            </button>
          </div>
        </nav>
        <Drawer open={isOpen} clicked={handleClose} />
      </div>
      <Sidebar clicked={handleClose} />
      <Overlay open={isOpen} clicked={handleClose} />
      <Bottombar clicked={handleClose} />
    </StyledHeader>
  );
};

export default Header;
