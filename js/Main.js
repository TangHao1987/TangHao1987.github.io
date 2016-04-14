require('../css/main.css');

import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import Header from './Header'
import Board from './Board'

class Main extends React.Component {
	render() {
		return (
			<div className="app">
				<Header></Header>
				<Board></Board>
			</div>
		)
	}
}

export default Main