// home.js
// Home Reducer

import * as types from "../constants/ActionTypes";
const initialState = {
	isRefreshing: true,
	activity: [],
	shop: [],
	cases: [],
};

export default function (state = initialState, action) {
	const { type, responseData } = action;
	switch (type)
	{
		case types.REQUEST_HOME_DATA:
			return {
				...state,
				...responseData
			};
		default:
			return state;
	}
}
