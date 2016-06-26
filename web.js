import React, { Component } from 'react';
import ReactNative, {
  Navigator,
  View,
  StyleSheet,
  ListView,
  Text,
  Image,
} from 'react-native';

export default class WebView extends Component {
  constructor(props) {
    super(props);
    let _getRowData = (dataBlob, sectionID, rowID)=>{
  		return dataBlob[rowID];
		}
		let _getSectionHeaderData = (dataBlob, sectionID)=>{
  		return dataBlob[sectionID];
		}
    let ds = new ListView.DataSource({
      // getRowData: _getRowData,
			// getSectionHeaderData: _getSectionHeaderData,
      rowHasChanged: (r1, r2)=> r1 !== r2,
      // sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });
    this.state = {
      dataSource: ds.cloneWithRows([{}, {}, {}, {}]),
    };
  }
  _renderRow = (rowData, sectionID, rowID, highlightRow) => {
    return (
      <View style={{width: 100, height: 40, backgroundColor: 'gray'}}>
        <Text>
          xxxx
        </Text>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.listView}
          renderRow={this._renderRow}
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
