// 用于占位图

import React, {
  Component,
  PropTypes,
} from 'react';

import ReactNative, {
  StyleSheet,
  View,
  Image,
} from 'react-native';

var ReactNativeART = ReactNative.ART;
var {
    Group,
    Shape,
    // Circle,
    Surface,
    // Transform,
    // Rectangle,
} = ReactNativeART;

export default class Img extends Component{

  static propTypes = {
    ...View.propTypes,
    source:Image.propTypes.source,
    // loadingStyle:View.propTypes.style,
  };

  render(){
    
    return (
      <Image style={[styles.container, this.props.style]} source={this.props.source}>
        <Surface
          width={40}
          height={40}
          >
          <Shape
            fill={"#ddd"}
            d={"M22.9,23.9c-1.2-0.7-3.2-0.7-4.4,0c-1.2,0.7-1.2,1.8,0,2.5c0.6,0.3,1.3,0.8,2.1,0.8 c0.8,0,1.6-0.4,2.2-0.8C24.1,25.7,24.1,24.6,22.9,23.9z"}
            />
          <Shape
            fill={"#ddd"}
            d={"M13.1,22.4c0.5-0.7,0.6-0.8,0.9-1.1c1.8-1.8,4.1-2.6,6.5-2.7c2.3,0,4.7,0.9,6.5,2.7 c0.3,0.3,0.5,0.4,0.9,1.1c1.1,1.5-1.7,3.2-2.6,1.9c-0.2-0.2-0.4-0.5-0.6-0.7c-1.1-1.1-2.7-1.7-4.2-1.8c-1.5,0-3,0.6-4.2,1.8 c-0.2,0.2-0.5,0.5-0.6,0.7C14.8,25.5,12.1,23.8,13.1,22.4z"}
            />
          <Shape fill={"#ddd"}
            d={"M11.8,16.6c2.6-2,5.8-3.2,8.9-3.2c3.1,0,6.3,1.2,8.9,3.2c1.3,0.9,1.2,2.5,0.9,4.2 c-0.1,0.6-0.5,1-1,0.4c-0.3-0.4-0.5-0.5-0.8-0.9l0,0l0,0c-2.2-2.2-5.1-3.1-8-3.1c-2.9,0-5.8,0.9-8,3.1l0,0l0,0 c-0.4,0.4-0.5,0.5-0.8,0.9c-0.5,0.5-0.9,0.1-1-0.4C10.6,19.2,10.6,17.6,11.8,16.6z"}
            />
          <Shape fill={"#ddd"}
            d={"M35.2,8.7L22.4,2c-1-0.5-2.6-0.5-3.6,0L5.8,8.7c-1,0.5-1.8,1.9-1.8,3v13.1 c0,1.1,0.8,2.5,1.8,3l11.3,5.9l0.1,5.2l14.3-9.1l3.7-1.9c1-0.5,1.8-1.9,1.8-3V11.7C37.1,10.5,36.2,9.2,35.2,8.7z M9.4,22.7v-9 c0-0.8,0.6-1.7,1.2-2.1l8.7-4.6c0.7-0.4,1.8-0.4,2.5,0l8.7,4.6c0.7,0.4,1.2,1.3,1.2,2.1v9c0,0.8-0.5,1.7-1.2,2.1l-8.7,4.6 c-0.7,0.4-1.8,0.4-2.5,0l-8.7-4.6C9.9,24.4,9.4,23.5,9.4,22.7z"}
            />

        </Surface>
      </Image>
    );
    
  }
}

const styles = StyleSheet.create({
  container:{
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cover:{
    position:"absolute",
    top:0,
    right:0,
    bottom:0,
    left:0,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#ededed"
  },
  icon:{
    height:40,
    width:40
  }
});
