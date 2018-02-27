import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Picture1 from '../assets/patient.png';
import Picture2 from '../assets/dds.png';
import Picture3 from '../assets/brainet.png';
import Picture4 from '../assets/fms.png';
import Git from '../assets/git.png';

class ProjectsPage extends Component {
	render() {
		return (
			<div className="container-fluid1 headerPage">
				<h1 className="center-align pageHeader">Projects</h1>
				<hr />

				<Container>
					<Row>
						<Col xs="12" sm="5">
							<img
								style={{ height: '300px', width: '200px' }}
								className="rounded-6 border-10 img-thumbnail jumbo-center"
								src={Picture1}
							/>
						</Col>
						<Col xs="12" sm="7">
							<br />
							<br />
							<h2> PatientTracker Android App</h2>
							<h4>
								<i> Java / SQLite / AJAX / Drobox API / XML </i>
							</h4>
							<h6>
								Developed a health management android application to track
								patient health records like various illnesses, medicines
								prescribed and other vital records that can be used by a doctor
								to perform diagnostics.
							</h6>
							<br />
							<br />
							<img style={{ width: '7%' }} src={Git} />
							&nbsp;
							<a
								style={{ color: 'lightgreen', width: '93%' }}
								href="https://github.com/ipratikmishra/PatientTracker"
							>
								https://github.com/ipratikmishra/PatientTracker
							</a>
						</Col>
					</Row>
					<hr />
					<Row>
						<Col xs="12" sm="5">
							<img
								style={{ height: '300px', width: '500px' }}
								className="rounded-6 border-10 img-thumbnail jumbo-center"
								src={Picture2}
							/>
						</Col>
						<Col xs="12" sm="7">
							<br />
							<br />
							<h2>
								Identifying Hotspots in New York using Distributed Database
							</h2>
							<h4>
								<i> Java / Scala / Spark / Hadoop </i>
							</h4>
							<h6>
								Application of spatial statistics to spatiotemporal big data to
								identify hotspots of taxis around New York city using Apache
								Spark and Hadoop.
							</h6>
							<br />
							<br />
						</Col>
					</Row>
					<hr />
					<Row>
						<Col xs="12" sm="5">
							<img
								style={{ height: '300px', width: '200px' }}
								className="rounded-6 border-10 img-thumbnail jumbo-center"
								src={Picture3}
							/>
						</Col>
						<Col xs="12" sm="7">
							<br />
							<br />
							<h2> BraiNet - Privacy management Android App</h2>
							<h4>
								<i> Android / Java / SQLite / XML </i>{' '}
							</h4>
							<h6>
								Android application that uses brain signals through a brain
								sensor for authentication in smartphones. Similar to Face ID in
								iPhone X but instead of using face image the application uses
								brain signals.
							</h6>
							<br />
							<br />
							<img style={{ width: '7%' }} src={Git} />
							&nbsp;
							<a
								style={{ color: 'lightgreen', width: '93%' }}
								href="https://github.com/ipratikmishra/BraiNet"
							>
								https://github.com/ipratikmishra/BraiNet
							</a>
						</Col>
					</Row>
					<hr />
					<Row>
						<Col xs="12" sm="5">
							<img
								style={{ height: '250px', width: '500px' }}
								className="rounded-6 border-10 img-thumbnail jumbo-center"
								src={Picture4}
							/>
						</Col>
						<Col xs="12" sm="7">
							<br />
							<br />
							<h2> Faculty Management Website </h2>
							<h4>
								<i> HTML5 / CSS3 / PHP / JavaScript / MySQL / Bootstrap </i>
							</h4>
							<h6>
								Developed a dynamic website for faculty registration and content
								management using JavaScript and PHP. Queried a MySQL database to
								generate information to be shown in the website.
							</h6>
							<br />
							<br />
							<img style={{ width: '7%' }} src={Git} />
							&nbsp;
							<a
								style={{ color: 'lightgreen', width: '93%' }}
								href="https://github.com/ipratikmishra/iiit-faculty-managament"
							>
								https://github.com/ipratikmishra/iiit-faculty-managament
							</a>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default ProjectsPage;
