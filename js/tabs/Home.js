import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, ScrollView, RefreshControl } from 'react-native';

import NavigatorHeader from '../common/NavigatorHeader';
import FaceIcon from '../svg/FaceIcon';
import Logo from '../svg/Logo';
import TravelIconType from '../svg/TravelIcon';
import Channels from '../components/Channels';
import HourglassLoading from '../../HourglassLoading';
export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
    };
  }

  render() {
    console.log('render Home');
    return (
      <View style={styles.container}>
        <NavigatorHeader leftBarButtonItem={()=>(<Text numberOfLines={1} style={{textAlign:"center", alignItems:"center"}}>武汉武汉</Text>)} titleView={()=><Logo/>}/>
        <ScrollView 
          style={styles.scrollViewContainer}
          refreshControl={
            <RefreshControl
              refreshing = {this.state.isRefreshing}
              // onRefresh={this._onRefresh}
              tintColor='red'
            />
          }
        >
          
          <Channels style={{ backgroundColor: 'white'}} navigator={this.props.navigator}/>

          <View style={{flexDirection: 'row'}}>
            <FaceIcon faceType={6}/>
            <FaceIcon faceType={7}/>
            <FaceIcon faceType={8}/>
            <FaceIcon faceType={9}/>
            <FaceIcon faceType={10}/>
            <FaceIcon faceType={11}/>
          </View>

          <View style={{backgroundColor: '#ccc', flexDirection: 'row'}}>
            <TravelIconType iconType="TAXI" wy={60}/>
            <TravelIconType iconType="SHIP" wy={60}/>
            <TravelIconType iconType="BOAT" wy={60}/>
            <TravelIconType iconType="BUS" wy={60}/>
            <TravelIconType iconType="PLANE" wy={60}/>
            <TravelIconType iconType="BICYCLE" wy={60}/>
          </View>


        </ScrollView>
        


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f6f6f6',
    // backgroundColor: 'white',
  },
  scrollViewContainer: {
    flex: 1
  },
});
