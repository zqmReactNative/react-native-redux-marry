// ActivityCell.js
// 用于优惠活动的cell

import React, { Component, PropTypes } from "react";

import { View, Text, Image, StyleSheet, Dimensions, Platform, TouchableOpacity, TouchableHighlight } from "react-native";
import Img from '../common/Img';
const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const cellPadding = 10;
const cellHeight_I5 = 380;
const textHeight = 35;
const cellHeight = cellHeight_I5*screenWidth/640;
const imageHeight = cellHeight - textHeight - cellPadding;
const imageWidth  = screenWidth - 2*cellPadding;

export default class ActivityCell extends Component{

  static propTypes = {
    ...View.propTypes,
    onPress:PropTypes.func,
    source:Image.propTypes.source,
    title:PropTypes.string,
    cover:PropTypes.string,//商品图片地址
    shopname:PropTypes.string,//商品名,注意JSON里面为shopname
    shopId:PropTypes.string,
  };


  _didSelectedCell = ()=>{
    const {shopId} = this.props;
    if (shopId && shopId !== "")
    {
      this.props.onPress(shopId);
    }else {
      alert(1);
    }
  }

  _renderCell=()=>{
		const { source, cover, title, shopname, shopId } = this.props;
    return (
      <View style={[]}>
        <TouchableOpacity underlayColor="#ebebeb" onPress={this._didSelectedCell}>
					<View style={[{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}, styles.container, styles.gap ]}>
						<View style={styles.cover}>
							{/*<Img source={{uri:'http:\/\/jiehun.deyi.com\/uploads\/2016\/02\/16\/cc985b361823f9669574e7302ddac0c4.jpg'}}/>*/}
							{/*<Img style={styles.cover} source={this.props.source}/>*/}
							<Img style={styles.cover} source={source}/>

						</View>

						<View style={[styles.coverContainer, styles.content]}>

							{/*
								(i.Text,{numberOfLines:2,style:[c.title,n?c.simpleTitle:c.additionalTitle]},t.title),!n&&
								(i.Text,{style:c.shopName},t.shopName),
								*/}
							<View>
								<Text numberOfLines={2} style={[styles.title, ]}>{title}</Text>
								<Text numberOfLines={1} style={[styles.shopName]}>{shopname}</Text>
							</View>


							<View style={styles.button}>
								<Text style={styles.buttonText}>马上报名</Text>
							</View>


						</View>
					</View>
        </TouchableOpacity>
      </View>
    );
  }




  render(){
    return this._renderCell();
  }
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:10,
    paddingVertical:10,
    // marginBottom:7.5,
    // width:win.width
  },
  gap:{
    backgroundColor:"#fff",
    shadowColor:"#e0e0e0",
    // shadowOpacity:1,
    shadowRadius:2,
    shadowOffset:{
      width:0,
      height:0
    }
  },
  contentContainerStyle:{
    flex:1,
    flexDirection:"row"
  },
  cover:{
    width:148,
    height:90,
    borderRadius:3
  },
  content:{
    flex:1,
    marginLeft:9.5
  },
  title:{
    height:40,
    color:"#151515",
    fontSize:15,
    lineHeight:20
  },
  simpleTitle:{
    marginTop:4,
    marginBottom:17,
    height:44,
    lineHeight:Platform.OS === "ios"? 20:22
  },
  additionalTitle:{
    marginTop:Platform.OS === "ios"? -2:0//-4:0
  },
  shopName:{
    color:"#8a8888",
    fontSize:12,
    height:Platform.OS === "ios"? 16:14,//12:14
    marginVertical:Platform.OS === "ios"? 9:6
  },
  button:{
    height:24,
    width:77,
    backgroundColor:"#ff5942",
    borderRadius:4,
    alignItems:"center",
    justifyContent:"center"
  },
  buttonText:{
    color:"#fff",
    fontSize:12
  }
});
