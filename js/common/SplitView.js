// SplitView.js
// 两个ListView,左边控制右边显示

import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, ListView, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native';

const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class SplitView extends Component {
	static propTypes = {
		...View.propTypes,
		datas: PropTypes.object,
		leftSelectedIndex: PropTypes.number,
		rightSelectedIndex: PropTypes.number,
	}
	static defaultProps = {
	  datas: [{}],
	}
	render(
		<TouchableHighlight >
		<View style={{styles.container}}>
			{/*
			<ListView />
			<ListView />
			*/}
		</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
	},
	leftContainer: {
		flex: 1,
	},
	rightContainer: {
		flex: 1,
	},
});