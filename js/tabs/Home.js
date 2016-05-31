import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, ListView, ScrollView, RefreshControl, PixelRatio } from 'react-native';

import NavigatorHeader from '../common/NavigatorHeader';
import FaceIcon from '../svg/FaceIcon';
import Logo from '../svg/Logo';
import TravelIconType from '../svg/TravelIcon';
import Channels from '../components/Channels';
import HourglassLoading from '../../HourglassLoading';
import SectionHeaderView from '../common/SectionHeaderView';
import MerchantDetailCell from '../Cell/MerchantDetailCell';
import AlbumCell from '../Cell/AlbumCell';
export default class Home extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2)=>r1 !== r2,
    });
    this.state = {
      isRefreshing: false,
      dataSourceOfActivities: ds.cloneWithRows([{}]),
      dataSourceOfMerchants: ds.cloneWithRows([{}, {}, {}]),
      dataSourceOfAlbum: ds.cloneWithRows([{}, {}, {}, {}, {}, {}, {}]),
    };
  }
  _renderActivityRow = (rowData) => {
    return (
      <MerchantDetailCell style={{}}/>
    );
  }
  _renderMerchantRow = (rowData) => {
    return (
      <MerchantDetailCell style={{width: 80, height: 100, padding: 5}} textContainer={{ height: 30}} textStyle={{fontSize:12 }} imageStyle={{width: 70, height: 70}} title="222222222s"/>
    );
  }
  _renderHeader = ()=> {
    return (
      <View>
        <Channels style={{ backgroundColor: 'white'}} navigator={this.props.navigator}/>
        <ListView
          style={{marginTop: 15, backgroundColor: 'white'}}
          renderRow={this._renderActivityRow}
          dataSource={this.state.dataSourceOfActivities}
          renderHeader={()=><SectionHeaderView title="优惠活动"/>}
          />
        <SectionHeaderView style={{marginTop: 15}} title="推荐商家"/>
        <ListView
          style={{backgroundColor: 'white'}}
          horizontal={true}
          renderRow={this._renderMerchantRow}
          dataSource={this.state.dataSourceOfActivities}
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
    return (<AlbumCell />);
  }
  _renderSeparator = (sectionID, rowID, adjacentRowHighlighted)=>{
    return (<View key={sectionID+rowID} style={{backgroundColor: 'rgb(247, 247, 247)', height: 10}}></View>);
  }
  render() {
    console.log('render Home');
    return (
      <View style={styles.container}>
        <NavigatorHeader leftBarButtonItem={()=>(<Text numberOfLines={1} style={{textAlign:"center", alignItems:"center"}}>武汉</Text>)} titleView={()=><Logo/>}/>
        <ListView
          contentContainerStyle={{justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap'}}
          dataSource={this.state.dataSourceOfAlbum}
          renderHeader={this._renderHeader}
          renderRow={this._renderAlbumRow}
          renderSeparator={this._renderSeparator}
          refreshControl={
            <RefreshControl
              refreshing = {this.state.isRefreshing}
              // onRefresh={this._onRefresh}
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
