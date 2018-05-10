import validate from '../structs'


// fake
const fakeResponseData = { token: 'h38fgw29did', username: 'Sessil', }


export default {
	state: {
		token: undefined,
		username: undefined,
	},
	reducers: {
		saveAuthData(state, payload) {
			return { ...state, ...payload, }
		},
		logout(state) {
			return { ...state, token: undefined, username: undefined, }
		},
	},
	effects: {
		async login(payload, rootState) {
			try {
				const responseData = await new Promise(resolve => setTimeout(() => resolve(fakeResponseData), 1500))	// fake request
					, data = validate.login(responseData)
				this.saveAuthData(data)
			}
			catch (error) {
				alert(error.message)	// fake handler
			}
	  	},
	},
}