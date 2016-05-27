// MerchantDetailCell.js
// 用于商品页的cell

import React, { Component } from "react";

import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, TouchableHighlight } from "react-native";
import Img from '../common/Img';
const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const cellPadding = 10;
const cellHeight_I5 = 380;
const textHeight = 35;
const cellHeight = cellHeight_I5*screenWidth/640;
const imageHeight = cellHeight - textHeight - cellPadding;
const imageWidth  = screenWidth - 2*cellPadding;
export default class MerchantDetailCell extends Component {
	render() {
		return (
			<TouchableOpacity
				// underlayColor='white'
				style={styles.container}
			>
				<Img style={styles.image}/>
				
				<View style={styles.textContainer}>
					<Text style={styles.text} numberOfLines={1}>武汉市江岸区沿江大道江景大厦A座21楼武汉市江岸区沿江大道江景大厦A座21楼</Text>
				</View>
				
				{/*<Text style={styles.textContainer} numberOfLines={1}>武汉市江岸区沿江大道江景大厦A座21楼武汉市江岸区沿江大道江景大厦A座21楼</Text>*/}
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: cellHeight,
		// alignItems: 'center',
		// justifyContent: 'center',
		padding: 10,
		// marginBottom: 10
		backgroundColor: 'white',
	},
	image: {
		width: imageWidth,
		height: imageHeight,
		backgroundColor: 'rgb(247, 247, 247)',
	},
	textContainer: {
		// position: 'absolute',
		// left: 0,
		// right: 0,
		// bottom: 0,
		height: textHeight,
		// paddingLeft: cellPadding,
		// paddingRight: cellPadding,
		justifyContent: 'center',
		backgroundColor: 'white',
	},
	text: {
		color: '#333',
	},
});
