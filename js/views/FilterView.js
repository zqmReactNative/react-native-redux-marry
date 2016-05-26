import React, { Component } from "react";
import { ScrollView, View, Text, Image, StyleSheet, RefreshControl, TouchableOpacity, PixelRatio } from "react-native";


export default class FilterView extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity>

        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 39,
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1/PixelRatio.get(),
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  dividerLine: {
    // marginTop: 5,
    // marginBottom: 5,
    height: 1/PixelRatio.get(),
  },
});
