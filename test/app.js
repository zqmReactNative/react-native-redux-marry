import React, { Component } from 'react'

import ReactNative, {
  View,
  ListView,
  Text,
  Image,
  StyleSheet
} from 'react-native'

export default class App extends Component {
  _renderRow = (rowData)=>{
    return (
      <View>
        <Text>
          {rowData.title}
        </Text>
      </View>
    );
  }
  render() {
    <View>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        />
    </View>
  }
}
