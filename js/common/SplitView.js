// SplitView.js
// 两个ListView,左边控制右边显示

import React, { Component, PropTypes } from 'react';
import { Animated, View, StyleSheet, Text, ListView, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native';

const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class SplitView extends Component {
	static propTypes = {
		...View.propTypes,
		datas: PropTypes.array,
		leftSelectedIndex: PropTypes.number,
		rightSelectedIndex: PropTypes.number,
	}
	static defaultProps = {
	  datas: [{}],
	}
	constructor(props) {
		super(props);

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1!==r2,
		});
		this.state={
			dataSourceOfLeft: ds.cloneWithRows([{}, {}, {}]),
			dataSourceOfRight: ds.cloneWithRows([{}, {}, {}, {}, {}, {}]),
		}
	}
	_renderLeftListViewRow = (rowData)=>{
		return (
			<TouchableHighlight>
				<View>
				</View>
			</TouchableHighlight>
		);
	}
	render(){
		const { style } = this.props;
		return (
			<TouchableOpacity style={[styles.maskButton, {flexDirection: 'row'}]} >
				{/*

				<View style={{styles.container}}>
					<ListView />
					<ListView />
				</View>
				*/}
				<ListView
					style={styles.leftContainer}
					dataSource={this.state.dataSourceOfLeft}
					renderRow={(rowData)=><Text>LEFT</Text>}
					/>

				<ListView
					style={styles.rightContainer}
					dataSource={this.state.dataSourceOfRight}
					renderRow={(rowData)=><Text>RIGHT</Text>}
					/>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
	},
	maskButton: {
		position: 'absolute',
		top: 0, bottom: 0,
		left: 0, right: 0,
		// backgroundColor: 'green',
	},
	leftContainer: {
		width: screenWidth/2,
	},
	rightContainer: {
		width: screenWidth/2,
	},
});
