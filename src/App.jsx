import React from 'react'
import { Provider, } from 'react-redux'
import store from './store'
import Router from './routes'


export default function App() {
	console.log('mounted')

	return (
		<Provider store={store}>
			<Router />
		</Provider>
	)
}