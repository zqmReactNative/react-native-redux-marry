// marry.js
import React, { Component, PropTypes } from 'react';
import ReactNative, { View, StyleSheet, Text, Navigator } from 'react-native';

const ReactNativeART = ReactNative.ART;
const {
    Group,
    Shape,
    // Circle,
    Surface,
    Transform,
    Rectangle,
} = ReactNativeART;

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions';


import Home from './tabs/Home';
import Album from './tabs/Album';
import Merchant from './tabs/Merchant';
import MerchantDetail from './views/MerchantDetail';

import TabNavigator from 'react-native-tab-navigator';
const TabNavigatorItem = TabNavigator.Item;

import Logo from './svg/Logo';
import Back from './svg/Back';

const homeTabTag = 'Home';
const albumTabTag = 'Album';
const merchantTabTag = 'Merchant';
const defaultTabTag = homeTabTag;

// 首页/推荐 tabItem SVG Paths
const homeSVGPaths = [{path:'M13.3,0C7.6,0,2.9,4.7,2.9,10.5c0,1,0.1,2,0.4,3c1.4,5.7,9.2,11.8,9.5,12.1l0.6,0.4l0.5-0.4 c0.4-0.3,9.2-7.2,9.8-13.3v-0.2c0.1-0.5,0.1-1.1,0.1-1.6C23.8,4.7,19.1,0,13.3,0z M21.9,12.1l-0.1,0.9c-1,4.3-6.6,9.2-8.4,10.8    c-1.7-1.5-7.2-6.4-8.3-10.8c-0.2-0.8-0.4-1.6-0.4-2.5c0-4.8,3.9-8.7,8.7-8.7c4.8,0,8.7,3.9,8.7,8.7C22,11,21.9,11.6,21.9,12.1z'},
                      {path:'M16,6.4c-1.3,0-2.1,0.5-2.7,1.1c-0.6-0.6-1.4-1.1-2.7-1.1c-2,0-3.5,1.4-3.5,3.4c0,1.2,0.6,2.4,1.6,3.4 l3.9,3.8c0.1,0.2,0.4,0.3,0.6,0.3c0.2,0,0.5-0.1,0.7-0.3l3.9-3.8c1-1,1.6-2.2,1.6-3.4C19.5,7.8,18,6.4,16,6.4z M16.6,11.9    c0,0-2.5,2.5-3.3,3.2c-0.8-0.8-3.2-3.2-3.2-3.2c-0.7-0.7-1-1.4-1-2c0-0.9,0.6-1.5,1.7-1.5c0.9,0,1.1,0.3,1.8,1.1l0.1,0.1 c0.2,0.1,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l0.1-0.1c0.6-0.8,0.9-1.1,1.8-1.1c0.9,0,1.5,0.6,1.5,1.5 C17.6,10.5,17.2,11.3,16.6,11.9z'}];

// 图库 tabItem SVG Paths
const albumSVGPaths = [{path:'M23.2,1H7C5.4,1,4.2,2.3,4.2,3.8V3L1.9,3.6C0.5,4-0.3,5.4,0.1,6.8l4.2,15.3v0.1c0,1.6,1.3,2.8,2.8,2.8h16.2	c1.5,0,2.8-1.3,2.7-2.9v-1.4v-1.4V3.8C26,2.3,24.7,1,23.2,1z M4.2,17L1.7,7.8C1.3,6.4,2.2,4.9,3.6,4.5l0.6-0.2l0,0V17z M24.7,20.8	c0,1.6-1.3,2.8-2.8,2.8H8.5c-1.5,0-2.8-1.3-2.8-2.8v-0.1L24.7,20.8L24.7,20.8L24.7,20.8z M24.7,19.4h-19V5.2c0-1.6,1.3-2.8,2.8-2.8 h13.4c1.6,0,2.8,1.3,2.8,2.8V19.4L24.7,19.4z'},
                      {path:'M10.9,10.9c1.8,0,3.2-1.4,3.2-3.2s-1.4-3.2-3.2-3.2S7.7,6,7.7,7.8S9.1,10.9,10.9,10.9z M10.9,6	c1,0,1.8,0.8,1.8,1.8s-0.8,1.8-1.8,1.8c-1,0-1.8-0.8-1.8-1.8S9.9,6,10.9,6z'},
                      {path:'M18.2,10.8c-0.1,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.1-0.2-0.1-0.2c-0.3-0.3-0.7-0.3-1,0l-3.7,3.7l-1-1.1	C12,13,11.7,13,11.6,13l-0.1-0.1c-0.3-0.3-0.7-0.3-1,0l-2.3,2.5c-0.3,0.3-0.3,0.7,0,1c0.3,0.3,0.7,0.3,0.9,0l2.1-2.1l1.4,1.4 c0.3,0.3,0.7,0.3,1,0c0.1,0,0.2-0.1,0.3-0.1l3.4-3.4l4.2,4.2c0.3,0.3,0.7,0.3,1,0c0.3-0.3,0.3-0.7,0-1L18.2,10.8z'},];

// 商家 tabItem SVG Paths
const merchantSVGPaths = [{path:'M26,6c0-1.6-1.3-2.9-2.9-2.9h-5.9C16.7,1.4,15,0.2,13,0.2c-2,0-3.6,1.3-4.1,2.9h-6C1.3,3.1,0,4.4,0,6v5h1.8	c-0.2,0.4-0.4,0.9-0.4,1.4v10.2c0,1.6,1.3,2.9,2.9,2.9h17.4c1.6,0,2.9-1.3,2.9-2.9V12.4c0-0.5-0.1-1-0.4-1.4H26V6z M12.9,1.7	c1.1,0,2,0.6,2.4,1.5h-4.8C10.9,2.3,11.9,1.7,12.9,1.7z M23.1,21.4c0,1.5-1.3,2.7-2.9,2.7H5.7c-1.6,0-2.9-1.2-2.9-2.7v-7.5	c0-1.5,1.3-2.7,2.9-2.7h14.5c1.6,0,2.9,1.2,2.9,2.7V21.4z M24.5,9.6H1.3V7.5c0-1.6,1.3-2.9,2.9-2.9h17.4c1.6,0,2.9,1.3,2.9,2.9V9.6	z'},
                         {path:'M15.3,12.9c-0.9,0-1.8,0.4-2.4,1.2c-0.6-0.7-1.4-1.2-2.4-1.2c-1.7,0-3,1.4-3,3.2c0,0.5,0.1,1,0.4,1.4 c1,1.6,4.6,5.3,4.8,5.5c0.1,0.1,0.2,0.1,0.2,0.1c0.1,0,0.1,0,0.2-0.1c0.2-0.2,3.8-3.9,4.8-5.5c0.2-0.4,0.4-0.8,0.4-1.4	C18.4,14.4,17,12.9,15.3,12.9z M16.8,16.8c-0.6,1-2.8,3.3-3.9,4.5C11.7,20,9.6,17.7,9,16.8c-0.1-0.2-0.2-0.4-0.2-0.6	c0-1,0.7-1.8,1.7-1.8c0.7,0,1.2,0.3,1.5,1c0.2,0.3,0.5,0.6,0.9,0.6c0.4,0,0.8-0.2,0.9-0.6c0.4-0.6,0.9-1,1.5-1 c0.9,0,1.8,0.8,1.8,1.8C17,16.3,17,16.6,16.8,16.8z'}];



export default class Marry extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedTab: defaultTabTag,
			isHiddenTabBar: false,
		};
	}

	// Missing parameter,用于不能缺省的参数
  throwIfMissing = ()=> {
    throw new Error('缺少参数');
  }

	// TODO: 使用 Navigator
  _renderNavigatorContent = (routeId='', component=Home)=> {


    return (
      <Navigator
        style={styles.container}
        initialRoute={{ id: routeId, component: component }}

        // renderScene = {this._renderScene}
        renderScene = {(route, navigator)=>{
          if (route.routeId === albumTabTag) {
            this.setState({
              isHiddenTabBar: true,
            });
          }
          const Comp = route.component;
          return <Comp {...route.params} navigator={navigator}/>
          }
        }

        configureScene={(route) => {
            // if (route.sceneConfig) {
            //   return route.sceneConfig;
            // }
            return Navigator.SceneConfigs.FloatFromBottom;
          }
        }
      />
    );
  }

	_tabItemIcon = (selected=false, paths)=>{
    return (
      <Surface
        width = {26}
        height = {30}
        style = {{margin:-3}}
        >
        <Group scale = {0.9}>
          {
            paths.map( (item, index)=>{
              return (
                <Shape key={index}
                  fill={selected? '#ff5942':'#ccc'}
                  d={item.path}
                  />
              );
            } )
          }
        </Group>
      </Surface>
    );
    // return (<Image />);
  }

	// 渲染/设置 tabItem
  _renderTabItem = (title='Tab', tabTag=this.throwIfMissing(), renderIcon=this.throwIfMissing(), renderSelectedIcon, containerView=<View style={[styles.container, {backgroundColor:'red'}]}></View>)=> {
    return (
      <TabNavigator.Item
        title={title}
        selectedTitleStyle={styles.selectedTitleStyle}
        selected={this.state.selectedTab === tabTag}
        onPress={()=>this.setState({selectedTab:tabTag})}
        renderIcon={renderIcon}
        renderSelectedIcon={renderSelectedIcon}
        >
        {containerView}
      </TabNavigator.Item>
    );
  };

  _renderTabNavigator = (route, navigator)=>{
    var tabBarStyle = {};
    var sceneStyle = {};

		if (this.state.isHiddenTabBar) {
      tabBarStyle.height = 0;
      tabBarStyle.overflow = 'hidden';
      sceneStyle.paddingBottom = 0;
    }

    // return (
    //   <TabNavigator ref={(tabbar)=>global.tabbar = tabbar} tabBarStyle={tabBarStyle} sceneStyle={sceneStyle}>
    //     {this._renderTabItem('推荐', homeTabTag,     ()=>this._tabItemIcon(false, homeSVGPaths),     ()=>this._tabItemIcon(true, homeSVGPaths),     this._renderNavigatorContent(homeTabTag, Home))}
    //     {this._renderTabItem('图库', albumTabTag,    ()=>this._tabItemIcon(false, albumSVGPaths),    ()=>this._tabItemIcon(true, albumSVGPaths),    this._renderNavigatorContent(albumTabTag, Album))}
    //     {this._renderTabItem('商家', merchantTabTag, ()=>this._tabItemIcon(false, merchantSVGPaths), ()=>this._tabItemIcon(true, merchantSVGPaths), this._renderNavigatorContent(merchantTabTag, Merchant))}
    //   </TabNavigator>
    // );
    return (
      <TabNavigator {...route.params} navigator={navigator} ref={(tabbar)=>global.tabbar = tabbar} tabBarStyle={tabBarStyle} sceneStyle={sceneStyle}>
        {this._renderTabItem('推荐', homeTabTag,     ()=>this._tabItemIcon(false, homeSVGPaths),     ()=>this._tabItemIcon(true, homeSVGPaths),     <Home navigator={navigator}></Home>)}
        {this._renderTabItem('图库', albumTabTag,    ()=>this._tabItemIcon(false, albumSVGPaths),    ()=>this._tabItemIcon(true, albumSVGPaths),    <Album navigator={navigator}></Album>)}
        {this._renderTabItem('商家', merchantTabTag, ()=>this._tabItemIcon(false, merchantSVGPaths), ()=>this._tabItemIcon(true, merchantSVGPaths), <Merchant navigator={navigator}></Merchant>)}
      </TabNavigator>
    );
  }

  _renderScene = (route, navigator)=> {
    console.log("routeId : "+route.routeId);
    const Comp = route.component;
    if (Comp) {
      return <Comp {...this.props} {...route.params} navigator={navigator}/>
    }
    switch (route.routeId) {
      case "TabNavigator":
        console.log("TabNavigator");
        return (this._renderTabNavigator(route, navigator));
        break;
      case homeTabTag:
        console.log("homeTabTag");
        return (<Home {...route.params} navigator={navigator}/>);
        break;
      case albumTabTag:
        console.log("albumTabTag");
        return (<Album {...route.params} navigator={navigator}/>);
        break;
      case "MerchantDetail":
        return (<MerchantDetail {...route.params} navigator={navigator}/>);
        break;
      default:
        return (this._renderTabNavigator(route, navigator));
    }

  }

	render() {


		return (
      // this._renderTabNavigator()
      <Navigator
        initialRoute={{routeId: "TabNavigator"}}
        renderScene={this._renderScene}
        configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.PushFromRight;
          }
        }
        />
		);
    // return (<View />);

	}
}

const styles = StyleSheet.create({
	container:{
    flex:1,
  },
  selectedTitleStyle:{
    color:'#ff5942',
  },
});


// function mapStateToProps(state) {
//   return {
//     home: state.home,
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(Actions, dispatch)
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Marry)
