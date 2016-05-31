// Merchant.js
// 商家

import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, ListView } from 'react-native';

import FaceIcon from '../svg/FaceIcon';
import NavigatorHeader from '../common/NavigatorHeader';

import FilterHeaderView from '../views/FilterHeaderView';
import MerchantCell from '../Cell/MerchantCell';

import * as categories from "../data/categories";

import * as areas from "../data/areas";

export default class Merchant extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2)=>r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows([{}, {}, {}, {}, {}, {}, {}, {}, {}]),
    };
  }
  _renderRow = (rowData)=>{
    return (<MerchantCell />);
  }
  render() {
    return (
      <View style={styles.container}>
        <NavigatorHeader title={"商家"}/>

          <FilterHeaderView
            leftButtonTitle={categories.defaultTitle}
            rightButtonTitle={areas.defaultTitle}
            onPressLeft={()=>{alert("left")}}
            onPressRight={()=>{alert("right")}}
            />


        <ListView
          style={{position: 'absolute', top: 64+40, bottom: 0, left: 0, right: 0}}
          enableEmptySections = {true}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          />
        {/*
        <View style={{position: 'absolute', top: 64+40, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(230, 223, 224, 0.5)'}}>
        </View>
        */}

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
