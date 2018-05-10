import React from 'react'
import PropTypes from 'prop-types'


/** Кнопка подвтерждения формы. */
export default function SubmitButton({ children, }) {
	return (
		<button>{children}</button>
	)
}


SubmitButton.propTypes = {
	children: PropTypes.string.isRequired,
}