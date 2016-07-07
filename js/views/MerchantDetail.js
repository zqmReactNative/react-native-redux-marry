// MerchantDetail.js
// 商品详情

import React, { Component } from "react";
import { InteractionManager, ScrollView, View, Text, Image, StyleSheet, ListView, RefreshControl, TouchableOpacity } from "react-native";

import NavigatorHeader from "../common/NavigatorHeader";
import DetailHeader from "../components/DetailHeader";
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from "react-native-scrollable-tab-view";
import MerchantDetailCell from '../Cell/MerchantDetailCell';
import AlbumCell from '../Cell/AlbumCell';
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
  albumlist: [],
  activitylist: [],
};

export default class MerchantDetail extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged:(r1, r2) => r1 !== r2,
    });
    this.state = {
      shopid: "",
      shopname: "",
      source: null,
      isRefreshing: true,
      renderPlaceholderOnly: true,
      dataSourceOfAlbum: ds.cloneWithRows([{}, {}, {}, {}]),
      dataSourceOfActivity: ds.cloneWithRows([{}, {}, {}, {}]),
    };
  }
  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        renderPlaceholderOnly: false,
        shopid: this.props.shopid,
        shopname: this.props.shopname,
        source: this.props.source,
      });
      this._onRefresh();
    });
    // this._getNetworkData()
  }
  _onRefresh = ()=> {
    this._getNetworkData()
    // this.setState({
    //   isRefreshing:false
    // })
    console.log(this.state.isRefreshing);
  }
  _getNetworkData = ()=>{

    fetch(url_album,url_request)
    .then((response)=>response.json())
    .then((responseData)=>{

      resultsCache.albumlist = responseData.data.list;
      console.log("resultsCache.albumlist: "+resultsCache.albumlist);

      this.setState({
        isRefreshing:false,
        dataSourceOfAlbum:this.state.dataSourceOfAlbum.cloneWithRows(resultsCache.albumlist),
      });
    })
    .catch((error)=>{
      resultsCache.albumlist = Array(2);
      this.setState({
        isRefreshing:false,
        dataSourceOfAlbum:this.state.dataSourceOfAlbum.cloneWithRows(resultsCache.albumlist),
      });
    })
  }
  _renderAlbumRow = (rowData)=>{
    return (<AlbumCell cellType="tall" title={rowData.subject} detailTitle={rowData.shopname} source={{uri:rowData.cover}}/>);
  }
  _renderActivityRow = (rowData)=>{
    return (
      <MerchantDetailCell />
    );
  }
  _renderHeader = ()=>{
    return (
      <View>
        <DetailHeader
          source={this.state.source}
          title={this.state.shopname}/>
        <View style={{height: 10}}/>
      </View>
    );
  }
  _renderSeparator = (sectionID, rowID, adjacentRowHighlighted)=>{
    return (<View key={sectionID+rowID} style={{backgroundColor: 'rgb(247, 247, 247)', height: 10}}></View>);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'rgb(247, 247, 247)'}}>
        <NavigatorHeader title={this.state.shopname} onBackClick={this.props.navigator.pop}/>

        <ListView
          contentContainerStyle={{justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap'}}
          style={{marginBottom: 49}}
          refreshControl={
            <RefreshControl
              refreshing = {this.state.isRefreshing}
              onRefresh={this._onRefresh}
              tintColor='red'
            />
          }
          dataSource={this.state.dataSourceOfAlbum}
          renderRow={this._renderAlbumRow}
          renderSectionHeader={()=><View style={{backgroundColor: 'white', height: 40, borderBottomWidth: 1, borderBottomColor: '#ff5942'}}/>}
          renderHeader={this._renderHeader}
          renderSeparator={this._renderSeparator}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>免费咨询</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    height: 49,
    backgroundColor: '#ff5942',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },

});
