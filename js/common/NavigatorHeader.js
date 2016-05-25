// NavigatorHeader.js

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  View,
  Text,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';

import Svg, {
    Circle,
    G,
    Path,
    Polygon,
} from 'react-native-svg';

class Back extends Component {
  render(){
    return (
      <Svg width={9} height={17}>
        <G scale={0.34}>
          <Path stroke="#ff5942" d="M24,3 L3,25 L24,47" strokeWidth={4} strokeCap="round" strokeJoin= "round" fill="none"/>
        </G>
      </Svg>
    );
  }
}

export default class NavigatorHeader extends Component {

  static propTypes = {
    ...View.propTypes,
    title:PropTypes.string,
    titleView:PropTypes.func,
    leftBarButtonItem:PropTypes.func,
    rightBarButtonItems:PropTypes.func,
    isBelongTopNavigator:PropTypes.bool,
    onBackClick:PropTypes.func,
  };

  _onPress = ()=>{
    if (this.props.onBackClick) {
      this.props.onBackClick();
    }
  }

  static defaultProps = {
    title:"",
    leftBarButtonItem:()=>(<TouchableOpacity style={{marginLeft: 10}} onPress={this._onPress}><Back /></TouchableOpacity>),
    isBelongTopNavigator:false,
    rightBarButtonItems:()=>(<Text style={styles.rightNavBarButtonStyle}></Text>),
    onBackClick:()=>{},
  }

  render(){

    const {leftBarButtonItem, title, titleView, rightBarButtonItems, isBelongTopNavigator} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.statusBar}/>
        <View style={styles.barStyle}>
          <View style={styles.leftNavBarButtonStyle}>
            {this.props.leftBarButtonItem()}
          </View>

          <View style={styles.centerViewStyle}>
            {titleView? titleView():(<Text style={styles.title}>{this.props.title}</Text>)}
          </View>
          
          {rightBarButtonItems()}
        </View>
        <View style={styles.divider}/>

      </View>
    );
  }

}


const styles = StyleSheet.create({
  container:{
    height:64,
    backgroundColor:'#ccc',
  },
  statusBar:{
    height:20,
    backgroundColor:'white',
  },
  barStyle:{
    // flex:1,
    height:43,
    // marginTop:10,
    backgroundColor:'white',
    // marginBottom:2,
    flexDirection:'row',
    // flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',

  },
  leftNavBarButtonStyle:{
    flex:1,
    padding: 5,
  },
  centerViewStyle:{
    flex:4,
    // justifyContent:'center',
    // marginTop:20,
    alignItems:'center',
    // marginBottom:20,
  },
  rightNavBarButtonStyle:{
    flex:1,
  },
  dividerStyle:{
    height: 1/PixelRatio.get(),
    backgroundColor: '#b2b2b2',
  },
  leftTitle:{
    // margin:10,
    textAlign:"center",
    alignItems:"center"
  },
  title:{
    color:"#ff5942",
    fontSize:17,
    margin:10,
    // marginTop:14,
    // fontWeight:"600",
    textAlign:"center",
    alignItems:"center"
  },



});
