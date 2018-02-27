import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Picture1 from '../assets/hida.jpg';
import Picture2 from '../assets/shamuka.png';

class WorkPage extends Component {
	render() {
		return (
			<div className="container-fluid1">
				<h1 className="center-align pageHeader">Work Experience</h1>
				<hr />

				<Container>
					<br />
					<Row>
						<Col xs="12" sm="4">
							<img
								style={{ width: '100%' }}
								className="rounded-6 border-10 jumbo-center"
								src={Picture1}
							/>
							<br />
						</Col>
						<Col xs="12" sm="8">
							<h3> Student Web Developer </h3>
							<h6>October 2017 - Present</h6>
							<h4> Arizona State University - Herberger Institute </h4>
							<h6>
								<ul>
									<li>
										<p>
											Responsible for developing and updating web-based
											applications for ASU's design school.
										</p>
									</li>
									<li>
										<p>
											Document failures of custom developed solutions and taking
											corrective action as directed.
										</p>
									</li>
									<li>
										<p>
											Review, test and revise existing code to bring up to
											current standards.
										</p>
									</li>
								</ul>
								Environment: HTML5, CSS3, PHP, JavaScript, jQuery.
							</h6>
							<br />
							<br />
						</Col>
					</Row>
					<hr />
					<br />
					<Row>
						<Col xs="12" sm="4">
							<img
								style={{ width: '50%' }}
								className="rounded-6 border-10 jumbo-center"
								src={Picture2}
							/>
							<br />
						</Col>
						<Col xs="12" sm="8">
							<h3> Software Engineer Intern </h3>
							<h6>May 2016 - July 2016</h6>
							<h4> Shamuka Software Inc. </h4>
							<h6>
								<ul>
									<li>
										<p>
											Developed a Web App for scheduling, forum, and pricing for
											fitness studios based in San Francisco.
										</p>
									</li>
									<li>
										<p>
											Implemented the front-end components of the application
											using React.js Framework.
										</p>
									</li>
									<li>
										<p>
											Used REST API to parse objects from JSON hosted in an AWS
											environment.
										</p>
									</li>
									<li>
										<p>
											Maintained the states of various pages in the application
											using Redux JavaScript.
										</p>
									</li>
									<li>
										<p>
											Added authentication components using OAuth from social
											login APIs.
										</p>
									</li>
									<li>
										<p>
											Documented the software requirements specifications for
											the application.
										</p>
									</li>
								</ul>
								Environment: React, Redux, ES6, REST API, JSON, AWS, Babel,
								Webpack.
							</h6>
							<br />
							<br />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default WorkPage;
