import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const InfoCircleIcon = (props: SvgProps) => (
  <Svg width={64} height={64} fill="none" {...props}>
    <Path
      fill="#F37575"
      fillRule="evenodd"
      d="M2 32C2 15.443 15.44 2 32 2c16.59 0 30 13.443 30 30 0 16.563-13.41 30-30 30C15.44 62 2 48.563 2 32Zm27.36-11.37c0-1.437 1.2-2.64 2.64-2.64 1.44 0 2.61 1.203 2.61 2.64v13.26A2.61 2.61 0 0 1 32 36.5c-1.44 0-2.64-1.167-2.64-2.61V20.63Zm2.67 25.413c-1.47 0-2.64-1.2-2.64-2.64 0-1.44 1.17-2.61 2.61-2.61 1.47 0 2.64 1.17 2.64 2.61s-1.17 2.64-2.61 2.64Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default InfoCircleIcon;
