// home.js
import * as ActionTypes from "../constants/ActionTypes";
const API_ROOT = "http://";

function receiveHomeData(json) {
	return {
		type: ActionTypes.REQUEST_HOME_DATA,
		data: json.data,
	}
}