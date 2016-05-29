import React, { Component } from "react";
import { ScrollView, View, Text, Image, StyleSheet, RefreshControl, TouchableOpacity, TouchableHighlight, PixelRatio } from "react-native";


export default class FilterHeaderView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          underlayColor="#ebebeb"
          activeOpacity={1}
          >
          <Text>
            XXX
          </Text>
        </TouchableHighlight>
        <View style={styles.dividerLine}>
        </View>
        <TouchableHighlight
          style={styles.button}
          underlayColor="#ebebeb"
          activeOpacity={1}
          >
          <Text>
            YYY
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
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
    height: 40,
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
