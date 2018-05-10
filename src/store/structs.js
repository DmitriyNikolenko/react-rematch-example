import { struct, } from 'superstruct'


export default {
	login: struct({
		token: 'string',
		username: 'string',
	}),

}