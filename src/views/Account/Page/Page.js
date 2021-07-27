import styled from 'styled-components'

const StyledPage = styled.div`
	max-width: var(--maxWidth);
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
	padding: 0 1rem;
	position: relative;
	@media (min-width: 640px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (min-width: 768px) {
		padding: 0 1.5rem;
		grid-template-columns: 1fr 1fr 1fr;
	}
	@media (min-width: 1024px) {
		grid-template-columns: repeat(4, 1fr);
	}
	@media (min-width: 1280px) {
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
		font-size: 13px;
		@media (min-width: 540px) {
			font-size: 14px;
		}
		@media (min-width: 1280px) {
			font-size: 15px;
		}
    p {
      opacity: .75;
    }
    p:last-child {
      font-size: 12px;
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
		height: 5px;
		bottom: -0ch.5rem;
		left: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		height: 6px;
		border-radius: 99999px;
		> div {
			background-image: linear-gradient(to right, skyblue, var(--brandPink));
			height: 100%;
			border-top-left-radius: 99999px;
			border-bottom-left-radius: 99999px;
		}
	}
`

const Page = ({ page }) => {
	return (
		<StyledPage>
			{page.map((item, i) => (
				<div key={i} id="wrapper">
					<div id="imageWrapper">
						<img src={item.image} alt="" />
						<div id="bgPlay">
							<ion-icon name="play" />
						</div>
						<div id="topPlay">
							<ion-icon name="play" />
						</div>
						<div id="durationBar">
							<div style={{ width: item.duration }} />
						</div>
					</div>
					<div id="info">
						<p className="leading-5">{item.title}</p>
						{item.year && <p className="text-xs">({item.year})</p>}
					</div>
				</div>
			))}
		</StyledPage>
	)
}

export default Page
