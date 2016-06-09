// albumService.js

import * as requestService from './request';
import { getToken, setToken } from './token';

export function getXXXX(argument) {
	// body...
	let body = {

	};
	let url = `http://newapi.deyi.com/wedding/api/hotcases`;
	return requestService.get(url)
	.then(filterData)
	.then(data=>{

	})
}
