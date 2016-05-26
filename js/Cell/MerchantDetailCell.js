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
const imageHeight = cellHeight_I5 - textHeight - cellPadding;
const imageWidth  = screenWidth - 2*cellPadding;
export default class MerchantDetailCell extends Component {
	render() {
		return (
			<TouchableHighlight style={styles.container}>
				<Img />
				<Text></Text>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: cellHeight,
		padding: 10,
	},
	image: {
		width: screenWidth - 20,
		height: 380
	},
});