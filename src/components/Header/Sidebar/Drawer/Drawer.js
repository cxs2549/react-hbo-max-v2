import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
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
	hub10
} from '../../../../assets/hubs'

const StyledDrawer = styled.div`
	position: absolute;
	left: ${(props) => (props.open ? 0 : '-100%')};
	top: 60px;
	min-width: 300px;
	max-width: 340px;
	height: 100vh;
	transition: left 400ms ease-in;
	transition-delay: 200ms;
	z-index: 3;
	background-color: var(--brandBlack);
	padding-bottom: 120px;
	overflow-y: scroll;
	scrollbar-width: none;
	@media (min-width: 640px) {
		left: ${(props) => (props.open ? '60px' : '-100%')};
		min-width: 370px;
	}
	@media (min-width: 1536px) {
		left: ${(props) => (props.open ? 0 : '-100%')};
	}
	ul {
		height: 100%;
		width: 100%;
		background-color: var(--brandBlack);
	}
	li {
		text-transform: capitalize;
		width: 100%;
		color: white;
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
			&:hover {
				color: white;
			}
		}
		.active {
			color: #1B2845 !important;
			font-weight: 900;
			background-color: var(--brandYellow);
		}
		&:nth-child(8),
		&:nth-child(26),
		&:nth-child(27) {
			border-bottom: 1px solid var(--muted);
		}
	}
	#hubs {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		max-width: 100%;
		padding: 1rem;
		gap: .75rem;
		> div {
			position: relative;
			z-index: 2;
			border-radius: 99999px;
			padding: .5rem 1rem;
      cursor: pointer;
			&::before {
				content: '';
				position: absolute;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				background-color: #50d8d7;
				background-image: linear-gradient(316deg, #50d8d7 0%, #923993 74%);

				height: 100%;
				border-radius: 99999px;
			}
			&::after {
				content: '';
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				right: 0;
				bottom: 0;
				background-color: var(--brandBlack);
				height: 92%;
				width: 95%;
				border-radius: 99999px;
			}
			img {
				width: 100%;
				max-width: 110px;
				position: relative;
				z-index: 10;
			}
		}
	}
`

const Drawer = ({ open, clicked }) => {
	const links1 = [
		'series',
		'movies',
		'originals',
		'just added',
		'last chance',
		'coming soon',
		'trending now'
	]
	const links2 = [
		'action',
		'animation',
		'comedy',
		'crime',
		'docuseries',
		'drama',
		'fantasy & sci-fi',
		'horror',
		'international',
		'kids & family',
		'latino',
		'music',
		'news/talk',
		'reality',
		'romance',
		'shorts',
		'sports',
		'suspense'
	]

	const hubs = [ hub1, hub2, hub3, hub4, hub5, hub6, hub7, hub8, hub9, hub10 ]
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
							<NavLink to={`outofscope/${link.replace(/ /g, '_')}`}>
								<span>{link}</span>
							</NavLink>
						</li>
					))}
					{links2.map((link, i) => (
						<li key={i}>
							<NavLink to={`outofscope/${link.replace(/ /g, '_')}`}>{link}</NavLink>
						</li>
					))}
					<li onClick={clicked}>
						<NavLink to="/outofscope/audio-description">Audio Description</NavLink>
					</li>
					<div id="hubs" className="globalPadding">
						{hubs.map((hub, i) => (
							<div key={i}>
								<img src={hub} alt="" />
							</div>
						))}
					</div>
				</ul>
			</div>
		</StyledDrawer>
	)
}

export default Drawer
