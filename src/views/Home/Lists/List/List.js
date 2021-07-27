import styled from "styled-components";

const StyledList = styled.div`
  #gallery {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
    position: relative;
    overflow-x: scroll;
    padding-bottom: 1rem;
    scrollbar-width: none;
		width: 100%;
    > div {
			cursor: pointer;
      max-width: 48%;
      min-width: 48%;
			position: relative;
			&::after {
				content: '';
				transition: 500ms;
				position: absolute;
				left: 0;
				top: 0;
				width: 3px;
				height: 100%;
				border-top-left-radius: 3px;
				border-bottom-left-radius: 3px;
				background-image: linear-gradient(to bottom, var(--brandPurple), #2e2e2e6b);
				opacity: .5;
				opacity: 0;
			}
			&:hover {
				&::after {
					opacity: 1;
				}
			}
			@media (min-width: 640px) {
				min-width: ${props => props.size || '35%'};
				max-width: ${props => props.size || '35%'};
			}
     @media (min-width: 768px) {
			min-width: ${props => props.size || '25%'};
			max-width: ${props => props.size || '25%'};
		 }
		 @media (min-width: 1024px) {
			min-width: ${props => props.size || '19%'};
			max-width: ${props => props.size || '19%'};
		 }

      @media (min-width: 1280px) {
        max-width: ${(props) => props.size || "16%"};
        min-width: ${(props) => props.size || "16%"};
      }
    }
    img {
      border-radius: 3px;
			max-width: 100%;
			object-fit: cover;
    }
  }
`;

const List = ({ title, images, size }) => {
  return (
    <StyledList size={size}>
      <h3>{title}</h3>
      <div id="gallery">
        {images.map((image, i) => (
          <div key={i}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </StyledList>
  );
};

export default List;
