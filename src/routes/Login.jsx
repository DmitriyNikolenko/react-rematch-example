import React from 'react'
import PropTypes from 'prop-types'
import { connect, } from 'react-redux'
import { Redirect, } from 'react-router'
import { TextInput, SubmitButton, Form, } from '../components'


const Login = ({ submitAuth, isAuthorized, }) =>
	isAuthorized ? (
		<Redirect to="/" />
	) : (
		<Form onSubmit={ submitAuth }>
			<TextInput name="login" />
			<TextInput name="password" isSecure />
			<SubmitButton>Login</SubmitButton>
		</Form>
	)

Login.propTypes = {
	submitAuth: PropTypes.func.isRequired,
	isAuthorized: PropTypes.bool.isRequired,
}

export default connect(
	state => ({
		isAuthorized: !!state.app.token,
	}),
	dispatch => ({
		submitAuth: (data) => dispatch.app.login(data),
	})
)(Login)