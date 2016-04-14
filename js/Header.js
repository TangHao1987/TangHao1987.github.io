import React from 'react'

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="container header-container">
					<nav role="navigation">
						<ul className="header-nav">
							<li><a herf="#">Skills</a></li>
							<li><a herf="#">Experiences</a></li>
							<li><a herf="#">Profolios</a></li>
							<li><a herf="#">Educations</a></li>
						</ul>
					</nav>
				</div>
			</div>
		)
	}
}

export default Header