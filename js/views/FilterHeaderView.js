import React, { Component, PropTypes } from "react";
import { ScrollView, View, Text, Image, StyleSheet, RefreshControl, TouchableOpacity, TouchableHighlight, PixelRatio } from "react-native";



export default class FilterHeaderView extends Component {
  static propTypes = {
    leftButtonTitle: PropTypes.string,
    rightButtonTitle: PropTypes.string,
    onPressLeft: PropTypes.func,
    onPressRight: PropTypes.func,
  }
  static defaultProps = {
    leftButtonTitle: "",
    rightButtonTitle: "",
  }
  _onPressLeft = ()=>{
    if (this.props.onPressLeft) {
      this.props.onPressLeft();
    }
  }
  _onPressRight = ()=>{
    if (this.props.onPressRight) {
      this.props.onPressRight();
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this._onPressLeft}
          style={styles.button}
          underlayColor="#ebebeb"
          activeOpacity={1}
          >
          <Text>
            {this.props.leftButtonTitle}
          </Text>
        </TouchableHighlight>
        <View style={styles.dividerLine}>
        </View>
        <TouchableHighlight
          onPress={this._onPressRight}
          style={styles.button}
          underlayColor="#ebebeb"
          activeOpacity={1}
          >
          <Text>
            {this.props.rightButtonTitle}
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
    // backgroundColor: 'pink',
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
