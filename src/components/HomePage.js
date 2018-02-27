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
import MyPicture from '../assets/PratikMishra.jpg';
import Picture2 from '../assets/awards.png';
import Picture1 from '../assets/work.JPG';
import Picture3 from '../assets/travel.jpg';

class HomePage extends Component {
	render() {
		return (
			<div>
				<br />
				<Jumbotron>
					<h1 className="display-1">Pratik Mishra</h1>
					<p className="lead">
						Computer Science Graduate student at Arizona State University
					</p>
					<hr className="my-2" />
					<p>Feel free to explore around my webpage to learn more about me!</p>
					<p className="lead">
						<Button href="#readme" color="primary">
							Get to know me!
						</Button>
					</p>
				</Jumbotron>
				<Container>
					<Row>
						<Col xs="12" sm="12" md="4">
							<img
								top
								width="80%"
								className="rounded-6 border-10 img-thumbnail jumbo-center"
								src={MyPicture}
							/>
							<br />
							<br />
						</Col>
						<Col xs="12" md="8">
							<p id="readme">
								Hey there! I am Pratik. I live in Phoenix, Arizona where I
								currently attend Arizona State University for my Master's in
								Computer Science. I am looking forward to gaining industry
								experience by working as an intern in the field of Software
								Development. My past industry experience as an SDE intern has
								led me to work with the latest frameworks in the industry like
								React.js and Redux. The experience has bought a lot of insight
								into the finer details of a software project at a global level.
								<br />
								<br />
								I currently work as a Student Web Developer for the Herberger
								Institute for Design and the Arts at Arizona State University.
								My work involves developing multiple web applications using PHP,
								JavaScript, HTML5 and CSS3 along with reviewing and revising
								existing code to bring them up to current standards.
								<br />
								<br />
								I Intend to build a challenging career and work diligently in a
								dynamic and growth-oriented organization that provides exposure
								to new technologies and stimulates professional growth. I am
								passionate about the world of technology.
							</p>
							<br />
							<br />
						</Col>
					</Row>
				</Container>
				<br />
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
				<Container>
					<h1 className="center-align">
						<Badge color="secondary">Technical Skills</Badge>
					</h1>
					<br />
					<Row>
						<Col xs="6">
							<div>
								<h6> Java </h6>
								<Progress animated value={95} />
								<hr />
								<h6> Python </h6>
								<Progress animated color="info" value={90} />
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
								<Progress animated color="success" value={60} />
								<hr />
								<h6> Big Data </h6>
								<Progress animated color="info" value={70} />
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
