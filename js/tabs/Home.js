import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default class Home extends Component {

  render() {
    return (<View style={styles.container}></View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
  },
});
