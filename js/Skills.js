import React from 'react'

class Skills extends React.Component {
	render() {
		return (
			<section className="">
				<div className="container">
					<div className="row">
						<h2>My Skills</h2>
					</div>
					<div className="row">
						<ul id="skill">
							<li><span className="bar-box bar java"></span><h3>java</h3></li>
							<li><span className="bar-box bar javascript"></span><h3>javascript</h3></li>
							<li><span className="bar-box bar php"></span><h3>php</h3></li>
							<li><span className="bar-box bar html-css"></span><h3>Html & Css</h3></li>
							<li><span className="bar-box bar graphic-design"></span><h3>graphic design</h3></li>
						</ul>
					</div>
				</div>
			</section>
		)
	}
}

export default Skills