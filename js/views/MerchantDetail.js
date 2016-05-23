// MerchantDetail.js
// 商品详情

import React, { Component } from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

import NavigatorHeader from "../common/NavigatorHeader";
import DetailHeader from "../components/DetailHeader";

export default class MerchantDetail extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <NavigatorHeader />
          <DetailHeader />
        </ScrollView>
      </View>
    );
  }
}
