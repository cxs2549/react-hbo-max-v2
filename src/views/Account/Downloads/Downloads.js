import { cover15, cover19, cover6 } from '../../../assets/art'
import Page from '../Page/Page'

const Downloads = () => {
	const downloads = [
		{ image: cover15, title: 'The Hunt', original: true, duration: '75%', year: 2020 },
		{ image: cover19, title: 'White Chicks', original: false, duration: '15%', year: 2004 },
		{ image: cover6, title: 'Identity Thief', original: false, duration: '59%', year: 2013 }
	]
	return (
		<div>
			<Page page={downloads} />
		</div>
	)
}

export default Downloads
