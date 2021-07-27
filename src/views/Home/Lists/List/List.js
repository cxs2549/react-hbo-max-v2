import styled from 'styled-components'

const StyledList = styled.div`
	#gallery {
		margin-top: .5rem;
        margin-bottom: 1rem;
		display: flex;
		gap: 1rem;
		position: relative;
		overflow-x: scroll;
		padding-bottom: 1rem;
		scrollbar-width: none;
		> div {
			max-width: 48%;
			min-width: 48%;
            @media (min-width: 1024px) {
                max-width: 20%;
                min-width: 20%;
            }
		}
		img {
			max-width: 100%;
            border-radius: 3px;
		}
	}
`

const List = ({ title, images }) => {
	return (
		<StyledList>
			<h3>{title}</h3>
			<div id="gallery">
				{images.map((image, i) => (
					<div key={i}>
						<img src={image} alt="" />
					</div>
				))}
			</div>
		</StyledList>
	)
}

export default List
