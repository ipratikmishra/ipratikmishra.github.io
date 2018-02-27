import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import routes from './routes';
import $ from 'jquery';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDom.render(
	<Router
		onUpdate={() => window.scrollTo(0, 0)}
		history={hashHistory}
		routes={routes}
	>
		<Route path="/" />
	</Router>,
	document.getElementById('root')
);
