import styled from 'styled-components'
import Hero from './Hero/Hero'
import Hubs from './Hubs/Hubs'
import Lists from './Lists/Lists'

const StyledHome = styled.div`
	background-color: #923cb5;
background-image: linear-gradient(to top, #34124B 0%, #000000 74%);
	padding-bottom: 120px;
	position: relative;
	scrollbar-width: none;
	@media (min-width: 640px) {
		padding-bottom: 2rem;
	}
  @media (min-width: 768px) {
    padding-bottom: 3rem;
  }
  
	@media (min-width: 1536px) {
		margin-left: 0;
  
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
