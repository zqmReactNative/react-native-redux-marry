// CommonCell.js

import React, {
  Component,
  PropTypes,
} from 'react';

import ReactNative, {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

export default class CommonCell extends Component{
  static propTypes = {
    ...View.propTypes.style,
    ...TouchableHighlight.propTypes.style,
    // ...TouchableOpacity.propTypes.style,
    // ...TouchableWithoutFeedback.propTypes.style,
    renderCellContent: PropTypes.func.isRequired,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    contentContainerStyle: View.propTypes.style
  };
  static defaultProps = {
    onPress: ()=>{},
    renderCellContent: ()=><View />,
  };

  _getContent = ()=>{
    // TouchableHighlight拥有underlayColor属性
    if(this.props.underlayColor){

      return (
        <TouchableHighlight
          style = { [this.props.styles, this.props.contentContainerStyle] }
          onPress = { this._pressHandler }
          underlayColor = { this.props.underlayColor }
          activeOpacity = { this.props.activeOpacity }
          >
          { this.props.renderCellContent() }
        </TouchableHighlight>
      );
    }
    else {
      // TouchableHighlight,TouchableOpacity都有activeOpacity属性
      if (this.props.activeOpacity) {
        return (
          <TouchableOpacity
            style = { [this.props.styles, this.props.contentContainerStyle] }
            onPress = { this._pressHandler }
            activeOpacity = { this.props.activeOpacity }
            >
            { this.props.renderCellContent() }
          </TouchableOpacity>
        );
      }
      else {
        return (
          <TouchableOpacity
            style = { [this.props.styles, this.props.contentContainerStyle] }
            onPress = { this._pressHandler }
            >
            { this.props.renderCellContent() }
          </TouchableOpacity>
        );
      }
    }

  };

  _pressHandler = ()=>{
    if (this.props.onPress) {
      this.props.onPress();
    }
  };

  render() {
    return (
      this._getContent()
    );
  }
}
