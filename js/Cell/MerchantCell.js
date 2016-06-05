import React, { Component, PropTypes } from "react";

import { View, Text, Image, StyleSheet, Dimensions, PixelRatio, Platform, TouchableOpacity, TouchableHighlight } from "react-native";
import Img from '../common/Img';
import Stars from '../svg/Stars';
const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class MerchantCell extends Component {

  static propTypes = {
    ...View.propTypes,
    onPress:PropTypes.func,
    source:Image.propTypes.source,
    logo:PropTypes.string,//商品图片地址
    shopName:PropTypes.string,//商品名,注意JSON里面为shopname
    catname:PropTypes.string,//分类
    level:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//星级
    cases:PropTypes.string,//图库
    activities:PropTypes.string,//优惠

  };

  static defaultProps = {
    onPress:()=>{},
    level:0,
    catname:"",
    cases:"",
    activities:"",

  };

  _onPress = ()=>{
    this.props.onPress && this.props.onPress()
  }
  render() {
    const {logo, shopName, catname, level, cases, activities} = this.props;
    return (
      <TouchableHighlight

        underlayColor="#ebebeb"
        activeOpacity={1}
        onPress={this._onPress}
        >
        <View style={styles.container}>
          <View style={styles.cover}>
            {/*<Img source={{uri:'http:\/\/jiehun.deyi.com\/uploads\/2016\/02\/16\/cc985b361823f9669574e7302ddac0c4.jpg'}}/>*/}
            {/*<Img style={styles.cover} source={this.props.source}/>*/}
            <Img style={styles.cover} source={{uri:logo}}/>

          </View>

          <View style={[styles.coverContainer, ]}>
            <View style={[styles.titleContainer, styles.info, ]}>
              <Text style={[styles.title]}>{shopName}</Text>
            </View>
            <View style={[styles.stars, styles.info, ]}>
              <Stars count={Number(level)}/>
            </View>
            <View style={[styles.info, ]}>
              <Text style={[styles.infoText]}>{catname}</Text>
            </View>
            <View style={[styles.info, ]}>
              <Text style={[styles.infoText, styles.infoCount]}>{"图库"+cases}</Text>
              <Text style={[styles.infoText, styles.infoCount]}>{"优惠"+activities}</Text>
            </View>
          </View>
        </View>

      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 103,
    padding: 12,
    flexDirection: 'row',

    borderBottomColor:"#ebebeb",
    borderBottomWidth:1/PixelRatio.get(),
  },
  cover:{
    height:79,
    width:79,
    marginRight:11,
    borderRadius:3
  },
  coverContainer:{
    marginRight:11,
    // backgroundColor:"#dedede"
  },
  titleContainer:{
    marginLeft:-4,
    paddingHorizontal:4
  },
  title:{
    paddingTop:Platform.os === 'iOS'?2:0,
    fontSize:15,
    color:"#151515"
  },
  info:{
    flexDirection:"row",
    marginTop:Platform.os === 'iOS'?7:5
  },
  infoText:{
    marginRight:10,
    fontSize:11,
    color:"#666"
  },
  infoCount:{
    color:"#ff5942"
  },
  stars:{
    marginLeft:1
  }
});
