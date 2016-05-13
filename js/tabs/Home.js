import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import FaceIcon from '../svg/FaceIcon';

export default class Home extends Component {

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

        <View style={{flexDirection: 'row'}}>
          <FaceIcon faceType={6}/>
          <FaceIcon faceType={7}/>
          <FaceIcon faceType={8}/>
          <FaceIcon faceType={9}/>
          <FaceIcon faceType={10}/>
          <FaceIcon faceType={11}/>
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
