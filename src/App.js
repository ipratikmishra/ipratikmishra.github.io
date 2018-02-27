import React, { Component } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div>{this.props.children}</div>
				<Footer />
			</div>
		);
	}
}

export default App;
