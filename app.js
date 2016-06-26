import React, { Component } from 'react';
import ReactNative, {
  Navigator,
  View,
  ListView,
  Text,
  Image
} from 'react-native';

import WebView from './web';

export default class App extends Component {

  _renderScene = (route, navigator)=> {
    const Comp = route.component;
    if (Comp) {
      return <Comp {...route.params} navigator={navigator}/>
    }
    else {
      return (
        <View style={{flex: 1}}>
        </View>
      );
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{component: WebView}}
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
  }
}
