// Merchant.js
// 商家

import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, ListView } from 'react-native';

import FaceIcon from '../svg/FaceIcon';
import NavigatorHeader from '../common/NavigatorHeader';

import FilterHeaderView from '../views/FilterHeaderView';
import MerchantCell from '../Cell/MerchantCell';

export default class Merchant extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2)=>r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows([{}, {}]),
    };
  }
  _renderRow = (rowData)=>{
    return (<MerchantCell />);
  }
  render() {
    return (
      <View style={styles.container}>
        <NavigatorHeader title={"商家"}/>
        <View>
          <FilterHeaderView />
        </View>

        <ListView
          style={{flex: 1}}
          enableEmptySections = {true}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          />


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
