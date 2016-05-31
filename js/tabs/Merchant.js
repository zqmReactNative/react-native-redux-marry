// Merchant.js
// 商家

import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, ListView, Dimensions, TouchableOpacity, Animated, Easing } from 'react-native';

import FaceIcon from '../svg/FaceIcon';
import NavigatorHeader from '../common/NavigatorHeader';

import FilterHeaderView from '../views/FilterHeaderView';
import MerchantCell from '../Cell/MerchantCell';

import * as categories from "../data/categories";

import * as areas from "../data/areas";

const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class Merchant extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2)=>r1 !== r2,
      isShowFilterView: false,
    });
    this.state = {
      dataSource: ds.cloneWithRows([{}, {}]),
      fadeAnim: new Animated.Value(0), // init opacity 0
    };
  }
  componentDidMount() {
    Animated.timing(          // Uses easing functions
      this.state.fadeAnim,    // The value to drive
      {toValue: 1},           // Configuration
    ).start();                // Don't forget start!
  }
  _onPressLeft = ()=>{
    this.setState({
      isShowFilterView: !this.state.isShowFilterView,
    });
  }
  _onPressRight = ()=>{
    this.setState({
      isShowFilterView: !this.state.isShowFilterView,
    });
  }
  _renderRow = (rowData)=>{
    return (<MerchantCell />);
  }
  render() {
    return (
      <Animated.View style={[styles.container, {opacity: this.state.fadeAnim}]}>
        <NavigatorHeader title={"商家"}/>

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
          />
        { 
          this.state.isShowFilterView? 
            
            <TouchableOpacity onPress={this._onPressLeft} style={{position: 'absolute', top: 64+40, bottom: 0, width: screenWidth, left: 0, right: 0, backgroundColor: 'rgba(55, 55, 55, 0.5)'}}>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={this._onPressLeft} style={{position: 'absolute', top: 64+40, bottom: 0, left: -screenWidth, right: screenWidth, backgroundColor: 'rgba(230, 223, 224, 0.5)'}}>
            </TouchableOpacity>
            
        }

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
});
