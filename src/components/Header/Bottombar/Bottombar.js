import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledBottombar = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	height: 60px;
	width: 100%;
	background-color: var(--brandBlack);
	z-index: 10;
	@media (min-width: 640px) {
		display: none;
	}
	#holder {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		width: 75%;
		margin: 0 auto;
	}

	ion-icon {
		font-size: 1.5rem;
	}

	a {
		display: flex;
		align-items: center;
		font-size: 1.5rem;
		height: 100%;
		min-height: 60px;
		max-height: 60px;
		color: white;
		opacity: 0.75;
	}

	.active {
		color: var(--brandPink);
		opacity: 1;
	}
`

const Bottombar = () => {
	return (
		<StyledBottombar className="globalPadding">
			<div id="holder">
				<NavLink to="/" end>
					<ion-icon activeClassName="active" id="icon" name="home-outline" />
				</NavLink>
				<NavLink to="/search" activeClassName="active">
					<ion-icon id="icon" name="search-outline" />
				</NavLink>
				<NavLink to="/account" activeClassName="active">
					<ion-icon id="icon" name="person-outline" />
				</NavLink>
			</div>
		</StyledBottombar>
	)
}

export default Bottombar
