// Album.js
// 图库

import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, ListView, Dimensions, TouchableOpacity, TouchableHighlight, Animated, Easing } from 'react-native';

import FaceIcon from '../svg/FaceIcon';
import NavigatorHeader from '../common/NavigatorHeader';
import FilterHeaderView from '../views/FilterHeaderView';
import SplitView from '../common/SplitView';

const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// 图库默认数据请求URL
const url_album = "http://newapi.deyi.com/wedding/api/caselist";
// 排序URL
const url_sort = "http://newapi.deyi.com/wedding/api/casecondition";
const kHostAlbumUrl = url_album;

export default class Album extends Component {

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

  render() {
    return (
      <View style={styles.container}>
        <NavigatorHeader leftBarButtonItem={()=>(<Text numberOfLines={1} style={{textAlign:"center", alignItems:"center"}}>武汉</Text>)} title={"图库"}/>
        <View style={{flexDirection: 'row'}}>
          <FaceIcon faceType={0}/>
          <FaceIcon faceType={1}/>
          <FaceIcon faceType={2}/>
          <FaceIcon faceType={3}/>
          <FaceIcon faceType={4}/>
          <FaceIcon faceType={5}/>
        </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#2D2E3F',
  },
});
