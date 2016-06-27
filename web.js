import React, { Component } from 'react';
import ReactNative, {
  Navigator,
  View,
  StyleSheet,
  ListView,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import WebCell from './webcell';

const kScreenWidth  = Dimensions.get('window').width;
const kScreenHeight = Dimensions.get('window').height;


const CellType = {
  Img_Text_4 : "Img_Text_4",
  Text_5 : "Text_5",
  Text_GrayBg_4 : "Text_GrayBg_4",
  Text_Blue_4 : "Text_Blue_4",
  Img_Text_5 : "Img_Text_5"
}

const webs = [
  {
		title : "",
		list:[
			{img:"./Img/baidu.png", title:"百度", cellType: CellType.Img_Text_4},
			{img:"./Img/baidu.png", title:"新浪", cellType: CellType.Img_Text_4},
      {img:"./Img/baidu.png", title:"淘宝", cellType: CellType.Img_Text_4},
			{img:"./Img/baidu", title:"8590", cellType: CellType.Img_Text_4},
      {img:"./Img/baidu", title:"搜狐", cellType: CellType.Img_Text_4},
			{img:"./Img/baidu", title:"微博", cellType: CellType.Img_Text_4},
      {img:"./Img/baidu", title:"天猫", cellType: CellType.Img_Text_4},
			{img:"./images/404", title:"腾讯", cellType: CellType.Img_Text_4},
		],
	},
]

export default class WebView extends Component {

  _getRowData = (dataBlob, sectionID, rowID)=>{
    return dataBlob[rowID];
  }
  _getSectionHeaderData = (dataBlob, sectionID)=>{
    return dataBlob[sectionID];
  }

  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2)=> r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(webs[0].list),
    };
  }
  _renderRow = (rowData) => {
    let img = rowData.img;
    return (
      <WebCell
        title={rowData.title}
        /*source={{uri: rowData.img}}*/
        source={require('./Img/baidu.png')}
        />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.listView}
          renderRow={this._renderRow}
          enableEmptySections={true}
          // renderHeader={this._renderSectionHeader}
          dataSource={this.state.dataSource}
          contentContainerStyle={styles.contentContainerStyle}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1 ,
    backgroundColor: 'white',
  },
  listView: {
    flex: 1,
    backgroundColor: 'white'
  },
  contentContainerStyle: {
    flexDirection: 'row',/*设置横向*/
    flexWrap: 'wrap',/*flexWrap默认值: nowrap*/
    // justifyContent: 'flex-start',/*justifyContent默认值: flex-start*/
  }
});
