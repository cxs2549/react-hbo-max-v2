import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledDrawer = styled.div`
  position: absolute;
  left: ${(props) => (props.open ? 0 : "-100%")};
  top: 60px;
  min-width: 75%;
  height: 100vh;
  transition: left 400ms ease-in;
  z-index: 2;
  background-color: var(--brandBlack);
  padding-bottom: 60px;
  overflow-y: scroll;
  @media (min-width: 640px) {
    left: ${(props) => (props.open ? "60px" : "-100%")};
    min-width: 370px;
  }
  @media (min-width: 1536px) {
    left: ${(props) => (props.open ? 0 : "-100%")};
  }
  ul {
    height: 100%;
    width: 100%;
    background-color: var(--brandBlack);
  }
  li {
    text-transform: capitalize;
    width: 100%;
    a {
      padding: 1rem;
      display: block;
      font-size: 20px;
      text-decoration: none;
      line-height: 28px;
      letter-spacing: 0px;
      color: rgb(153, 153, 153);
      height: 100%;
      width: 100%;
      font-size: 145%;
    }
    .active {
      color: #000000b9;
      font-weight: 900;
      background-color: var(--brandYellow);
    }
    &:nth-child(8), &:nth-child(26), &:last-child {
      border-bottom: 1px solid var(--muted);
    }
  }
`;

const Drawer = ({ open, clicked }) => {
  const links1 = [
    "series",
    "movies",
    "originals",
    "just added",
    "last chance",
    "coming soon",
    "trending now",
  ];
  const links2 = [
    "action",
    "animation",
    "comedy",
    "crime",
    "docuseries",
    "drama",
    "fantasy & sci-fi",
    "horror",
    "international",
    "kids & family",
    "latino",
    "music",
    "news/talk",
    "reality",
    "romance",
    "shorts",
    "sports",
    "suspense",
  ];
  return (
    <StyledDrawer open={open}>
      <div>
        <ul>
          <li onClick={clicked}>
            <NavLink to="/" activeClassName="active" end>
              Home
            </NavLink>
          </li>
          {links1.map((link, i) => (
            <li key={i} onClick={clicked}>
              <NavLink to={`outofscope/${link.replace(/ /g, "_")}`}>
                <span>{link}</span>
              </NavLink>
            </li>
          ))}
          {links2.map((link, i) => (
            <li key={i}>
              <NavLink to={`outofscope/${link.replace(/ /g, "_")}`}>
                {link}
              </NavLink>
            </li>
          ))}
          <li onClick={clicked}>
            <NavLink to="/outofscope/audio-description">
              Audio Description
            </NavLink>
          </li>
        </ul>
      </div>
    </StyledDrawer>
  );
};

export default Drawer;
