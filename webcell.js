import React, { Component, PropTypes } from 'react';
import ReactNative, {
  Navigator,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';


const kScreenWidth  = Dimensions.get('window').width;
const kScreenHeight = Dimensions.get('window').height;

const CellType = {
  Img_Text_4 : "Img_Text_4",
  Text_5 : "Text_5",
  Text_GrayBg_4 : "Text_GrayBg_4",
  Text_Blue_4 : "Text_Blue_4",
  Img_Text_5 : "Img_Text_5"
}

export default class WebView extends Component {
  static propTypes = {
    cellType: PropTypes.string,
    onPress: PropTypes.func,
    title: PropTypes.string,
    detailTitle: PropTypes.string,
    source: Image.propTypes.source,
  }

  static defaultProps = {
    cellType: CellType.Text_5,
  }

  render() {
    let containerStyle = styles.container;
    let buttonStyle = styles.buttonStyle;
    let imageStyle = styles.imageLeftStyle;
    let titleStyle = styles.titleStyle;
    const { source, title } = this.props;
    switch (this.props.cellType) {
      case CellType.Img_Text_4:

        break;
      case CellType.Text_5:
        containerStyle = {width: kScreenWidth/5, height: 30, backgroundColor: '#e7e7e7',}
        break;
      case CellType.Text_GrayBg_4:

        break;
      case CellType.Text_Blue_4:

        break;
      case CellType.Img_Text_5:

        break;
      default:

    }
    return (
      <View style={containerStyle}>
        <TouchableOpacity style={buttonStyle}>
          {source && <Image source={source} style={imageStyle}/>}
          <Text style={titleStyle}>
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: kScreenWidth/4,
    height: 30,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#e7e7e7',

    // padding: 5,
  },
  imageLeftStyle: {
    width: 20,
    height: 20,
    // paddingRight: 5,
    marginRight: 5,
  },
  imageTopStyle: {},
  titleStyle: {
    flex: 1,
    fontSize: 12,
    textAlign: 'center',
  },
  titleBlueStyle: {},
  buttonStyle: {
    // padding: 5,
    // margin: 5,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'pink',
    flexDirection: 'row',
    // marginLeft: 5,
    // marginRight: 5,
    padding: 10,
  },
  buttonGrayBgStyle: {
    padding: 5,
    backgroundColor: 'gray',
  },
});
