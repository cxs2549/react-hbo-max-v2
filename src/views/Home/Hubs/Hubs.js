import styled from "styled-components";
import {
  hub1,
  hub2,
  hub3,
  hub4,
  hub5,
  hub6,
  hub7,
  hub8,
  hub9,
  hub10,
} from "../../../assets/hubs";

const StyledHubs = styled.div`
  padding: 0 1rem;
  color: white;
  @media (min-width: 768px) {
    padding: 0 24px;
  }
  img {
    max-width: 80%;
  }
  #box {
    margin-top: .5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;

  }
  #imageWrapper {
    cursor: pointer;
    min-width: 47%;
    max-width: 200px;
    height: 76px;
    padding: 4px 32px;
    border-radius: 99999px;
    margin-bottom: 1rem;
    background-color: #1fd1f9;
    background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
    @media (min-width: 768px) {
      min-width: 19%;
    }
    @media (min-width: 1024px) {
      min-width: 19%;
    }
    @media (min-width: 1536px) {
      min-width: 9%;
    }

    position: relative;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      padding: 0.5rem 0;
    }
    #imageBG {
      position: absolute;
      left: 50%;
      right: 0;
      top: 50%;
      border-radius: 9999px;
      transform: translate(-50%, -50%);
      height: 92%;
      width: 97%;
      background-color: black;
      display: grid;
      place-items: center;
    }
  }
`;

const Hubs = () => {
  const hubs = [hub1, hub2, hub3, hub4, hub5, hub6, hub7, hub8, hub9, hub10];
  return (
    <StyledHubs>
      <h3>HBO Hubs</h3>
      <div id="box">
        {hubs.map((hub, i) => (
          <div id="imageWrapper" key={i}>
            <div id="imageBG">
              <img src={hub} alt="" />
            </div>
          </div>
        ))}
      </div>
    </StyledHubs>
  );
};

export default Hubs;
