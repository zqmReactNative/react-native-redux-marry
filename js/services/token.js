// token.js

export const getToken = ()=>{
	return global.token;
}

export const setToken = (token)=>{
	global.token = token;
}