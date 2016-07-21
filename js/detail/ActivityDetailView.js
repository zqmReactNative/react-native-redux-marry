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
      <View style={styles.header}>
        <Img style={styles.image}/>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text>
            订婚宴，返200现金！
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image style={{width: 20, height: 20}}/>
            <Text>
              活动时间：2016.01.13-2016.12.31
            </Text>
          </View>
          <TouchableOpacity>
            <Text>
              进店看看
            </Text>
          </TouchableOpacity>
        </View>
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
const kScale = screenWidth / 375;
const kImageH = kScale * 230;
const kImageW = screenWidth;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    // height: 410,
    // width: screenWidth,
    // flex: 1,
    backgroundColor: 'red',
  },
  image: {
    height: kImageH,
    width: kImageW,
  },

})
