// Merchant.js
// 商家

import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, ListView, RefreshControl, Dimensions, TouchableOpacity, TouchableHighlight, Animated, Easing } from 'react-native';

import FaceIcon from '../svg/FaceIcon';
import NavigatorHeader from '../common/NavigatorHeader';

import FilterHeaderView from '../views/FilterHeaderView';
import MerchantCell from '../Cell/MerchantCell';

import SplitView from '../common/SplitView';

import * as categories from "../data/categories";

import * as areas from "../data/areas";

const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const url_shoplist = "http://newapi.deyi.com/wedding/api/shoplist";
const url_request = {
  method: 'POST',
  body:JSON.stringify({
    "areaid": 0,
  	"catid": categories.defaultId,
  	"page": 1
  })
}

let resultsCache = {
  shoplist:[],
};

export default class Merchant extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2)=>r1 !== r2,
      isShowFilterView: false,
    });
    this.state = {
      dataSource: ds.cloneWithRows([{}, {}]),
      // transitionFromLeft
      fadeAnim: new Animated.Value(-screenWidth), // init opacity 0
      transitionFromRight: new Animated.Value(-screenWidth),
      isRefreshing: true,
    };
  }
  componentDidMount() {
    // Animated.timing(       // Uses easing functions
    //   this.state.fadeAnim, // The value to drive
    //   {
    //     toValue: 0,        // Target
    //     duration: 2000,    // Configuration
    //   },
    // ).start();             // Don't forget start!
    this._onRefresh();
  }

  _onRefresh = ()=>{
    this._getNetworkData();
  }

  _getNetworkData = ()=>{

    fetch(url_shoplist,url_request)
    .then((response)=>response.json())
    .then((responseData)=>{

      resultsCache.shoplist = responseData.data.shoplist;
      console.log("resultsCache.activity: "+resultsCache.shoplist);
      // ERROR!错误!
      // this.setState = {
      //   isRefreshing:false,
      //   dataSource:this.state.dataSource.cloneWithRows(["r 0", "r 1", "r2", "r3", "r4"]),
      // };
      this.setState({
        isRefreshing:false,
        dataSource:this.state.dataSource.cloneWithRows(resultsCache.shoplist),
      });
    })
    .catch((error)=>{
      resultsCache.shoplist = Array(2);
      this.setState({
        isRefreshing:false,
        dataSource:this.state.dataSource.cloneWithRows(resultsCache.shoplist),
      });
    })
  }

  _onPressLeft = ()=>{
    this.setState({
      isShowFilterView: !this.state.isShowFilterView,
    });
    this._showFilterView()
  }
  _onPressRight = ()=>{
    this.setState({
      isShowFilterView: !this.state.isShowFilterView,
    });
    this._showFilterView()
  }
  _showFilterView = ()=>{

    Animated.timing(       // Uses easing functions
      this.state.fadeAnim, // The value to drive
      {
        toValue: 0,        // Target
        duration: 300,    // Configuration
      },
    ).start();             // Don't forget start!
  }
  _hideFilterView = ()=>{
    Animated.timing(       // Uses easing functions
        this.state.fadeAnim, // The value to drive
        {
          toValue: -screenWidth,        // Target
          duration: 300,    // Configuration
        },
      ).start();             // Don't forget start!
  }

  _renderRow = (rowData)=>{
    return (<MerchantCell source={{uri:rowData.logo}} shopname={rowData.shopname} level={rowData.level} catname={rowData.catname} cases={rowData.cases} activities={rowData.activities}/>);
  }
  render() {
    return (
      <Animated.View style={[styles.container, ]}>
        <NavigatorHeader leftBarButtonItem={()=>(<Text numberOfLines={1} style={{textAlign:"center", alignItems:"center"}}>武汉</Text>)} title={"商家"}/>

          <FilterHeaderView
            leftButtonTitle={categories.defaultTitle}
            rightButtonTitle={areas.defaultTitle}
            onPressLeft={this._onPressLeft}
            onPressRight={this._onPressRight}
            />


        <ListView
          style={{position: 'absolute', top: 64+40, bottom: 0, left: 0, right: 0,}}
          enableEmptySections = {true}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          refreshControl={
            <RefreshControl
              refreshing = {this.state.isRefreshing}
              onRefresh={this._onRefresh}
              tintColor='red'
            />
          }
          />
        {/*
        <Animated.View style={[styles.mask, {left: this.state.fadeAnim }]}>
          <TouchableOpacity activeOpacity={1} onPress={this._onPressLeft} style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'green'}}>
            <View>
            </View>
          </TouchableOpacity>
        </Animated.View>
        */}
        <Animated.View style={[styles.mask, {left: this.state.fadeAnim }]}>
          <SplitView style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'green'}} />
        </Animated.View>



      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#2D2E3F',
    backgroundColor: 'white',
  },
  mask: {
    position: 'absolute',
    // left: -screenWidth,
    // right: screenWidth,
    top: 64+40,
    bottom: 0,
    width: screenWidth,
    backgroundColor: 'rgba(55, 55, 55, 0.5)',
  },
});
