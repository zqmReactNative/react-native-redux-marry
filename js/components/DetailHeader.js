// DetailHeader.js
// 详情页头部视图

import React, { Component } from "react";

import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Stars from '../svg/Stars';
import Img from '../common/Img';

const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class DetailHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Img style={styles.image} source={require('../../images/404.png')}/>
      	<View style={styles.rightContainer}>
	      	<Text numberOfLines={1} style={styles.title}>花漾婚礼会馆</Text>
	      	<Stars count={3}/>
	      	<Text numberOfLines={2} style={styles.detailTitle}>武汉市江岸区沿江大道江景大厦A座21楼武汉市江岸区沿江大道江景大厦A座21楼</Text>
      	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		height:112,
		backgroundColor: 'white',
		flexDirection: 'row',
		// alignItems: 'center',
		padding: 16,
	},
	image: {
		width: 80,
		height: 80,
		// backgroundColor: '#565656',
		borderRadius: 5,
		// marginLeft: 15,
	},
	rightContainer: {
		marginLeft: 13,
		marginRight: 16,
	},
	title: {
		fontSize: 20,
		marginBottom: 10,
	},
	detailTitle: {
		fontSize: 15,
		color: '#3b3b3b',
		marginTop: 10,
		width: screenWidth - 16 - 80 - 13 - 16,
	}
});
