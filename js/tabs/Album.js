// Album.js
// 图库

import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, ListView, RefreshControl, Dimensions, TouchableOpacity, TouchableHighlight, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';

import FaceIcon from '../svg/FaceIcon';
import NavigatorHeader from '../common/NavigatorHeader';
import FilterHeaderView from '../views/FilterHeaderView';
import SplitView from '../common/SplitView';
import AlbumCell from '../Cell/AlbumCell';
import Checker from '../common/Checker';

import { fetchAlbumData } from '../actions/album';

import * as categories from "../data/categories";
import * as sortBys from "../data/sortBys";

const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// 图库默认数据请求URL
const url_album = "http://newapi.deyi.com/wedding/api/caselist";
// 排序URL
const url_sort = "http://newapi.deyi.com/wedding/api/casecondition";
const kHostAlbumUrl = url_album;
const url_request = {
  method: 'POST',
  body:JSON.stringify({
    // "areaid": 0,
  	// "catid": categories.defaultId,
  	"page": 1
  })
}

let resultsCache = {
  albumlist:[],
};

class Album extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2)=>r1 !== r2
    });
    this.state = {
      isShowFilterView: false,
      isRefreshing: true,
      // dataSource: ds.cloneWithRows([{}, {}]),
      // transitionFromLeft
      fadeAnim: new Animated.Value(-screenWidth), // init opacity 0
      transitionFromRight: new Animated.Value(-screenWidth),
    };
    this.dataSource = ds;
  }

  componentDidMount() {
    this._onRefresh();
  }

  _onRefresh = ()=>{
    // this._getNetworkData();
    const { dispatch } = this.props;
    dispatch(fetchAlbumData());
  }

  _getNetworkData = ()=>{

    fetch(url_album,url_request)
    .then((response)=>response.json())
    .then((responseData)=>{

      resultsCache.albumlist = responseData.data.list;
      console.log("resultsCache.albumlist: "+resultsCache.albumlist);
      // ERROR!错误!
      // this.setState = {
      //   isRefreshing:false,
      //   dataSource:this.state.dataSource.cloneWithRows(["r 0", "r 1", "r2", "r3", "r4"]),
      // };
      this.setState({
        isRefreshing:false,
        dataSource:this.state.dataSource.cloneWithRows(resultsCache.albumlist),
      });
    })
    .catch((error)=>{
      resultsCache.albumlist = Array(2);
      this.setState({
        isRefreshing:false,
        dataSource:this.state.dataSource.cloneWithRows(resultsCache.albumlist),
      });
    })
  }

  _renderRow = (rowData)=> {
    return (<AlbumCell cellType="tall" title={rowData.subject} detailTitle={rowData.shopname} source={{uri:rowData.cover}}/>);
  }

  render() {
    console.log("render Album");
    const {album} = this.props;
    var contentView;

    if (album.isError) {
      contentView = <Checker state={0}/>
    }
    else if (album.isChangedOption) {
      contentView = <Checker state={-1}/>
    }
    else if (album.list.length === 0) {
      contentView = <Checker state={-2}/>
    }
    else {
      contentView =
      <ListView
        style={{position: 'absolute', top: 64+40, bottom: 0, left: 0, right: 0,}}
        contentContainerStyle={{justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap'}}
        enableEmptySections = {true}
        dataSource={this.dataSource.cloneWithRows(album.list)}
        renderRow={this._renderRow}
        refreshControl={
          <RefreshControl
            refreshing = {album.isRefreshing}
            onRefresh={this._onRefresh}
            tintColor='red'
          />
        }
        />
    }
    return (
      <View style={styles.container}>
        <NavigatorHeader leftBarButtonItem={()=>(<Text numberOfLines={1} style={{textAlign:"center", alignItems:"center"}}>武汉</Text>)} title={"图库"}/>
        <FilterHeaderView
          leftButtonTitle={categories.defaultTitle}
          rightButtonTitle={sortBys.defaultTitle}
          />
        {contentView}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2D2E3F',
    backgroundColor: 'white',
  },
});


function mapStateToProps(state) {
  const { album } = state;
  return {
    album
  }
}

export default connect(mapStateToProps)(Album)
