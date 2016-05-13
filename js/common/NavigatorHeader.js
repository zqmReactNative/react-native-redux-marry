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
} from 'react-native';


export default class NavigatorHeader extends Component {

  static propTypes = {
    ...View.propTypes,
    title:PropTypes.string,
    titleView:PropTypes.func,
    leftBarButtonItem:PropTypes.func,
    rightBarButtonItems:PropTypes.func,
    isBelongTopNavigator:PropTypes.bool,

  };

  static defaultProps = {
    title:"",
    leftBarButtonItem:()=>(<View />),
    isBelongTopNavigator:false,
    rightBarButtonItems:()=>(<Text style={styles.rightNavBarButtonStyle}></Text>),

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
