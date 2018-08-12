import React from 'react';
import { Link } from 'react-router';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true
		};
	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}
	render() {
		return (
			<div className="header1">
				<Navbar color="dark" dark>
					<NavbarBrand href="/" className="mr-auto">
						Home
					</NavbarBrand>
					<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
					<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav navbar>
							<NavItem>
								<Link
									onClick={this.toggleNavbar}
									style={{ textDecoration: 'none' }}
									to="/work"
								>
									<NavLink>Work</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link
									onClick={this.toggleNavbar}
									style={{ textDecoration: 'none' }}
									to="/projects"
								>
									<NavLink>Projects</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link
									onClick={this.toggleNavbar}
									style={{ textDecoration: 'none' }}
									to="/resume"
								>
									<NavLink>Resume</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link
									onClick={this.toggleNavbar}
									style={{ textDecoration: 'none' }}
									to="/contact"
								>
									<NavLink>Contact</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/ipratikmishra">
									Github
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
