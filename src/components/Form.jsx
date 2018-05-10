import React from 'react'
import PropTypes from 'prop-types'


/** Неконтролируемая форма. */
export default class Form extends React.PureComponent {
	static propTypes = {
		children: PropTypes.any,
	}

	ref = null

	saveRef = ref => {
		this.ref = ref
	}

	handleSubmit = event => {
		event.preventDefault()

		let formData = {}

		for (let { name, value, } of this.ref.elements) {
			if (name)
				formData[name] = value
		}
		this.props.onSubmit(formData)
	}

	render = () => (
		<form
			ref={ this.saveRef }
			onSubmit={ this.handleSubmit }
		>
			{this.props.children}
		</form>
	)
}