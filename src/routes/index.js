
import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import Home from './Home'
import Login from './Login'


export default function Routing() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/login" component={Login} />
				</Switch>
			</div>
		</Router>
	)
}