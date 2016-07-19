import React, { Component, PropTypes } from "react";

import { View, Text, Image, StyleSheet, Dimensions, ListView, RefreshControl, TouchableOpacity, TouchableHighlight } from "react-native";
import Img from '../common/Img';
const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

import NavigatorHeader from '../common/NavigatorHeader';

export default class ActivityDetailView extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }
  _renderHeader = () => {
    return (
      <View>
        <Img />
      </View>
    );
  }
  _onRefresh = () => {
    // TODO:
  }
  render() {
    return (
      <View style={styles.container}>

        <NavigatorHeader leftBarButtonItem={()=>(<Text numberOfLines={1} style={{textAlign:"center", alignItems:"center"}}>{"<"}</Text>)} title={"活动详情"}/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData)=><View></View>}
          enableEmptySections = {true}
          renderHeader={this._renderHeader}
          refreshControl={
            <RefreshControl
              refreshing = {true}
              onRefresh={this._onRefresh}
              tintColor='red'
            />
          }
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

})
