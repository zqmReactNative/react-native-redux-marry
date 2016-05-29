import React, { Component, PropTypes } from "react";

import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, TouchableHighlight } from "react-native";
import Img from '../common/Img';
const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class SectionHeaderView extends Component {
  static propTypes = {
    ...View.propTypes,
    title:PropTypes.string,
  };

  render(){
    return (
      <View style={[styles.header,{backgroundColor:'white'}, this.props.style]}>
        <View style={styles.headerBorder}>
        </View>
        <Text style={styles.headerText}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    paddingHorizontal:10,
    height:30,
    alignItems:"center",
    flexDirection:"row"
  },
  headerBorder:{
    height:14,
    width:5,
    marginRight:8,
    borderRadius:1,
    backgroundColor:"#ff5942"
  },
  headerText:{
    color:"#151515",
    fontSize:15
  },
});
