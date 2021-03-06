import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledAccount = styled.div`
  margin-top: 60px;
  color: white;
  position: relative;
  z-index: 1;
  background-color: #e056fd;
  background-image: linear-gradient(315deg, #561f61 0%, #000000 74%);
  height: 100%;
  padding-bottom: 60px;
  height: 100vh;
  #wrapper {
    max-width: var(--maxWidth);
    margin: 0 auto;
  }
  a {
    opacity: 0.5;
    position: relative;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    font-weight: 600;
    opacity: 1;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -9px;
      width: 100%;
      height: 3px;
      background-color: var(--brandPurple);
    }
  }
  #top {
    padding: 0 1rem;
    height: auto;
    z-index: 2;
    max-width: 100%;
    margin: 0 auto;
    position: fixed;
    left: 0;
    right: 0;
    top: 60px;
    background-color: black;
    @media (min-width: 640px) {
       width: calc(100vw - 60px);
       left: 60px;
     }
    @media (min-width: 768px) {
      padding: 0 1.5rem;
    
    }
    @media (min-width: 1536px) {
      left: 0;
      padding: 0;
    }

    #innerTop {
      border-color: #353549;
      height: 100%;
      top: 2.75rem;
      left: 0;
      width: 100%;
      transition: height 200ms;

      @media (min-width: 768px) {
        top: 3.5rem;
       
      }
      span {
        font-size: 90%;
        color: #b535f5;
        &:hover {
          color: white;
        }
      }
      #topBottom {
        width: 100%;
        max-width: var(--maxWidth);
        padding-bottom: 2rem;
        height: 74px;
        @media (min-width: 768px) {
         
        }
        @media (min-width: 1280px) {
          margin-left: 0;
        }
        @media (min-width: 1536px) {
          margin: 0 auto;
        }
        #links {
          display: flex;
          border-bottom: 1px solid var(--muted);
          justify-content: space-between;
          padding-bottom: 0.5rem;
          @media (min-width: 470px) {
            justify-content: flex-start;
            gap: 2.5rem;
          }
					a {
						color: white;
					}
        }
				#sort {
					margin-top: .5rem;
          cursor: pointer;
          opacity: .86;
					> div {
						display: flex;
						align-items: center;
						div {
							margin-right: .25rem;
						}
					}
				}
      }
    }
  }
  #profileButton {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 2.5rem;
    width: 100%;
    padding-top: 2rem;
    cursor: pointer;
    @media (min-width: 640px) {
      margin-left: -30px;
    }
   
    @media (min-width: 1536px) {
      margin-left: 0;
    }
    #circle {
      height: 100px;
      width: 100px;
      border: 2px solid white;
      border-radius: 99999px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 200%;
    }
    span {
      margin-top: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
  #bottom {
    margin-top: 300px;
    position: relative;
    z-index: 1;
  }
`;

const Account = () => {
  return (
    <StyledAccount>
      <div id="wrapper">
        <div id="top">
          <div id="innerTop">
            <div id="profileButton">
              <div id="circle">CS</div>
              <span>switch profiles</span>
            </div>
            <div id="topBottom">
              <div id="links">
                <NavLink to="my-list" activeClassName="active">
                  My List
                </NavLink>
                <NavLink to="downloads" activeClassName="active">
                  Downloads
                </NavLink>
                <NavLink activeClassName="active" to="continue-watching">
                  Continue Watching
                </NavLink>
              </div>
              <div id="sort">
                <div>
                  <div>Sort: Recently Added</div>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="bottom">
          <Outlet />
        </div>
      </div>
    </StyledAccount>
  );
};

export default Account;
