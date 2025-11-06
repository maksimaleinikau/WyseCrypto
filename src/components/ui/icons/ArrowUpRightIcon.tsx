import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ArrowUpRightIcon = (props: SvgProps) => (
  <Svg width={14} height={14} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.083 9.917 5.834-5.834M4.083 4.083h5.834v5.834"
    />
  </Svg>
);
export default ArrowUpRightIcon;
