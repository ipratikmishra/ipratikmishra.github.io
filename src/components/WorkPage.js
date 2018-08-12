import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Picture1 from '../assets/hida.jpg';
import Picture2 from '../assets/shamuka.png';
import Picture3 from '../assets/Wlogo.png';
import Picture4 from '../assets/Whorz.png';

class WorkPage extends Component {
	render() {
		return (
			<div className="container-fluid1">
				<h1 className="center-align pageHeader">Work Experience</h1>
				<hr />

				<Container>
					<br />
					<Row>
						<Col xs="12" sm="5">
							<img
								style={{ width: '40%' }}
								className="rounded-6 border-10 jumbo-center"
								src={Picture3}
							/>
							<img
								style={{ width: '50%' }}
								className="rounded-6 border-10 jumbo-center"
								src={Picture4}
							/>
							<br />
						</Col>
						<Col xs="12" sm="7">
							<h3> Corporate Software Enginerring Intern </h3>
							<h6>June 2018 - August 2018</h6>
							<h4> Walgreens </h4>
							<h6>
								<ul>
									<li>
										<p>
											Member of the Rx Renewal Team undertaking world's largest
											pharmacy renewal program (150 million patients and 12
											million prescribers).
										</p>
									</li>
									<li>
										<p>
											Developed a REST-based microservice that invokes a
											Service-Broker through SOAP protocol and provides REST
											services to search patient prescriptions.
										</p>
									</li>
									<li>
										<p>
											Built a client application with Angular 5 that consumes
											REST services from the middleware to search the Rx
											records.
										</p>
									</li>
									<li>
										<p>
											Worked in a fast-paced Agile Scrum environment with daily
											stand-up meetings.
										</p>
									</li>
								</ul>
								Environment: Java, Angular, Spring Boot, Apache Kafka, REST,
								SOAP, Talend.
							</h6>
							<br />
							<br />
						</Col>
					</Row>
					<hr />
					<br />
					<Row>
						<Col xs="12" sm="5">
							<img
								style={{ width: '70%' }}
								className="rounded-6 border-10 jumbo-center"
								src={Picture1}
							/>
							<br />
						</Col>
						<Col xs="12" sm="7">
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
						<Col xs="12" sm="5">
							<img
								style={{ width: '50%' }}
								className="rounded-6 border-10 jumbo-center"
								src={Picture2}
							/>
							<br />
						</Col>
						<Col xs="12" sm="7">
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
