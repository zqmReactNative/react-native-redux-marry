// MerchantDetail.js
// 商品详情

import React, { Component } from "react";
import { ScrollView, View, Text, Image, StyleSheet, RefreshControl, TouchableOpacity } from "react-native";

import NavigatorHeader from "../common/NavigatorHeader";
import DetailHeader from "../components/DetailHeader";
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from "react-native-scrollable-tab-view";


export default class MerchantDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRefreshing: false,
    };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'rgb(247, 247, 247)'}}>
        <NavigatorHeader title='水木年华' onBackClick={this.props.navigator.pop()}/>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing = {this.state.isRefreshing}
              // onRefresh={this._onRefresh}
              tintColor='red'
            />
          }
        >
          <DetailHeader />

          {/*Scroll Table*/}
          <ScrollableTabView
            style={{marginTop: 18}}
            initialPage={0}
            renderTabBar={() => <DefaultTabBar textStyle={{fontSize: 14,  }} underlineColor="red" backgroundColor="white" activeTextColor="red" inactiveTextColor="black"/>}
            >
            <View tabLabel="图库">
              <Text>
                1111
              </Text>
            </View>

            <View tabLabel="优惠">
              <Text>
                2222
              </Text>
            </View>
          </ScrollableTabView>

        </ScrollView>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>免费咨询</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    height: 49,
    backgroundColor: '#ff5942',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },

});
