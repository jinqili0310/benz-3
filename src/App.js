/*
 * @Author: Jinqi Li
 * @Date: 2020-08-13 04:39:53
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2020-12-01 02:00:27
 * @FilePath: /benz-3/src/App.js
 */
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import Home from './components/home';

function App() {
	return (
		<div className="navRoute">
			<HashRouter basename="/benz-3">
				<Switch>
					<Route path="/" exact component={Home} />
					<Redirect to="/" />
				</Switch>
			</HashRouter>
		</div>
	);
}

export default App;
