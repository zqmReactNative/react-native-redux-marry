import * as types from '../constants/ActionTypes';
import {kHomeUrl} from '../constants/HttpUrls';

// MARK: - Action Creator

// 请求首页数据
function requestHomeData() {
  return {
    type: types.Fetch_Home_Data,
  }
}

// 接收到首页数据
function receiveHomeData(data) {
  console.log("receiveHomeData : ", data.activity)
  return {
    type: types.Fetch_Home_Data_Success,
    activity: data.activity,
    shop: data.shop,
    cases: data.cases,
  }
}

export function fetchHomeData() {
  console.log("fetchHomeData");
  return (dispatch, getState) => {
    console.log("dispatch(requestHomeData())");
    dispatch(requestHomeData())
    return fetch(kHomeUrl,{})
    .then(response => response.json())
    .then(json => {
      return dispatch(receiveHomeData(json.data))
    })
    .catch(error => {
      console.log("Home Request Error");
    })
    .done()
  }
}
