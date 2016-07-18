import * as types from '../constants/ActionTypes';

const initialState = {
  isRefreshing: true,
  isLoading: true,
  isLoadMore: false,
  isError: false,
  activity: [{}, {}],
  shop: [{}, {}, {}, {}],
  cases: [{}, {}, {}, {}],
};

export default function home(state=initialState, action){
  console.log("homeReducer type : ", action.type);
  switch (action.type) {
    case types.Fetch_Home_Data:
      return {
        ...state,
        isRefreshing: true,
        isLoading: true,
        isLoadMore: false,
        isError: false,
      };
    case types.Fetch_Home_Data_Success:
      return {
        ...state,
        isRefreshing: false,
        isLoading: false,
        isLoadMore: false,
        isError: false,
        activity: action.activity,
        shop: action.shop,
        cases: action.cases,
      };
    case types.Fetch_Home_Data_Failure:
      return {
        ...state,
        isRefreshing: false,
        isLoading: false,
        isLoadMore: false,
        isError: true,
      };
		case types.Fetch_Home_Data_More:
			return {
				...state,
				isRefreshing: false,
				isLoading: true,
				isLoadMore: true,
        isError: false,
			};
    case types.Fetch_Home_Data_More_Success:
      return {
        ...state,
        isRefreshing: false,
        isLoading: false,
        isLoadMore: false,
        isError: false,
        activity: state.activity.concat(action.activity),
        shop: state.shop.concat(action.shop),
        cases: state.cases.concat(action.cases),
      };
    case types.Fetch_Home_Data_More_Failure:
      return {
        ...state,
        isRefreshing: false,
        isLoading: false,
        isLoadMore: false,
        isError: true,
        error: action.error,
      };
      break;
    default:
      return state;
  }
}
