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
  WebView
} from 'react-native';

const kScreenWidth  = Dimensions.get('window').width;
const kScreenHeight = Dimensions.get('window').height;

export default class WebDetail extends Component {
  render() {
    const {url} = this.props;
    console.log(url);
    return (
      <View style={styles.container}>
        <View style={styles.bar}>
          <View style={{height: 20, width: kScreenWidth, backgroundColor: 'pink'}}>
          </View>
          <View style={{flex: 1, width: kScreenWidth, paddingLeft: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text
              onPress={()=>{
                this.props.navigator && this.props.navigator.pop()
              }}
              style={{fontSize: 12, color: 'white'}}
              >
              返回
            </Text>
          </View>

        </View>
        <WebView
          style={styles.webview}
          source={{uri: url}}
          />
      </View>

    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bar: {
    height: 64,
    alignItems: 'center',
    // justifyContent: 'space-between',
    backgroundColor: 'rgb(14, 140, 226)',
  },
  webview: {
    flex: 1,
  },
});
