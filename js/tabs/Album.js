// Album.js
// 图库

import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import FaceIcon from '../svg/FaceIcon';

export default class Album extends Component {

  render() {
    return (
      <View style={styles.container}>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D2E3F',
  },
});
