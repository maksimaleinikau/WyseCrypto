import * as React from "react";
import Svg, { SvgProps, Circle } from "react-native-svg";
const RadioButtonActiveIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle cx={12} cy={12} r={10} fill="#5EDE99" />
    <Circle cx={12} cy={12} r={6} fill="#FEFEFE" />
  </Svg>
);
export default RadioButtonActiveIcon;
