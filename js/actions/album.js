// album.js
import * as types from "../constants/ActionTypes";

import { kAlbumUrl } from '../constants/HttpUrls';


function requestAlbumData() {
  return {
    type: types.Fetch_Album_Data,
  };
}

function receiveAlbumData(data) {
  return {
    type: types.Fetch_Album_Data_Success,
    list: data.list,
  };
}

function requestAlbumError(error) {
  return {
    type: types.Fetch_Album_Data_Failure,
    error: error,
  }
}


export function fetchAlbumData(page=1, areaid="", catid="123") {
  console.log("fetchAlbumData");
  let url_request = {
    method: 'POST',
    body:JSON.stringify({
      // "areaid": 0,
    	// "catid": categories.defaultId,
    	"page": 1
    })
  }
  return (dispatch, getState) => {
    console.log("dispatch(requestAlbumData())");
    dispatch(requestAlbumData())
    return fetch(kAlbumUrl)
    .then(response => response.json())
    .then(json => {
      console.log("receiveAlbumData");
      return dispatch(receiveAlbumData(json.data))
    })
    .catch(error => {
      console.log("Album Request Error : ", error);
      return dispatch(requestAlbumError("图库数据请求失败."))
    })
    .done()
  }
}
