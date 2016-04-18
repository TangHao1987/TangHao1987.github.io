require('../sass/main.scss');

import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import Header from './Header'
import Board from './Board'

class Main extends React.Component {
	render() {
		return (
			<div className="head-page">
				<Header></Header>
				<Board></Board>
			</div>
		)
	}
}

export default Main