// Stars.js

import React,{
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import Svg, {
    Circle,
    G,
    Path,
    Polygon,
} from 'react-native-svg';

class Star extends Component {

  static propTypes = {
    ...View.propTypes,
    active:PropTypes.bool,
  };

  static defaultProps = {
    active:false,
  };

  render(){
    return (
      <View style={styles.box} shouldRasterizeIOS={true}>
        <Svg
          width={50}
          height={50}
          >
          <G
            scale={0.23}
            >
            <Path
              fill={this.props.active?"#ff5942":"#ccc"}
              d="M46.31,0H3.69C1.63,0,0,1.63,0,3.69v42.63C0,48.37,1.63,50,3.69,50h42.63c2.05,0,3.69-1.63,3.69-3.69V3.69 C50,1.63,48.37,0,46.31,0z M44.5,22.92l-7.76,7.65l1.8,10.61c0.18,1.07-0.29,2.14-1.21,2.77c-0.51,0.34-1.1,0.52-1.69,0.52 c-0.49,0-0.98-0.12-1.42-0.35l-9.23-4.75l-9.23,4.75c-0.44,0.24-0.94,0.35-1.42,0.35c-0.6,0-1.19-0.17-1.69-0.52 c-0.92-0.63-1.38-1.69-1.21-2.77l1.8-10.61l-7.76-7.65c-0.77-0.76-1.04-1.86-0.69-2.87c0.35-1.01,1.25-1.73,2.34-1.9l10.6-1.55 l4.6-9.43c0.49-1,1.52-1.62,2.66-1.62c1.15,0,2.18,0.64,2.66,1.62l4.6,9.43l10.59,1.55c1.09,0.16,1.99,0.9,2.34,1.9 C45.53,21.06,45.27,22.16,44.5,22.92z"
              />

          </G>

        </Svg>
      </View>
    );
  }


}

export default class Stars extends Component {

  static propTypes = {
    ...View.propTypes,
    count:PropTypes.number,
  };

  static defaultProps = {
    count:0,
  }



  _getStars = (activeCount=0, starsCount=5)=>{

    var stars=[];
    for (var i = 0; i < activeCount; i++) {
      stars.push({active:true})
    }
    for (var i = activeCount; i < starsCount; i++) {
      stars.push({active:false})
    }
    return (
      <View style={styles.container}>
        {
          stars.map(
            (item, index)=>{
              return (
                <Star key={"star-"+index+"-"+item.active} active={item.active}/>
              );
            }
          )
        }
      </View>
    );
  }

  render(){
    return (
      this._getStars(this.props.count)
    );
  }



}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row"
  },
  box:{
    width:13.5,
    height:13.5
  }
});
