import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import WorkPage from './components/WorkPage';
import ResumePage from './components/ResumePage';
import ContactPage from './components/ContactPage'; //eslint-disable-line import/no-named-as-default

export default (
	<Route path={`${process.env.PUBLIC_URL}/`} component={App}>
		<IndexRoute component={HomePage} />
		<Route
			path={`${process.env.PUBLIC_URL}/projects`}
			component={ProjectsPage}
		/>
		<Route path={`${process.env.PUBLIC_URL}/work`} component={WorkPage} />
		<Route path={`${process.env.PUBLIC_URL}/resume`} component={ResumePage} />
		<Route path={`${process.env.PUBLIC_URL}/contact`} component={ContactPage} />
	</Route>
);
