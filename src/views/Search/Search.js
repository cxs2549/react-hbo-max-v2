import styled from 'styled-components'
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
} from '../../assets/art'

const StyledSearch = styled.div`
	color: white;
	width: 100%;
	position: relative;
	background-color: #923cb5;
	background-image: linear-gradient(to right, #371645 0%, #000000 74%);
	padding: 0 1rem;
	padding-top: 12px;
	height: 100vh;
	@media (min-width: 1024px) {
		padding: 0 1.25rem;
	}
	#wrapper {
		max-width: var(--maxWidth);
		margin: 0 auto;

		> div:first-child {
			position: relative;
			margin-bottom: 2rem;
		}
	}
	input {
		transition: 250ms;
		margin-top: 1rem;
		background-color: transparent;
		border-radius: 0;
		border: none;
		border-bottom: #353549 1px solid;
		width: 100%;
		padding: 0.25rem 2.5rem;
		color: white;
		letter-spacing: 0.06ch;
		font-size: 115%;
		&:focus {
			outline: none;
			+ #searchIcon {
				opacity: 1;
			}
		}
	}

	input[type="search"] {
		-webkit-appearance: none;
	}

	#searchIcon {
		position: absolute;
		color: white;
		opacity: 0.6;
		bottom: 0;
		left: 0;
		transition: opacity 400ms;
		@media (min-width: 768px) {
			left: 0;
		}
		@media (min-width: 1280px) {
			left: 0;
		}
	}
	ion-icon {
		font-size: 25px;
	}
	#pops {
		width: 100%;
		position: relative;

		padding-bottom: 4.5rem;
		> div {
			margin-top: .5rem;
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 1rem;
			@media (min-width: 768px) {
				grid-template-columns: 1fr 1fr 1fr;
			}
			@media (min-width: 1024px) {
				grid-template-columns: 1fr 1fr 1fr 1fr;
			}
			@media (min-width: 1280px) {
				grid-template-columns: repeat(5, 1fr);
			}
			> div {
				cursor: pointer;
				img {
					max-width: 100%;
					border-radius: 3px;
				}
			}
		}
	}
`

const Search = () => {
	const art = [
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
	]
	return (
		<StyledSearch>
			<div id="wrapper">
				<div>
					<input type="search" placeholder="What are you looking for?" />
					<div id="searchIcon">
						<ion-icon name="search-outline" />
					</div>
				</div>
				<div id="pops">
					<h3>Popular Searches</h3>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-1 ">
						{art.map((image, i) => (
							<div>
								<img
									src={image}
									alt=""
									className="rounded cursor-pointer hover:scale-105 transform transition duration-200"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</StyledSearch>
	)
}

export default Search
