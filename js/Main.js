require('../sass/main.scss');

import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import Header from './Header'
import Board from './Board'
import Skills from './Skills'

class Main extends React.Component {
	render() {
		return (
			<div>
				<div className="head-page">
					<div className="container">
					<Header></Header>
					<Board></Board>
					</div>
				</div>
				<Skills></Skills>
			</div>
		)
	}
}

export default Main