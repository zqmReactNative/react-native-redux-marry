import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import NavigatorHeader from '../common/NavigatorHeader';
import FaceIcon from '../svg/FaceIcon';
import Logo from '../svg/Logo';
import Channels from '../components/Channels';
export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <NavigatorHeader leftBarButtonItem={()=>(<Text numberOfLines={1} style={{textAlign:"center", alignItems:"center"}}>武汉武汉</Text>)} titleView={()=><Logo/>}/>
        <Channels style={{ backgroundColor: 'white'}} navigator={this.props.navigator}/>

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
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#2D2E3F',
    // backgroundColor: 'white',
  },
});
