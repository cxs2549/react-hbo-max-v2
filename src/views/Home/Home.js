import styled from 'styled-components'
import Hero from './Hero/Hero'
import Hubs from './Hubs/Hubs'
import Lists from './Lists/Lists'

const StyledHome = styled.div`
	background-color: #923cb5;
background-image: linear-gradient(to top, #34124B 0%, #000000 74%);
	position: relative;
	scrollbar-width: none;
	@media (min-width: 640px) {
		padding-bottom: 2rem;
	}
  @media (min-width: 768px) {
    padding-bottom: 3rem;
  }
`

const Home = () => {
	return (
		<StyledHome>
			<Hero />
			<Lists />
			<Hubs />
		</StyledHome>
	)
}

export default Home
