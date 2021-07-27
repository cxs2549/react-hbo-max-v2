import styled from 'styled-components'
import hero from '../../../assets/hero.png'

const StyledHero = styled.div`
	height: 30vh;
	position: relative;
	margin-bottom: 7rem;
	@media (min-width: 640px) {
		height: 37vh;
		margin-bottom: 8rem;
	}
	@media (min-width: 768px) {
		height: 50vh;
	}
	@media (min-width: 1024px) {
		height: 56vh;
		margin-bottom: 7rem;
	}
	@media (min-width: 1280px) {
		height: 65vh;
	}
	#image {
		background-image: url(${hero});
		background-size: cover;
		background-position: center;
		height: 100%;
		width: 100%;
		transition: 500ms;
	}
	#overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(to bottom, transparent 22%, var(--heroBG) 100%);
		bottom: 0;
		/* display: none; */
	}
	#text {
		position: absolute;
		left: 1rem;
		bottom: -5rem;
		color: white;
		@media (min-width: 768px) {
			left: 1.5rem;
			bottom: -4rem;
		}
		h2 {
			text-transform: uppercase;
			font-size: 0.9rem;
			font-weight: 700;
			opacity: 0.95;
			@media (min-width: 768px) {
				font-size: 1rem;
			}
			@media (min-width: 1024px) {
				text-shadow: 1px 1px 1px #6d2b63;
				font-size: 1.2rem;
			}
		}
		p {
			font-size: 0.83rem;
			line-height: 1.25;
			opacity: 0.9;
			padding-top: 4px;
			@media (min-width: 768px) {
				font-size: 0.9rem;
			}
			@media (min-width: 1024px) {
				text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
				font-size: 1rem;
			}
			@media (min-width: 1268px) {
				font-size: 1.2rem;
			}
		}
		#buttons {
			margin-top: 24px;
			display: flex;
			align-items: center;
			button:first-child {
				border-radius: 99999px;
				height: 40px;
				width: 40px;
				display: grid;
				place-items: center;
				/* background-color: var(--brandPurple); */
				margin-right: 1rem;
				border: 2px solid var(--brandPurple);
				color: white;
				background-color: transparent;
			}
			ion-icon {
				font-size: 28px;
				margin-left: 3px;
				@media (min-width: 1280px) {
					font-size: 32px;
				}
			}
		}
		button {
			text-transform: uppercase;
			border: none;
			font-weight: 700;
			letter-spacing: 0.15em;
			width: max-content;
			white-space: nowrap;
			font-size: 0.75rem;
			cursor: pointer;
			@media (min-width: 768px) {
				font-size: 0.9rem;
			}
			@media (min-width: 1280px) {
				font-size: 1rem;
			}
			&:last-child {
				padding: 0.6em 1.5em 0.7em;
				border-radius: 99999px;
				color: white;
				border: 2px solid var(--brandPurple);
				background-color: transparent;
				transition: opacity 400ms;
				height: 40px;
				&:hover {
					opacity: 0.9;
				}
			}
		}
	}
`

const Hero = () => {
	return (
		<StyledHero>
			<div id="image" />
			<div id="overlay" />
			<div id="text">
				<h1>
					Space Jam: <br /> A New Legacy
				</h1>
				<h2>Now playing</h2>
				<p>
					In theaters and on HBO Max. Streaming <br /> through Aug 15.
				</p>
				<div id="buttons">
					<button>
						<ion-icon name="play-outline" />
					</button>
					<button className="rounded-full uppercase font-semibold inline">
						more info
					</button>
				</div>
			</div>
		</StyledHero>
	)
}

export default Hero
