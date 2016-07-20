import React, { Component, PropTypes } from 'react';
import { Dimensions, View, StyleSheet, Text, ListView, ScrollView, RefreshControl, PixelRatio } from 'react-native';
import { connect } from 'react-redux';

import NavigatorHeader from '../common/NavigatorHeader';
import FaceIcon from '../svg/FaceIcon';
import Logo from '../svg/Logo';
import TravelIconType from '../svg/TravelIcon';
import Channels from '../components/Channels';
import HourglassLoading from '../../HourglassLoading';
import SectionHeaderView from '../common/SectionHeaderView';
import MerchantDetailCell from '../Cell/MerchantDetailCell';
import AlbumCell from '../Cell/AlbumCell';
import ActivityCell from '../Cell/ActivityCell';
import ActivityDetailView from '../detail/ActivityDetailView';

import {fetchHomeData} from '../actions/home';

const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

let resultsCache = {
  activity:[],
  shop:[],
  cases:[],
};
const url_home = "http://newapi.deyi.com/wedding/api/index";
const url_request = {
  method:'POST',
  body:JSON.stringify({

  }),
}

class Home extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2)=>r1 !== r2,
    });
    this.state = {
      isLoading:false,
      isRefreshing: true,
      dataSourceOfActivities: ds.cloneWithRows([{}]),
      dataSourceOfMerchants: ds.cloneWithRows([{}, {}, {}]),
      dataSourceOfAlbum: ds.cloneWithRows([{}, {}, {}, {}, {}, {}, {}]),
    };
    this.dataSourceOfActivities = ds;
    this.dataSourceOfMerchants = ds;
    this.dataSourceOfAlbum = ds;

  }
  componentDidMount() {
    this._onRefresh();
  }
  _onRefresh = ()=>{
    // this._getNetworkData();
    const {dispatch} = this.props;
    dispatch(fetchHomeData());
  };
  _getNetworkData = ()=>{

    fetch(url_home,url_request)
    .then((response)=>response.json())
    .then((responseData)=>{

      resultsCache.activity = responseData.data.activity;
      resultsCache.shop = responseData.data.shop;
      resultsCache.cases = responseData.data.cases;
      console.log("resultsCache.activity: "+resultsCache.activity);
      console.log("resultsCache.shop: "+resultsCache.shop);
      // ERROR!错误!
      // this.setState = {
      //   isRefreshing:false,
      //   dataSource:this.state.dataSource.cloneWithRows(["r 0", "r 1", "r2", "r3", "r4"]),
      // };
      this.setState({
        isRefreshing:false,
        dataSourceOfActivities:this.state.dataSourceOfActivities.cloneWithRows(resultsCache.activity),
        dataSourceOfMerchants:this.state.dataSourceOfMerchants.cloneWithRows(resultsCache.shop),
        dataSourceOfAlbum: this.state.dataSourceOfAlbum.cloneWithRows(resultsCache.cases),
      });
    })
    .catch((error)=>{
      resultsCache.activity = Array(2);
      resultsCache.shop = Array(4);
      resultsCache.cases = [];
      this.setState({
        isRefreshing:false,
        dataSourceOfActivities:this.state.dataSourceOfActivities.cloneWithRows(resultsCache.activity),
        dataSourceOfMerchants:this.state.dataSourceOfMerchants.cloneWithRows(resultsCache.shop),
        dataSourceOfAlbum: this.state.dataSourceOfAlbum.cloneWithRows(resultsCache.cases),
      });
    })
  }
  _renderActivityRow = (rowData) => {
    const {navigator} = this.props;
    return (
      <ActivityCell
        style={{}}
        source={{uri:rowData.cover}}
        cover={rowData.cover}
        title={rowData.title}
        shopname={rowData.shopname}
        shopId={rowData.shopid}
        onPress={(shopid)=>navigator.push({component: ActivityDetailView})}
        />
    );
  }
  _renderMerchantRow = (rowData) => {
    return (
      <MerchantDetailCell
        style={{width: 80, height: 100, padding: 5}}
        textContainer={{ height: 30}}
        textStyle={{fontSize:12 }}
        imageStyle={{width: 70, height: 70, borderRadius: 3}}
        source={{uri:rowData.logo}}
        title={rowData.shopname}
        onPress={()=>{this.props.navigator.push({routeId: 'MerchantDetail', params: {source:{uri:rowData.logo}, level: rowData.level, shopid: rowData.shopid, shopname: rowData.shopname} })}}
        />
    );
  }
  _renderHeader = ()=> {
    const {home} = this.props;
    return (
      <View style={{width: screenWidth}}>
        <Channels style={{ backgroundColor: 'white'}} navigator={this.props.navigator}/>
        <ListView
          style={{marginTop: 15, backgroundColor: 'white'}}
          renderRow={this._renderActivityRow}
          dataSource={this.dataSourceOfActivities.cloneWithRows(home.activity)}
          renderHeader={()=><SectionHeaderView title="优惠活动"/>}
          enableEmptySections={true}
          />
        <SectionHeaderView style={{marginTop: 15}} title="推荐商家"/>
        <ListView
          style={{backgroundColor: 'white'}}
          horizontal={true}
          renderRow={this._renderMerchantRow}
          dataSource={this.dataSourceOfMerchants.cloneWithRows(home.shop)}
          enableEmptySections={true}
          />
        <View style={{backgroundColor:'white', marginTop: 15, height: 30, borderBottomWidth: 1/PixelRatio.get(), borderBottomColor: 'red'}}>
        </View>

      </View>
    );
  }
  _renderAlbumRow = (rowData, sectionID, rowID, highlightRow) => {
    // return (
    //   <View style={{height: 60, width: 100, backgroundColor: 'pink', padding: 5, margin: 3,}}>
    //     <Text>
    //       _renderAlbumRow
    //     </Text>
    //   </View>
    // );
    return (<AlbumCell cellType="tall" title={rowData.subject} detailTitle={rowData.shopname} source={{uri:rowData.cover}}/>);
  }
  _renderSeparator = (sectionID, rowID, adjacentRowHighlighted)=>{
    return (<View key={sectionID+rowID} style={{backgroundColor: 'red', height: 10}}></View>);
  }
  render() {
    console.log('render Home');
    const {home, actions} = this.props;
    return (
      <View style={styles.container}>
        <NavigatorHeader leftBarButtonItem={()=>(<Text numberOfLines={1} style={{textAlign:"center", alignItems:"center"}}>武汉</Text>)} titleView={()=><Logo/>}/>
        <ListView
          contentContainerStyle={{justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap'}}
          dataSource={this.dataSourceOfAlbum.cloneWithRows(home.cases)}
          renderHeader={this._renderHeader}
          renderRow={this._renderAlbumRow}
          enableEmptySections={true}
          // renderSeparator={this._renderSeparator}
          refreshControl={
            <RefreshControl
              refreshing = {home.isRefreshing}
              onRefresh={this._onRefresh}
              tintColor='red'
            />
          }
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f6f6f6',
    // backgroundColor: 'white',
  },
  scrollViewContainer: {
    flex: 1
  },
});

function mapStateToProps(state) {
  const { home } = state;
  return {
    home
  }
}

export default connect(mapStateToProps)(Home)
