import React from 'react'
import PropTypes from 'prop-types'


/** Поле ввода текста. */
export default function TextInput({ isSecure = false, ...props }) {
	return (
		<input
			type={isSecure ? 'password' : 'text'}
			{...props}
		/>
	)
}


TextInput.propTypes = {
	isSecure: PropTypes.bool,
	props: PropTypes.any,
}