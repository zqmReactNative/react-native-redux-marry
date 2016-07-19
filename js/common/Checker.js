import React,{
  Component,
  PropTypes,
} from 'react';

import ReactNative,{
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Svg, {
    Circle,
    G,
    Path,
    Polygon,
    Polyline,
} from 'react-native-svg';


const kEmptyImage   = require('../../images/404.png');
const kLoadingImage = require('../../images/loading.gif');

export default class Checker extends Component {

  static propTypes = {
    onReload:PropTypes.func,
    state:PropTypes.number.isRequired,
  };

  _onload = ()=>{
    if (onReload) {
      onReload();
    }
  };


  render() {
    const {onReload, state} = this.props;
    const defaultProps = {
      state: 0,
    };

    switch (state) {
      case 1:
        return (
          <View>
          </View>
        );
        break;
      case 0:
        return (
          <View style={[styles.error, this.props.styles]}>
            <Svg
              style={styles.warningImage}
              height="100"
              width="100"
              >
              <Circle
                stroke="#DCDBDB"
                strokeWidth="1.2"
                strokeJoin="round"
                fill="none"
                cx="50.4"
                cy="49.8"
                r="39.2"
                />
              <Circle
                stroke="#DCDBDB"
                strokeWidth="1.2"
                fill="none"
                cx="50.4"
                cy="69"
                r="4.3"
                />
              <Path stroke="#DCDBDB"
                strokeWidth="1.2"
                fill="none"
                d="M50.4,29.8c-2.9,0-5.7,2.9-5,6.4l1.4,22.1 c0,1.4,2.1,2.9,3.6,2.9c2.1,0,3.6-1.4,3.6-2.9l1.4-22.1C55.4,32.6,53.2,29.8,50.4,29.8L50.4,29.8z"
                />
            </Svg>

            <Text style={styles.errorText}>哎唷出错啦~刷新试试~</Text>

            <TouchableOpacity onPress={this.props.onPress} style={[styles.refresh, styles.refreshContent]}>
              <Svg
                height="20"
                width="20"
                >
                <Path
                  stroke="#ff5942"
                  strokeWidth="1.2"
                  strokeCap="round"
                  strokeJoin="round"
                  d="M14.8,6.5c1.1,1.2,1.8,2.8,1.8,4.5c0,3.6-2.9,6.6-6.6,6.6S3.5,14.7,3.5,11S6.4,4.5,10,4.5c0.2,0,0.4,0,0.6,0.1"
                  fill="none"
                  />
                <Polyline
                  stroke="#ff5942"
                  strokeWidth="1.2"
                  strokeCap="round"
                  strokeJoin="round"
                  fill="none"
                  points="8.7,2.4 11.3,4.5 9.1,7.1"
                  />

              </Svg>

              <Text style={styles.refreshText}>点我刷新</Text>
            </TouchableOpacity>

          </View>
        );

        break;
      case -1:
        return (
          <View style={[styles.container, this.props.styles]} key="load-container">
            <Image source={kLoadingImage}/>
          </View>
        );


        break;
      case -2:
        return (
          <View style={[styles.container, this.props.styles]} key="empty-container">
            <Image source={kEmptyImage}/>
            <Text style={styles.text}>内容还在筹备中哦，敬请期待~</Text>
          </View>
        );
        break;
      default:
      return (null);
    }

  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
  },
  text:{
    fontSize:13,
    color:"#aaa",
  },
  error:{
    alignItems:"center",
    justifyContent:"center",
  },
  errorText:{
    fontSize:13,
    color:"#aaa",
  },
  warningImage:{
    marginVertical:15,
  },
  refresh:{
    height:30,
    width:133.5,
    marginTop:25,
    borderRadius:4.5,
    borderWidth:1,
    borderColor:"#ff5942",
  },
  refreshContent:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
  },
  refreshText:{
    color:"#ff5942",
    fontSize:13,
  },
});
