// MerchantDetail.js
// 商品详情

import React, { Component } from "react";
import { ScrollView, View, Text, Image, StyleSheet, ListView, RefreshControl, TouchableOpacity } from "react-native";

import NavigatorHeader from "../common/NavigatorHeader";
import DetailHeader from "../components/DetailHeader";
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from "react-native-scrollable-tab-view";
import MerchantDetailCell from '../Cell/MerchantDetailCell';

export default class MerchantDetail extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged:(r1, r2) => r1 !== r2,
    });
    this.state = {
      isRefreshing: false,
      dataSourceOfAlbum: ds.cloneWithRows([{}, {}, {}, {}]),
      dataSourceOfActivity: ds.cloneWithRows([{}, {}, {}, {}]),
    };
  }
  _renderAlbumRow = (rowData)=>{
    return (
      <MerchantDetailCell />
    );
  }
  _renderActivityRow = (rowData)=>{
    return (
      <MerchantDetailCell />
    );
  }
  _renderHeader = ()=>{
    return (
      <View>
        <DetailHeader />
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
        <NavigatorHeader title='水木年华' onBackClick={this.props.navigator.pop()}/>

        <ListView
          style={{marginBottom: 49}}
          refreshControl={
            <RefreshControl
              refreshing = {this.state.isRefreshing}
              // onRefresh={this._onRefresh}
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
