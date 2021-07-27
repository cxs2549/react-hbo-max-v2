import styled from 'styled-components'
import Hero from './Hero/Hero'
import Lists from './Lists/Lists'

const StyledHome = styled.div`
	background-color: var(--heroBG);
	background-image: linear-gradient(to bottom, var(--heroBG) 60%, var(--brandPurple) 85%, black 100%);
    padding-bottom: 120px;
	position: relative;
	@media (min-width: 640px) {
		margin-left: 60px;
	}
`

const Home = () => {
	return (
		<StyledHome>
			<Hero />
            <Lists />
		</StyledHome>
	)
}

export default Home
