import React from 'react';
import '../styles/resume.css';

const Resume = () => (
	<div>
		<header id="info">
			<h1>Pratik Mishra</h1>
			<span>
				1207 E 8th Street &bull; (480)442-7746 &bull; pmishr14@asu.edu
			</span>
		</header>
		<section>
			<h2>Objective</h2>
			<span>
				Computer Science graduate student seeking internship opportunities in
				the field of Software Engineering for Summer 2018.
				<br />
			</span>
			<br />
			<section id="education">
				<h2>Education</h2>
				<div className="edtable">
					<div className="tablerow">
						<span className="jobtitle">
							<strong>Computer Science, Master's</strong>
						</span>
						<span className="right">
							<strong>May 2019</strong>
						</span>
					</div>
					<div className="tablerow">
						<span>Arizona State University, Tempe</span>
						<span className="right">
							<strong>GPA: 3.56/4.0</strong>
						</span>
					</div>
				</div>

				<div className="edtable">
					<div className="tablerow">
						<span className="jobtitle">
							<strong>Information Technology, Bachelor of Technology</strong>
						</span>
						<span className="right">
							<strong>July 2017</strong>
						</span>
					</div>
					<div className="tablerow">
						<span>
							International Institute of Infomration Technology, Bhubanneswar
						</span>
						<span className="right">
							<strong>GPA: 7.83/10.0</strong>
						</span>
					</div>
				</div>
			</section>
		</section>
		<section id="employment">
			<h2>Employment</h2>
			<section>
				<div className="jobtable">
					<div className="tablerow">
						<span className="jobtitle">
							<strong>Software Engineering Intern</strong>
						</span>
						<span className="right">June 2018 - August 2018</span>
					</div>
					<div className="tablerow">
						<span>Walgreens</span>
						<span className="right">Chicago, IL</span>
					</div>
				</div>
				<ul>
					<li>
						Member of the Rx Renewal Team undertaking world's largest pharmacy
						renewal program (150 million patients and 12 million prescribers).
					</li>
					<li>
						Developed a REST-based microservice that invokes a Service-Broker
						through SOAP protocol and provides REST services to search patient
						prescriptions.
					</li>
					<li>
						Built a client application with Angular 5 that consumes REST
						services from the middleware to search the Rx records.
					</li>
					<li>
						Worked in a fast-paced Agile Scrum environment with daily stand-up
						meetings.
					</li>
				</ul>
			</section>
			<section>
				<div className="jobtable">
					<div className="tablerow">
						<span className="jobtitle">
							<strong>Student Web Developer</strong>
						</span>
						<span className="right">October 2017 - Present</span>
					</div>
					<div className="tablerow">
						<span>Herberger Institute for Design and the Arts, ASU</span>
						<span className="right">Tempe, AZ</span>
					</div>
				</div>
				<ul>
					<li>
						Responsible for developing and updating web-based applications for
						ASU's design school.
					</li>
					<li>
						Document failures of custom developed solutions and taking
						corrective action as directed.
					</li>
					<li>
						Review, test and revise existing code to bring up to current
						standards.
					</li>
				</ul>
			</section>
			<section>
				<div className="jobtable">
					<div className="tablerow">
						<span className="jobtitle">
							<strong>Software Engineer Intern</strong>
						</span>
						<span className="right">May 2016 - July 2016</span>
					</div>
					<div className="tablerow">
						<span>Shamuka Software Inc.</span>
						<span className="right">San Francisco, CA</span>
					</div>
				</div>
				<ul>
					<li>
						Developed a Web App for scheduling, forum, and pricing for fitness
						studios based in San Francisco.
					</li>
					<li>
						Implemented the front-end components of the application using
						React.js Framework.
					</li>
					<li>
						Used REST API to parse objects from JSON hosted in an AWS
						environment.
					</li>
					<li>
						Maintained the states of various pages in the application using
						Redux JavaScript.
					</li>
					<li>
						Added authentication components using OAuth from social login APIs.
					</li>
					<li>
						Documented the software requirements specifications for the
						application.
					</li>
				</ul>
			</section>
		</section>
		<section>
			<h2>Technical Skills</h2>
			<div className="table-responsive" style={{ width: '80%' }}>
				<table className="table table-bordered table-striped">
					<tbody>
						<tr>
							<td>Programming</td>
							<td className="col-md-6">Java, Python, C++</td>
						</tr>
						<tr>
							<td>Web/Scripting</td>
							<td>JavaScript, HTML5, CSS3, PHP, AJAX, XML, REST Services</td>
						</tr>
						<tr>
							<td>Frameworks</td>
							<td>React, Redux, Node.js, Spring Boot, Bootstrap, Android</td>
						</tr>
						<tr>
							<td>Big Data Technologies</td>
							<td>Map Reduce, Hadoop, Spark, Kafka</td>
						</tr>
						<tr>
							<td>Database</td>
							<td>MySQL, Oracle 11g, MongoDB, PostgreSQL</td>
						</tr>
						<tr>
							<td>Tools</td>
							<td>
								Git, Bash, Eclipse, Talend, Maven, VS Code, Android Studio,
								OpenStack
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
		<section id="online">
			<h2>Projects</h2>
			<dl clasName="row">
				<dt>
					Identifying Hotspots in New York using Distributed Database (Fall
					2017)
				</dt>
				<dd>
					Application of spatial statistics to spatiotemporal big data to
					identify hotspots of taxis around New York city using Apache Spark and
					Hadoop.
					<br />
					Technology: Java, Scala, Spark, Hadoop.
				</dd>
			</dl>
			<div className="pagebreak" />
			<dl clasName="row">
				<dt>BraiNet - Privacy management Android App (Fall 2017)</dt>
				<dd>
					Android application that uses brain signals through a brain sensor for
					authentication in smartphones. Similar to Face ID in iPhone X but
					instead of using face image the application uses brain signals.
					<br />
					Technology: Android, Java, SQLite, XML. Github:
					<br />
					https://github.com/ipratikmishra/BraiNet
				</dd>
			</dl>
			<div className="pagebreak" />
			<dl clasName="row">
				<dt>PatientTracker Android App (Spring 2017) </dt>
				<dd>
					Developed a health management android application to track patient
					health records like various illnesses, medicines prescribed and other
					vital records that can be used by a doctor to perform diagnostics.
					<br />
					Technology: Java, SQLite, AJAX, DropBox API, XML.
					<br />
					Github: https://github.com/ipratikmishra/PatientTracker
				</dd>
			</dl>
			<div className="pagebreak" />
			<dl clasName="row">
				<dt>Faculty Management Website (Spring 2016) </dt>
				<dd>
					Developed a dynamic website for faculty registration and content
					management using JavaScript and PHP. Queried a MySQL database to
					generate information to be shown in the website.
					<br />
					Technology: HTML5, CSS3, PHP, JavaScript, MySQL, Bootstrap.
					<br />Github: https://github.com/ipratikmishra/iiit-faculty-managament
				</dd>
			</dl>
		</section>
	</div>
);

export default Resume;
