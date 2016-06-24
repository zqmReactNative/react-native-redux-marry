// homeService.js

import * as requestService from './request';
import { getToken, setToken } from './token';

export function getXXXX(argument) {
	// body...
	let body = {

	};
	let url = `http://newapi.deyi.com/wedding/api/index`;
	return requestService.get(url)
	.then((response)=>response.json())
	.then((responseData)=>{
		return responseData
	})
}
