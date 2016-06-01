import React, { Component, PropTypes } from "react";

import { View, Text, Image, StyleSheet, Dimensions, PixelRatio, Platform, TouchableOpacity, TouchableHighlight } from "react-native";
import Img from '../common/Img';

const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const CellType = {
  "WIDE": "wide", // 婚宴酒店, 婚礼策划
  "TALL": "tall", // 婚纱摄影, 新娘跟妆, 婚纱礼服
  "STANDARD": "standard", // 珠宝钻戒, 主持跟拍, 婚礼百货
}

export default class AlbumCell extends Component {
  static propTypes = {
    cellType: PropTypes.string,
  }
  static defaultProps = {
    cellType: CellType.WIDE,
  }
  render() {
    let imageStyle = styles.imageWideStyle;
    let titleStyle = styles.titleWideStyle;
    let detailTitleStyle = styles.detailTitleWideStyle;
    switch (this.props.cellType) {
      case CellType.WIDE:
        imageStyle=styles.imageWideStyle;
        break;
      case CellType.TALL:
        imageStyle=styles.imageTallStyle;
        titleStyle=styles.titleTallStyle;
        detailTitleStyle=styles.detailTitleTallStyle;
        break;
      default:
        imageStyle=styles.imageWideStyle;
    }
    return (
      <TouchableHighlight style={{backgroundColor: 'green', borderBottomWidth: 10, borderBottomColor: 'rgb(247, 247, 247)', backgroundColor: 'white', paddingLeft: 10, paddingRight: 10, paddingTop: 10, alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <Img style={imageStyle}/>
          <View>
            <Text numberOfLines={1} style={titleStyle}>
              [新世界酒店]户外婚礼[新世界酒店]户外婚礼[新世界酒店]户外婚礼
            </Text>
          </View>

          <View>
            <Text numberOfLines={1} style={detailTitleStyle}>
              新世界酒店新世界酒店新世界酒店新世界酒店新世界酒店新世界酒店
            </Text>
          </View>

        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  imageWideStyle: {
    borderRadius: 5,
    width: screenWidth - 20,
    height: 150*(screenWidth - 20)/300,
  },
  titleWideStyle: {
    width: screenWidth - 20,
    height: 25,
    fontSize: 18,
    color: '#666',
  },
  detailTitleWideStyle: {
    width: screenWidth - 20,
    height: 20,
    fontSize: 15,
    color: '#666',
  },

  imageTallStyle: {
    borderRadius: 5,
    width: (screenWidth-40)/2,
    height: 350/270*(screenWidth-40)/2,
  },
  titleTallStyle: {
    width: (screenWidth-40)/2,
    height: 25,
    fontSize: 18,
    color: '#666',
  },
  detailTitleTallStyle: {
    width: (screenWidth-40)/2,
    height: 20,
    fontSize: 15,
    color: '#666',
  },

  imageStandardStyle: {

  },
  titleStandardStyle: {

  },
  detailTitleStandardStyle: {

  },
});
