// Merchant.js
// 商家

import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, ListView } from 'react-native';

import FaceIcon from '../svg/FaceIcon';
import NavigatorHeader from '../common/NavigatorHeader';

import FilterHeaderView from '../views/FilterHeaderView';

export default class Merchant extends Component {

  render() {
    return (
      <View style={styles.container}>
        <NavigatorHeader title={"商家"}/>
        {/*
        <View style={{flexDirection: 'row'}}>
          <FaceIcon faceType={6}/>
          <FaceIcon faceType={7}/>
          <FaceIcon faceType={8}/>
          <FaceIcon faceType={9}/>
          <FaceIcon faceType={10}/>
          <FaceIcon faceType={11}/>
        </View>
        */}
        <View>
          <FilterHeaderView />
        </View>


      </View>
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
