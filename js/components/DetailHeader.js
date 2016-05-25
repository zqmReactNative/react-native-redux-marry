// DetailHeader.js
// 详情页头部视图

import React, { Component } from "react";

import { View, Text, Image, StyleSheet } from "react-native";
import Stars from '../svg/Stars';

export default class DetailHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Image style={styles.image}/>
      	<View style={styles.rightContainer}>
	      	<Text style={styles.title}>花漾婚礼会馆</Text>
	      	<Stars count={3}/>
	      	<Text style={styles.detailTitle}>武汉市江岸区沿江大道江景大厦A座21楼</Text>
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
		backgroundColor: '#565656',
		borderRadius: 5,
		// marginLeft: 15,
	},
	rightContainer: {
		// flex: 1,
		marginLeft: 13,
		marginRight: 16,
		// marginBottom: 16,
		// marginTop: 16,
		// position: 'absolute',
		// top: 16,
		// bottom: 16,
		// left: 13,
		// right: 16,
		// backgroundColor: '#ff5942',
	},
	title: {
		fontSize: 20,
		marginBottom: 10,
	},
	detailTitle: {
		fontSize: 15,
		color: '#3b3b3b',
		marginTop: 10,
	}
});
