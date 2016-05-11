// marry.js
import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, } from 'react-native';

import Logo from './svg/Logo';
import Back from './svg/Back';

export default class Marry extends Component {

	render() {
		return (
			<View style={styles.container} >
				<Logo />
				<Back />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
