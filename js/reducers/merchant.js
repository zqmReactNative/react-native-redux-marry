// merchant.js
// Merchant Reducer

import * as types from "../constants/ActionTypes";
const initialState = {
	isChangedOption: true, // 筛选条件
	isRefreshing: true,
  isLoading: true,
  isLoadMore: false,
	isError: false,
	list: [],
};

export default function merchant(state = initialState, action) {
	console.log("merchant reducer");
	switch (action.type)
	{
		case types.Fetch_Merchant_Data:
			return {
				...state,
				isRefreshing: true,
			  isLoading: true,
			  isLoadMore: false,
				isError: false,
			}
			break;
		case types.Fetch_Merchant_Data_Success:
			return {
				...state,
				isChangedOption: false,
				isRefreshing: false,
				isLoading: false,
				isLoadMore: false,
				isError: false,
				list: action.list,
			}
			break;
		case types.Fetch_Merchant_Data_Failure:
			return {
				...state,
				isChangedOption: true,
				isRefreshing: false,
				isLoading: false,
				isLoadMore: false,
				isError: true,
				error: action.error,
			}
			break;
		case types.Fetch_Merchant_Data_More:
			return {
				...state,
				isChangedOption: false,
				isRefreshing: false,
			  isLoading: true,
			  isLoadMore: true,
				isError: false,
			}
			break;
		case types.Fetch_Merchant_Data_More_Success:
			return {
				...state,
				isChangedOption: false,
				isRefreshing: false,
				isLoading: false,
				isLoadMore: false,
				isError: false,
				list: state.list.concat(action.list),
			}
			break;
		case types.Fetch_Merchant_Data_More_Failure:
			return {
				...state,
				isChangedOption: true,
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
