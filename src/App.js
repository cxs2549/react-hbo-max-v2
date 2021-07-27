import styled from 'styled-components'
import { useRoutes } from 'react-router'
import { GlobalStyle } from './assets/scss/GlobalStyle'
import Header from './components/Header/Header'
import Home from './views/Home/Home'

const StyledApp = styled.div`
	display: grid;
	grid-template-rows: 60px 1fr;
	height: 100%;

	main {
		height: calc(100vh - 120px);
		@media (min-width: 640px) {
			height: calc(100vh - 60px);
		}
		@media (min-width: 1921px) {
			padding: 0 2%;
		}
	}
`

const routes = [ { path: '/', element: <Home /> } ]

const App = () => {
	const element = useRoutes(routes)

	return (
		<div>
			<GlobalStyle />
			<StyledApp>
				<Header />
				<main>{element}</main>
			</StyledApp>
		</div>
	)
}

export default App
