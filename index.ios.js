/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, {
   Component
 } from 'react';

 import {
   AppRegistry,
   Dimensions,
   StyleSheet,
   Text,
   Image,
   View,
   ListView
 } from 'react-native';

 const kViewHeight = 50
 const kMarginTop = 3
 const screenWidth  = Dimensions.get('window').width;
 const screenHeight = Dimensions.get('window').height;

 export default class Hello extends Component {
   constructor(props) {
     super(props)
     let ds = new ListView.DataSource({
       rowHasChanged:(r1, r2)=> r1 !== r2,
     });
     this.state = {
       dataSource: ds.cloneWithRows([]),
     };
   }ns
   _renderRow = (rowData)=>{
     return (
       <View>
       </View>
     );
   }

   _renderHeader = ()=>{
     return (
       <View style={{flex: 1}}>
         {/**/}
         <View style={{height: kViewHeight, marginTop: kMarginTop, flexDirection:'row'}}>
           <View style={{height:kViewHeight,flex:1}}>
              <Image style={styles.icon} source={require('./Img/sina.png')}/>
              <Text style={{alignSelf:'center',fontSize:8,marginTop:2,fontWeight:'500',color:'white'}}>平平小店</Text>
           </View>
           <View style={{height:kViewHeight, flex:6}}>
              <Image style={{width:screenWidth/2,height:kViewHeight/3*2,alignSelf:'center',marginTop:7}} source={require('./Img/mlogo.png')}/>
           </View>

           <View style={{height:kViewHeight, flex:1,justifyContent:'center'}}>
               <Text style={{color:'white',fontSize:15,alignSelf:'center'}}>登录</Text>
           </View>
         </View>

         {/*-----------2-----------*/}
         <View style={{backgroundColor: 'yellow', height: kViewHeight, marginTop: kMarginTop}}>
         </View>

         {/*-－－－－－－3－－－－－－－*/}
         <View style={{backgroundColor: 'whitesmoke', height: kViewHeight * 4, marginTop: kMarginTop,flexDirection:'column'}}>
           <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',
     backgroundColor:'red'}}>
             <View style={styles.TfViewStyle}>
                <Image style={styles.TfViewIcon} source={require('./Img/baidu.png')}/>
                <View style={styles.TfViewText}>
                   <Text style={styles.TfViewtText}>百度</Text>
                </View>
             </View>
             <View style={styles.TfViewStyle}>
              <Image style={styles.TfViewIcon} source={require('./Img/sina.png')}/>
                <View style={styles.TfViewText}>
                   <Text style={styles.TfViewtText}>新浪</Text>
                </View>
             </View>
             <View style={styles.TfViewStyle}>
              <Image style={styles.TfViewIcon} source={require('./Img/taobao.png')}/>
                <View style={styles.TfViewText}>
                   <Text style={styles.TfViewtText}>淘宝</Text>
                </View>
             </View>
             <View style={styles.TfViewStyle}>
              <Image style={styles.TfViewIcon} source={require('./Img/mart.png')}/>
                <View style={styles.TfViewText}>
                   <Text style={styles.TfViewtText}>8590</Text>
                </View>
             </View>
             <View style={styles.TfViewStyle}>
              <Image style={styles.TfViewIcon} source={require('./Img/sohu.png')}/>
                <View style={styles.TfViewText}>
                   <Text style={styles.TfViewtText}>搜狐</Text>
                </View>
             </View>
             <View style={styles.TfViewStyle}>
              <Image style={styles.TfViewIcon} source={require('./Img/weibo.png')}/>
                <View style={styles.TfViewText}>
                   <Text style={styles.TfViewtText}>微博</Text>
                </View>
             </View>
             <View style={styles.TfViewStyle}>
              <Image style={styles.TfViewIcon} source={require('./Img/tmall.png')}/>
                <View style={styles.TfViewText}>
                   <Text style={styles.TfViewtText}>天猫</Text>
                </View>
             </View>
             <View style={styles.TfViewStyle}>
              <Image style={styles.TfViewIcon} source={require('./Img/qq.png')}/>
                <View style={styles.TfViewText}>
                   <Text style={styles.TfViewtText}>腾讯</Text>
                </View>
             </View>
           </View>
           <View style={{flex:2, flexDirection:'row',flexWrap:'wrap'}}>
              <View style={styles.TsViewStyle}>
               <Text style={styles.TfViewtText}>凤凰</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>起点</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>QQ空间</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>网易</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>搜房网</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>携程</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>赶集</Text>
              </View>
              <View style={styles.TsViewStyle}>
               <Text style={styles.TfViewtText}>百姓网</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>京东</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>1号店</Text>
              </View>
              <View style={styles.TsViewStyle}>
               <Text style={styles.TfViewtText}>苏宁</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>国美</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>去哪儿</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>糯米</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>车之家</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>唯品</Text>
              </View>
           </View>
         </View>

         {/*-----------4--------------*/}
         <View style={{backgroundColor: 'whitesmoke', height: kViewHeight * 4.5, marginTop: kMarginTop,flexDirection:'column'}}>
            <View style={{backgroundColor: 'gainsboro', flex:1,flexDirection:'row'}}>
               <View style={{flex:1,flexDirection:'row'}}>
                 <Image style={styles.FfIcon} source={require('./Img/news.png')}/>
                <View style={{flex:10}}>
                   <Text style={styles.FfText}>新闻资讯</Text>
                </View>
               </View>
               <View style={{flex:1,justifyContent:'center'}}>
                  <Text style={styles.moreText}>更多</Text>
               </View>
            </View>
            <View style={{flex:3,flexDirection:'row',flexWrap:'wrap'}}>
               <View style={styles.FsViewStyle}>
                  <Text style={styles.FsText}>网易</Text>
               </View>
               <View style={styles.FsViewStyle}>
                   <Text style={styles.FsText}>凤凰军事</Text>
               </View>
               <View style={styles.FsViewStyle}>
                   <Text style={styles.FsText}>今日头条</Text>
               </View>
               <View style={styles.FsViewStyle}>
                    <Text style={styles.FsText}>东方财富</Text>
               </View>
               <View style={styles.FsViewStyle}>
                    <Text style={styles.FsText}>中关村</Text>
               </View>
               <View style={styles.FsViewStyle}>
                    <Text style={styles.FsText}>新浪NBA</Text>
               </View>
               <View style={styles.FsViewStyle}>
                    <Text style={styles.FsText}>环球时报</Text>
               </View>
               <View style={styles.FsViewStyle}>
                    <Text style={styles.FsText}>新华网</Text>
               </View>
            </View>
            <View style={{flex:6.5, flexDirection:'row',flexWrap:'wrap'}}>
              <View style={styles.TsViewStyle}>
               <Text style={styles.FtBlueText}>新闻</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>凤凰</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>新浪</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>环球</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>网易</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.FtBlueText}>体育</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>新浪</Text>
              </View>
              <View style={styles.TsViewStyle}>
               <Text style={styles.TfViewtText}>搜狐</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>NBA</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>虎扑</Text>
              </View>
              <View style={styles.TsViewStyle}>
               <Text style={styles.FtBlueText}>财经</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>东财</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>新浪</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>和讯</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>金融界</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.FtBlueText}>军事</Text>
              </View>
               <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>新浪</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>凤凰</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>铁血</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>环球</Text>
              </View>
           </View>

         </View>

         {/*------------5--------------*/}
         <View style={{backgroundColor: 'whitesmoke', height: kViewHeight * 7, marginTop: kMarginTop,flexDirection:'column'}}>
            <View style={{backgroundColor: 'gainsboro', flex:1,flexDirection:'row'}}>
               <View style={{flex:1,flexDirection:'row'}}>
                 <Image style={styles.FfIcon} source={require('./Img/magnify.png')}/>
                <View style={{flex:10}}>
                   <Text style={styles.FfText}>生活助手</Text>
                </View>
               </View>
               <View style={{flex:1,justifyContent:'center'}}>
                  <Text style={styles.moreText}>更多</Text>
               </View>
            </View>
           <View style={{flex:5,flexDirection:'row',flexWrap:'wrap'}}>
               <View style={styles.TsSmallViewStyle}>
                <Image style={styles.FsIcon} source={require('./Img/10086.png')}/>
                <Text style={styles.FsText}>移动</Text>
              </View>
              <View style={styles.TsSmallViewStyle}>
                <Image style={styles.FsIcon} source={require('./Img/weathercn.png')}/>
                <Text style={styles.FsText}>天气</Text>
              </View>
              <View style={styles.TsSmallViewStyle}>
                <Image style={styles.FsIcon} source={require('./Img/12306.png')}/>
                <Text style={styles.FsText}>火车票</Text>
              </View>
              <View style={styles.TsSmallViewStyle}>
                <Image style={styles.FsIcon} source={require('./Img/qunar.png')}/>
                <Text style={styles.FsText}>订机票</Text>
              </View>
              <View style={styles.TsSmallViewStyle}>
                <Image style={styles.FsIcon} source={require('./Img/aibang.png')}/>
                <Text style={styles.FsText}>公交</Text>
              </View>
              <View style={styles.TsSmallViewStyle}>
                <Image style={styles.FsIcon} source={require('./Img/quecai.png')}/>
                <Text style={styles.FsText}>开奖</Text>
              </View>
               <View style={styles.TsSmallViewStyle}>
                <Image style={styles.FsIcon} source={require('./Img/taobaoc.png')}/>
                <Text style={styles.FsText}>充话费</Text>
              </View>
              <View style={styles.TsSmallViewStyle}>
                <Image style={styles.FsIcon} source={require('./Img/kuaidi100.png')}/>
                <Text style={styles.FsText}>查快递</Text>
              </View>
              <View style={styles.TsSmallViewStyle}>
                <Image style={styles.FsIcon} source={require('./Img/baidumap.png')}/>
                <Text style={styles.FsText}>地图</Text>
              </View>
              <View style={styles.TsSmallViewStyle}>
                <Image style={styles.FsIcon} source={require('./Img/wcar.png')}/>
                <Text style={styles.FsText}>查违章</Text>
              </View>

            </View>
            <View style={{flex:2.5,flexDirection:'row',flexWrap:'wrap'}}>
               <View style={styles.FsViewStyle}>
                  <Text style={styles.FsText}>大众点评</Text>
               </View>
               <View style={styles.FsViewStyle}>
                   <Text style={styles.FsText}>美团</Text>
               </View>
               <View style={styles.FsViewStyle}>
                   <Text style={styles.FsText}>赶集</Text>
               </View>
               <View style={styles.FsViewStyle}>
                    <Text style={styles.FsText}>58同城</Text>
               </View>
               <View style={styles.FsViewStyle}>
                    <Text style={styles.FsText}>安乐居</Text>
               </View>
               <View style={styles.FsViewStyle}>
                    <Text style={styles.FsText}>搜房网</Text>
               </View>
               <View style={styles.FsViewStyle}>
                    <Text style={styles.FsText}>住哪</Text>
               </View>
               <View style={styles.FsViewStyle}>
                    <Text style={styles.FsText}>名医在线</Text>
               </View>
            </View>
            <View style={{flex:2.5,flexDirection:'row',flexWrap:'wrap'}}>
              <View style={styles.TsViewStyle}>
                <Text style={styles.FtBlueText}>旅游</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>同程</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>携程</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>艺龙</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>去哪儿</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.FtBlueText}>生活</Text>
              </View>
               <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>58同城</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>安居客</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>赶集</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>百姓网</Text>
              </View>
            </View>
         </View>

          {/*------------6-------------*/}
         <View style={{backgroundColor: 'whitesmoke', height: kViewHeight * 5, marginTop: kMarginTop,flexDirection:'column'}}>
           <View style={{backgroundColor: 'gainsboro', flex:1,flexDirection:'row'}}>
               <View style={{flex:1,flexDirection:'row'}}>
                 <Image style={styles.FfIcon} source={require('./Img/martB.png')}/>
                <View style={{flex:10}}>
                   <Text style={styles.FfText}>网购商城</Text>
                </View>
               </View>
               <View style={{flex:1,justifyContent:'center'}}>
                  <Text style={styles.moreText}>更多</Text>
               </View>
            </View>
           <View style={{flex:3,flexDirection:'row',flexWrap:'wrap'}}>
               <View style={styles.FsViewStyle}>
                  <Text style={styles.FsText}>淘宝</Text>
               </View>
               <View style={styles.FsViewStyle}>
                   <Text style={styles.FsText}>天猫</Text>
               </View>
               <View style={styles.FsViewStyle}>
                   <Text style={styles.FsText}>京东</Text>
               </View>
               <View style={styles.FsViewStyle}>
                    <Text style={styles.FsText}>8590商城</Text>
               </View>
               <View style={styles.FsViewStyle}>
                    <Text style={styles.FsText}>唯品会</Text>
               </View>
               <View style={styles.FsViewStyle}>
                    <Text style={styles.FsText}>苏宁易购</Text>
               </View>
               <View style={styles.FsViewStyle}>
                    <Text style={styles.FsText}>当当网</Text>
               </View>
               <View style={styles.FsViewStyle}>
                    <Text style={styles.FsText}>亚马逊</Text>
               </View>
            </View>
           <View style={{flex:5,flexDirection:'row',flexWrap:'wrap'}}>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>国美在线</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>值得买</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>乐蜂网</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>1号店</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>梦芭莎</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>名鞋库</Text>
              </View>
               <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>买卖宝</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>酒仙网</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>美丽说</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>蘑菇街</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.FtBlueText}>购物</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>爱淘宝</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>天猫</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>苏宁</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>亚马逊</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.FtBlueText}>团购</Text>
              </View>
               <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>点评团</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>聚划算</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>美团</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>嘀嗒团</Text>
              </View>
           </View>
         </View>

         {/*-------------7-------------*/}
         <View style={{backgroundColor: 'whitesmoke', height: kViewHeight * 5, marginTop: kMarginTop,flexDirection:'column'}}>
            <View style={{backgroundColor: 'gainsboro', flex:1,flexDirection:'row'}}>
               <View style={{flex:1,flexDirection:'row'}}>
                 <Image style={styles.FfIcon} source={require('./Img/recreation.png')}/>
                <View style={{flex:10}}>
                   <Text style={styles.FfText}>休闲娱乐</Text>
                </View>
               </View>
               <View style={{flex:1,justifyContent:'center'}}>
                  <Text style={styles.moreText}>更多</Text>
               </View>
            </View>
            <View style={{flex:3,flexDirection:'row',flexWrap:'wrap'}}>
               <View style={styles.FsViewStyle}>
                  <Text style={styles.FsText}>优酷</Text>
               </View>
               <View style={styles.FsViewStyle}>
                   <Text style={styles.FsText}>奇艺</Text>
               </View>
               <View style={styles.FsViewStyle}>
                   <Text style={styles.FsText}>土豆</Text>
               </View>
               <View style={styles.FsViewStyle}>
                    <Text style={styles.FsText}>乐视</Text>
               </View>
               <View style={styles.FsViewStyle}>
                    <Text style={styles.FsText}>起点</Text>
               </View>
               <View style={styles.FsViewStyle}>
                    <Text style={styles.FsText}>酷狗</Text>
               </View>
               <View style={styles.FsViewStyle}>
                    <Text style={styles.FsText}>糗事</Text>
               </View>
               <View style={styles.FsViewStyle}>
                    <Text style={styles.FsText}>美女</Text>
               </View>
            </View>
            <View style={{flex:5.5,flexDirection:'row',flexWrap:'wrap'}}>
              <View style={styles.TsViewStyle}>
                <Text style={styles.FtBlueText}>视频</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>优酷</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>奇艺</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>搜狐</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>土豆</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.FtBlueText}>小说</Text>
              </View>
               <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>红袖</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>17K</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>潇湘</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>起点</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.FtBlueText}>音乐</Text>
              </View>
               <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>百度</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>酷狗</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>QQ</Text>
              </View>
              <View style={styles.TsViewStyle}>
                <Text style={styles.TfViewtText}>喜马拉雅</Text>
              </View>
            </View>
            <View style={{flex:3}}>
               <Text style={styles.buttomText}>Copyright 2010-2016 浙ICP备 15025572号－1</Text>
               <Text style={styles.buttomText}>8590一站式服务平台 版权所有</Text>
               <Text style={styles.buttomText}>电脑版</Text>
            </View>
         </View>


       </View>
     );
   }

   render() {
     return (
       <ListView
         style={{backgroundColor: 'dodgerblue',marginTop:20}}
         dataSource={this.state.dataSource}
         renderRow={this._renderRow}
         renderHeader={this._renderHeader}
         enableEmptySections={true}/* 消除黄色警告 */
         />
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'white'
   },
   icon:{
      width:25,
      height:25,
      marginTop:5,
      alignSelf:'center'
   },
   TfViewStyle:{
     width:screenWidth/4.5,
     height:screenHeight/28,
     margin:5,
     justifyContent:'center',
     flexDirection:'row',
     backgroundColor:'blue'
   },
   TfViewIcon:{
      width:20,
      height:20,
      marginTop:2,
      flex:1
   },
   TfViewText:{
     justifyContent:'center',
      flex:3
   },
   TfViewtText:{
     fontSize:15,
      marginTop:2,
      alignSelf:'center',
      fontWeight:'400'
   },
    TsViewStyle:{
     width:screenWidth/5.8,
     height:screenHeight/28,
     margin:5,
     justifyContent:'center'
   },

   FfIcon:{
     width:20,
      height:20,
      flex:1,
      marginTop:2,
      marginLeft:7
   },
   FfText:{
     color:'#0590e8',
     fontSize:20,
     marginTop:2,
     marginLeft:5,
     fontWeight:'500'
   },
   moreText:{
      color:'gray',
      fontWeight:'300',
      fontSize:15,
      marginLeft:screenWidth/2.5

   },

   FsViewStyle:{
     backgroundColor:'silver',
     width:screenWidth/4.5,
     height:screenHeight/28,
     margin:5,
     justifyContent:'center'

   },
   TsSmallViewStyle:{
     width:screenWidth/5.8,
     height:screenHeight/10,
     margin:5,
     justifyContent:'center',
     backgroundColor:'yellow'

   },

   FtBlueText:{
     fontSize:15,
      marginTop:2,
      alignSelf:'center',
      fontWeight:'500',
      color:'#0590e8'
   },
   FsText:{
      alignSelf:'center'
   },
   buttomText:{
      color:'grey',
      alignSelf:'center',
      fontSize:12
   },

   FsIcon:{
     alignSelf:'center',
     width:30,
     height:30
   },
   FsText:{
     alignSelf:'center',
     marginTop:5
   }

 });
import App from './app';
 AppRegistry.registerComponent('Marry', () => App);

// import Marry from './js/marry';
// AppRegistry.registerComponent('Marry', () => Hello);
