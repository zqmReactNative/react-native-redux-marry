import React, { Component } from 'react';

import Svg, {
    Circle,
    G,
    Path,
    Polygon,
} from 'react-native-svg';

export default class Back extends Component {
  render(){
    return (
      <Svg width={9} height={17}>
        <G scale={0.34}>
          <Path stroke="#ff5942" d="M24,3 L3,25 L24,47" strokeWidth={4} strokeCap="round" strokeJoin= "round" fill="none"/>
        </G>
      </Svg>
    );
  }
}
