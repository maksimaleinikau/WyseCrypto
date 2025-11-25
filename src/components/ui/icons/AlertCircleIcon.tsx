import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const AlertCircleIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#5D5C5D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM12 8v4M12 16h.01"
    />
  </Svg>
);
export default AlertCircleIcon;
