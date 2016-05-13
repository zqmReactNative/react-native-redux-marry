import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Svg, {
    Circle,
    G,
    Path,
    Polygon,
} from 'react-native-svg';

const circleRadius = 44;
const kWidth = 24;
const kHeight = 24;

// const colorOfCircle='pink';
// const fillColor = '#fff';
const SVG_PATH_HLCH = 'M25.3,25.3c-0.8,0.8-1.8,1-2.3,0.5l0,0l0,0l-10.2-7.4l5.6-5.6l7.4,10.2l0,0C26.2,23.4,26,24.5,25.3,25.3z M8.5,17c-2.1,0-4-0.8-5.5-2L15,3c1.3,1.5,2,3.4,2,5.5C17,13.2,13.2,17,8.5,17z M0,8.5C0,3.8,3.8,0,8.5,0c2.1,0,4,0.8,5.5,2.1 l-12,12C0.8,12.6,0,10.6,0,8.5z';
// const svgPath = SVG_PATH_HLCH;

export default class ChannelSvgButton extends Component {

  static propTypes = {
    // ...View.propTypes,
    ...TouchableOpacity.propTypes,
    containerStyle: View.propTypes.style,
    svgPath: PropTypes.string,
    colorOfCircle:PropTypes.string,
    fillColor:PropTypes.string,
    title: PropTypes.string,
    titleStyle:Text.propTypes.style,
    buttonTag:PropTypes.string,
    onPress:PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  _onClick = ()=>{
    if (this.props.onPress) {
      // alert(1)
      this.props.onPress();
    }
    else {
      alert(2);
    }
  };



  render() {
    // 获取title, containerStyle等属性
    let {title, titleStyle, svgPath, fillColor, colorOfCircle, containerStyle} = this.props;
    if (!titleStyle) {
      titleStyle = styles.buttonText;
    }
    if (!fillColor) {
      fillColor = '#fff';
    }
    if (!colorOfCircle) {
      colorOfCircle = 'pink';
    }
    if (!svgPath) {
      svgPath = '';
    }
    return (
      // onPress={()=>{alert(0)}}
      <TouchableOpacity
        onPress={this._onClick}
        style={containerStyle}
        >
        <View style={[styles.boxTd, ]}>
          <Svg
              height={circleRadius}
              width={circleRadius}
            >

            <G>
              <Circle
                  cx={circleRadius*0.5}
                  cy={circleRadius*0.5}
                  r={circleRadius*0.5}
                  fill={colorOfCircle}
              />
              {/*
                x={9}
                y={9}
                10=(circleRadius-kWidthd)/2;
                然后再微小调整
                */}
              <Path
                height={kWidth}
                width={kWidth}
                x={9}
                y={9}

                d={this.props.svgPath}
                fill = {'#fff'}
                />
            </G>
          </Svg>



        </View>
        {/*this.props.titleStyle与titleStyle不同*/}
        <Text style={titleStyle}>
          {/*this.props.title与title有区别*/}
          {this.props.title}
        </Text>



      </TouchableOpacity>
    );
  }


}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff',
    // margin: 0,//失效
    alignItems:'center',
  },
  boxTd:{
    flex:1,
    // margin:5,//无效
    // height:88,
		// flexDirection:'column',//默认
		justifyContent:'center',
		alignItems:'center',
  },
  button:{
    overflow:'hidden',
  },
  buttonText:{
    marginBottom:10,
    fontSize:12,
    // color:'#fff',
    // fontFamily:'FZXiHei--YS1-0',
    textAlign:'center',
  },
});
