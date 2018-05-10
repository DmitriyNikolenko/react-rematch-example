import React from 'react'
import { Link, } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect, } from 'react-redux'


const Home = ({ username, isAuthorized, logout, }) =>
	isAuthorized ? (
		<p>
			<span>{`Здравствуйте, ${username}`}</span>
			<button onClick={logout}>Выйти</button>
		</p>
	) : (
		<p><Link to="/login">Войдите</Link> в приложение.</p>
	)


Home.propTypes = {
	username: PropTypes.string,
	isAuthorized: PropTypes.bool.isRequired,
}

export default connect(
	state => ({
		username: state.app.username,
		isAuthorized: !!state.app.token,
	}),
	dispatch => ({
		logout: dispatch.app.logout,
	})
)(Home)