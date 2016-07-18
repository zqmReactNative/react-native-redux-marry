// album.js
// Album Reducer

import * as types from "../constants/ActionTypes";
const initialState = {
	isRefreshing: true,
  isLoading: true,
  isLoadMore: false,
	list: [],
};

export default function album(state = initialState, action) {
	console.log("album reducer");
	switch (action.type)
	{
		case types.Fetch_Album_Data:
			return {
				...state,
				isRefreshing: true,
			  isLoading: true,
			  isLoadMore: false,
			}
			break;
		case types.Fetch_Album_Data_Success:
			return {
				...state,
				isRefreshing: false,
				isLoading: false,
				isLoadMore: false,
				list: action.list,
			}
			break;
		case types.Fetch_Album_Data_Failure:
			return {
				...state,
				isRefreshing: false,
				isLoading: false,
				isLoadMore: false,
				error: action.error,
			}
			break;
		case types.Fetch_Album_Data_More:
			return {
				...state,
				isRefreshing: false,
			  isLoading: true,
			  isLoadMore: true,
				isError: false,
			}
			break;
		case types.Fetch_Album_Data_More_Success:
			return {
				...state,
				isRefreshing: false,
				isLoading: false,
				isLoadMore: false,
				isError: false,
				list: state.list.concat(action.list),
			}
			break;
		case types.Fetch_Album_Data_More_Failure:
			return {
				...state,
				isRefreshing: false,
				isLoading: false,
				isLoadMore: false,
				isError: true,
				error: action.error,
			}
			break;
		default:
			return state;
	}
}
