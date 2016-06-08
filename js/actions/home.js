// home.js
import {createAction} from 'redux-actions';
import * as ActionTypes from "../constants/ActionTypes";
const API_ROOT = "http://";

function receiveHomeData(json) {
	return {
		type: ActionTypes.REQUEST_HOME_DATA,
		data: json.data,
	}
}
export const getHomeData = createAction(ActionTypes.REQUEST_HOME_DATA, async()=>{
	return await /*Todo*/;
}, ()=>{
	return {
		sync: 'message'
	}
});