import React, { Component } from 'react';
import {
	Jumbotron,
	Button,
	Container,
	Row,
	Col,
	Progress,
	Badge
} from 'reactstrap';
import '../styles/homePage.css';
import MyPicture from '../assets/mypic.png';
import Picture2 from '../assets/awards.png';
import Picture1 from '../assets/work.JPG';
import Picture3 from '../assets/travel.jpg';
import Picture4 from '../assets/chicago.jpg';

class HomePage extends Component {
	render() {
		return (
			<div>
				<br />
				<Jumbotron style={{ marginBottom: '0px', marginTop: '1em' }}>
					<Row>
						<Col xs="12" sm="12" md="3">
							<img top width="80%" className="jumbo-center" src={MyPicture} />
						</Col>
						<Col xs="12" md="9">
							<h1 className="display-1">Pratik Mishra</h1>
							<p className="lead">
								Computer Science Graduate student at Arizona State University
							</p>
							<hr className="my-2" />
							<p>
								Feel free to explore around my webpage to learn more about me!
							</p>
							<p className="lead">
								<Button href="#readmetext" color="primary">
									Get to know me!
								</Button>
							</p>
						</Col>
					</Row>
				</Jumbotron>
				<div class="bg-img">
					<Container>
						<Row>
							<Col xs="12" sm="12" md="5">
								<br />
								<br />
							</Col>
							<Col xs="12" md="7">
								<div id="readmetext">
									<p>
										Hey there! I am Pratik. I live in Phoenix, Arizona where I
										currently attend Arizona State University for my Master's in
										Computer Science. I love buildiing softwares using the
										latest technologies. For the summer of 2018, I joined
										Walgreens as a Software Engineering Intern in Chicago, IL. I
										worked in an Agile (Scrum) environment and delivered
										according to application requirements for every story. I
										worked on a project that inlcuded developing a REST-based
										microservice using Spring Boot that could invoke a service
										broker using SOAP protocol and provides REST services to a
										front-end client, that I built using Angular 5. My
										experience with Web developement also includes working as a
										SDE intern with frameworks such as React.js and Redux.
										<br />
										I currently work as a Student Web Developer for the
										Herberger Institute for Design and the Arts at Arizona State
										University. My work involves developing multiple web
										applications using ASP.NET MVC, JavaScript, HTML5 and CSS3
										along with reviewing and revising existing code to bring
										them up to current standards.
									</p>
								</div>
							</Col>
						</Row>
					</Container>
				</div>

				<Jumbotron>
					<div className="jumbo-center">
						<Row>
							<Col xs="12" sm="6" md="4">
								<img
									style={{ width: '80%' }}
									className="rounded-circle img-thumbnail jumbo-center"
									src={Picture1}
								/>
								<p className="text-justify">
									<br />
									REPEAT 4[FD 60 RT 90]. In simple terms, on executing this
									command in LOGO programming, a miniature turtle maneuvers on
									the computer screen to form a square. With this piece of code,
									I forayed into the world of computer programming. That small
									computer screen became my oyster. Even today, when I develop
									an application the exhilaration of solving new problems has
									been a driving force and a constant in all my endeavors.
								</p>
							</Col>
							<Col xs="12" sm="6" md="4">
								<img
									style={{ width: '80%', maxHeight: '44%' }}
									className="rounded-circle img-thumbnail jumbo-center"
									src={Picture2}
								/>
								<br />
								<p className="text-justify">
									I have loved the idea of quizzing from my childhood. I have
									been awarded as regional finalist in tech quizzes like TCS IT
									Wiz consecutively two times and I have been a state finalist
									in DDM IT Quiz multiple times in a row. I have hosted tech
									quizzes in my undergraduare university and helped propel the
									atmosphere of tech quizzing in my college. I still love
									reading about science and technology in my free time.
								</p>
							</Col>
							<Col xs="12" sm="12" md="4">
								<img
									style={{ width: '80%', marginBottom: '0.6em' }}
									className="rounded-circle img-thumbnail jumbo-center"
									src={Picture3}
								/>
								<br />
								<p className="text-justify">
									“Travel makes one modest, you see what a tiny place you occupy
									in the world.” Traveling around and exploring new places has
									been one of my biggest desires. Also, I am up for singing to
									the 80's music any time of the day. I am big fan of The
									Beatles, Queen, Michael Jackson, Prince. I enjoy the art of
									photography and hope to learn about it professionally someday.
								</p>
							</Col>
						</Row>
					</div>
				</Jumbotron>
				<br />
				<Container>
					<h1 className="center-align">
						<Badge color="secondary">Technical Skills</Badge>
					</h1>
					<br />
					<Row>
						<Col xs="6">
							<div>
								<h6> Java </h6>
								<Progress animated value={90} />
								<hr />
								<h6> Python </h6>
								<Progress animated color="info" value={85} />
								<hr />
								<h6> C++ </h6>
								<Progress animated color="success" value={80} />
								<hr />
								<h6> PHP </h6>
								<Progress animated value={80} />
								<hr />
								<h6> Databases </h6>
								<Progress animated color="info" value={85} />
							</div>
						</Col>
						<Col xs="6">
							<div>
								<h6> JavaScript </h6>
								<Progress animated color="success" value={85} />
								<hr />
								<h6> HTML/CSS </h6>
								<Progress animated color="info" value={95} />
								<hr />
								<h6> React/Redux </h6>
								<Progress animated value={90} />
								<hr />
								<h6> Angular </h6>
								<Progress animated color="success" value={85} />
								<hr />
								<h6> Big Data </h6>
								<Progress animated color="info" value={75} />
								<br />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default HomePage;
