import styled from 'styled-components'
import List from './List/List'

import {
	cover1,
	cover2,
	cover3,
	cover4,
	cover5,
	cover6,
	cover7,
	cover8,
	cover9,
	cover10,
	cover11,
	cover12,
	cover13,
	cover14,
	cover15,
	cover16,
	cover17,
	cover18,
	cover19,
	cover20
} from '../../../assets/art'

const StyledLists = styled.div`
	padding: 0 1rem;
	/* padding-top: 1.75rem; */
	color: white;
	max-width: 100%;
	/* display: none; */
	@media (min-width: 768px) {
		padding: 0 1.5rem;
	}
	#gallery {
		margin-top: .5rem;
		display: flex;
		gap: 1rem;
		position: relative;
		overflow-x: scroll;
		padding-bottom: 1rem;
		scrollbar-width: none;
		> div {
			max-width: 48%;
			min-width: 48%;
			@media (min-width: 768px) {
				max-width: 20%;
				min-width: 20%;
			}
		}
		img {
			max-width: 100%;
		}
	}
`

const Lists = () => {
	const justAdded = [ cover1, cover2, cover3, cover9, cover11, cover18 ]
	const popular = [ cover4, cover5, cover6, cover8, cover7, cover13 ]
    const newEps = [cover7, cover8, cover9, cover10, cover17, cover12]
	return (
		<StyledLists>
			<List title="just added" images={justAdded} />
			<List title="popular movies" images={popular} />
			<List title="New Episodes this week" images={newEps} />
		</StyledLists>
	)
}

export default Lists
