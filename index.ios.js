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


// import App from './app';
// AppRegistry.registerComponent('Marry', () => App);

// import Marry from './js/marry';
// AppRegistry.registerComponent('Marry', () => Marry);

import Root from './js/root';
AppRegistry.registerComponent('Marry', () => Root);
