/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

const kViewHeight = 50
const kMarginTop = 30

export default class Hello extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
      rowHasChanged:(r1, r2)=> r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }
  _renderRow = (rowData)=>{
    return (
      <View>
      </View>
    );
  }

  _renderHeader = ()=>{
    return (
      <View style={{flex: 1}}>
        {/**/}
        <View style={{backgroundColor: 'green', height: kViewHeight, marginTop: kMarginTop}}>
        </View>

        {/**/}
        <View style={{backgroundColor: 'yellow', height: kViewHeight * 2, marginTop: kMarginTop}}>
        </View>

        {/**/}
        <View style={{backgroundColor: 'pink', height: kViewHeight * 4, marginTop: kMarginTop}}>
        </View>


      </View>
    );
  }

  render() {
    return (
      <ListView
        style={{backgroundColor: 'rgb(220, 220, 220)'}}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderHeader={this._renderHeader}
        enableEmptySections={true}/* 消除黄色警告 */
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

import Marry from './js/marry';
AppRegistry.registerComponent('Marry', () => Hello);
