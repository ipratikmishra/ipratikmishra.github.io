import React from 'react';
import '../../styles/footer.css';
import { SocialIcon } from 'react-social-icons';

const Footer = () => (
	<div>
		<meta charset="utf-8" />
		<footer className="footer-distributed">
			<div className="footer-left" style={{ marginTop: '1em' }}>
				<h3>Pratik's Portfolio</h3>

				<p className="footer-company-name">
					Built with <span>❤️</span> in React &copy; 2018
				</p>
			</div>

			<div className="footer-center footer-text" style={{ marginTop: '1em' }}>
				<div>
					<span>🏠</span> : 1207 E 8th Street, Tempe, Arizona
				</div>

				<div>
					<span>📱</span> : (480) 442-7746
				</div>

				<div>
					<span>📧 :</span>
					<a href="mailto:pmishr14@asu.edu"> pmishr14@asu.edu </a>
				</div>
			</div>

			<div className="footer-right">
				<h3>Connect with me!</h3>
				<span>
					<SocialIcon url="http://github.com/ipratikmishra" />
				</span>
				&nbsp;&nbsp;
				<span>
					<SocialIcon url="http://linkedin.com/in/ipratikmishra" />
				</span>
				&nbsp;&nbsp;
				<span>
					<SocialIcon url="http://twitter.com/pratik_mishra" />
				</span>
				&nbsp;&nbsp;
				<span>
					<SocialIcon url="http://facebook.com/ipratikmishra" />
				</span>
				&nbsp;&nbsp;
				<span>
					<SocialIcon url="http://instagram.com/ipratikmishra" />
				</span>
			</div>
		</footer>
	</div>
);

export default Footer;
