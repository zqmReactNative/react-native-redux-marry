// Merchant.js
// 商家

import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, ListView, Dimensions, TouchableOpacity, TouchableHighlight, Animated, Easing } from 'react-native';

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
      // transitionFromLeft
      fadeAnim: new Animated.Value(-screenWidth), // init opacity 0
      transitionFromRight: new Animated.Value(-screenWidth),
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
    return (<MerchantCell />);
  }
  render() {
    return (
      <Animated.View style={[styles.container, ]}>
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
          
        <Animated.View style={[styles.mask, {left: this.state.fadeAnim }]}>
          <TouchableOpacity activeOpacity={1} onPress={this._onPressLeft} style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'green'}}>
            <View>
            </View>
          </TouchableOpacity>
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
