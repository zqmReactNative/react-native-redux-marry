// merchant.js

import * as types from "../constants/ActionTypes";

import { kMerchantUrl } from '../constants/HttpUrls';

import * as categories from "../data/categories";

function requestMerchantData() {
  return {
    type: types.Fetch_Merchant_Data,
  };
}

function receiveMerchantData(data) {
  return {
    type: types.Fetch_Merchant_Data_Success,
    list: data.shoplist,
  };
}

function requestMerchantError(error) {
  return {
    type: types.Fetch_Merchant_Data_Failure,
    error: error,
  }
}


export function fetchMerchantData(page=1, areaid=0, catid=categories.defaultId) {
  console.log("fetchMerchantData");
  let url_request = {
    method: 'POST',
    body:JSON.stringify({
      "areaid": areaid,
    	"catid": catid,
    	"page": page
    })
  }
  return (dispatch, getState) => {
    console.log("dispatch(fetchMerchantData())");
    dispatch(requestMerchantData())
    return fetch(kMerchantUrl, url_request)
    .then(response => response.json())
    .then(json => {
      console.log("receiveMerchantData");
      return dispatch(receiveMerchantData(json.data))
    })
    .catch(error => {
      console.log("Merchant Request Error : ", error);
      return dispatch(requestMerchantError("商家数据请求失败."))
    })
    .done()
  }
}
