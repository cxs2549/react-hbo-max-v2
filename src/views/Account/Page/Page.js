import styled from "styled-components";

const StyledPage = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 1rem;
  @media (min-width: 768px) {
    padding: 0 1.25rem;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1280px) {
    padding: 0;
    grid-template-columns: repeat(5, 1fr);
  }
  #wrapper {
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    gap: 1rem;
    padding-bottom: 2rem;
    position: relative;
    transition: 400ms;
    @media (min-width: 640px) {
      grid-template-columns: 2fr 1.5fr;
    }
    @media (min-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  #imageWrapper {
    cursor: pointer;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }
		#bgPlay {
			position: absolute;
			bottom: 3px;
			left: 3px;
			ion-icon {
				color: var(--brandPurple);
			}
		}
		#topPlay {
			position: absolute;
			bottom: 6px;
			left: 0;
		}
  }
 ion-icon {
	 font-size: 23px;
 }
  #info {
    font-size: 12px;
    @media (min-width: 540px) {
      font-size: 13px;
    }
    @media (min-width: 1280px) {
      font-size: 1rem;
    }
  }
  img {
    border-radius: 3px;
    position: relative;
    max-width: 100%;
  }
  #durationBar {
		position: absolute;
    bottom: -0.75rem;
    height: 6px;
		bottom: -0ch.5rem;
		left: 0;
		width: 100%;
		background-color: rgba(0,0,0,0.3);
		height: 6px;
		border-radius: 99999px;
		>div {
			background-image: linear-gradient(to right, green, var(--brandPink));
			height: 100%;
			border-top-left-radius: 99999px;
			border-bottom-left-radius: 99999px;
		}
  }
`;

const Page = ({ page }) => {
  return (
    <StyledPage>
      {page.map((item, i) => (
        <div
          key={i}
          id="wrapper"
          className="grid grid-cols-2 md:grid-cols-1  gap-3"
        >
          <div id="imageWrapper" className="relative">
            <img src={item.image} className="rounded" alt="" />
            <div id="bgPlay">
              <ion-icon name="play"></ion-icon>
            </div>
            <div id="topPlay">
						<ion-icon name="play"></ion-icon>
						</div>
            <div id="durationBar" className=" bottom-1 left-1 right-0 rounded bg-blue-500 bg-opacity-30">
							<div
								style={{ width: item.duration }}
								className="bg-gradient-to-r from-green-400 to-brand-pink h-full rounded-l opacity-80"
							/>
						</div>
          </div>
          <div id="info" className="md:mt-2">
            <p className="leading-5">{item.title}</p>
            {item.year && <p className="text-xs">({item.year})</p>}
          </div>
        </div>
      ))}
    </StyledPage>
  );
};

export default Page;
