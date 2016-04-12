require('../sass/app.scss');

import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import Header from './Header'
import SideBar from './SideBar'

class Main extends React.Component {
	render() {
		return (
			<div className="app">
				<Header></Header>
				<SideBar></SideBar>
			</div>
		)
	}
}

export default Main