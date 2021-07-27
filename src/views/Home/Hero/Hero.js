import styled from 'styled-components'
import hero from '../../../assets/hero.png'

const StyledHero = styled.div`
	height: 42vh;
	position: relative;
	@media (min-width: 640px) {
		height: 49vh;
	}
	@media (min-width: 768px) {
		height: 60vh;
	}
	@media (min-width: 1280px) {
		height: 81vh;
	}
	#image {
		background-image: url(${hero});
		background-size: cover;
		background-position: center center;
		height: 30vh;
		position: relative;
        @media (min-width: 640px) {
            height: 35vh;
        }
		@media (min-width: 768px) {
			height: 50vh;
		}
		@media (min-width: 1280px) {
			height: 74vh;
		}
		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			right: 0;
			width: 100%;
			height: 20%;
			background-image: linear-gradient(to top, var(--heroBG), transparent);
		}
	}
	#overlay {
		position: absolute;
		width: 100%;
		height: 70%;
		background-image: linear-gradient(to top, var(--heroBG) 20%, transparent 100%);
		bottom: 3rem;
		/* display: none; */
	}
	#text {
		position: absolute;
		left: 1rem;
		bottom: 0;
		color: white;
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
		}
		button {
			text-transform: uppercase;
			font-weight: 700;
			letter-spacing: 0.15em;
			padding: 0.6em 1.5em 0.6em;
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
			&:first-child {
				position: relative;
				z-index: 500;
				transition: all 400ms;
				&:hover {
					border-color: #ff00e3;
				}
			}
			&:last-child {
				background-color: #c21bd8;
				transition: opacity 400ms;
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
				<div id="buttons" className="text-sm flex space-x-4 mt-6">
					<button className="border-2  rounded-full uppercase font-semibold flex items-center space-x-1">
						<h4>watch</h4>
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
