import React, { Component } from "react";
import { ScrollView, View, Text, Image, StyleSheet, RefreshControl, TouchableOpacity, PixelRatio } from "react-native";


export default class FilterHeaderView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text>
            XXX
          </Text>
        </TouchableOpacity>
        <View style={styles.dividerLine}>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text>
            YYY
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 39,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1/PixelRatio.get(),
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    marginTop: 0,
    marginBottom: 0,
  },
  dividerLine: {
    // marginTop: 5,
    // marginBottom: 5,
    height: 31,
    width: 1/PixelRatio.get(),
    backgroundColor: '#ccc',
  },
  text: {
    fontSize: 12,
    // color: 'red',
  },
});
