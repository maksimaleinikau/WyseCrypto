import * as React from "react";
import Svg, { SvgProps, Path, Mask, G } from "react-native-svg";
const EyeOffIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill="#ABABAB"
      fillRule="evenodd"
      d="M6.507 10.412a.496.496 0 0 1-.353-.147 2.583 2.583 0 0 1-.764-1.84c0-1.44 1.171-2.61 2.61-2.61.692 0 1.364.279 1.843.766a.5.5 0 0 1-.713.702A1.591 1.591 0 0 0 8 6.814c-.888 0-1.61.723-1.61 1.612 0 .427.168.83.47 1.132a.5.5 0 0 1-.353.854ZM8.378 10.994a.5.5 0 0 1-.089-.992 1.606 1.606 0 0 0 1.288-1.291.5.5 0 0 1 .985.177 2.613 2.613 0 0 1-2.094 2.098.512.512 0 0 1-.09.008Z"
      clipRule="evenodd"
    />
    <Mask
      id="a"
      width={12}
      height={10}
      x={1}
      y={3}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M1.333 3.083h10.724v9.399H1.333V3.083Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#ABABAB"
        fillRule="evenodd"
        d="M4.436 12.482a.503.503 0 0 1-.308-.107C3 11.49 2.048 10.192 1.374 8.622a.497.497 0 0 1 0-.395c.68-1.576 1.64-2.88 2.773-3.772 2.31-1.829 5.387-1.835 7.72.013a.5.5 0 1 1-.62.784c-1.977-1.565-4.525-1.56-6.48-.012-.958.754-1.78 1.851-2.387 3.186.6 1.326 1.416 2.417 2.366 3.162a.5.5 0 0 1-.31.894Z"
        clipRule="evenodd"
      />
    </G>
    <Mask
      id="b"
      width={10}
      height={9}
      x={5}
      y={5}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M5.812 5.828h8.854v7.965H5.813V5.828Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#b)">
      <Path
        fill="#ABABAB"
        fillRule="evenodd"
        d="M8 13.793a5.845 5.845 0 0 1-1.846-.3.5.5 0 0 1 .316-.95 4.83 4.83 0 0 0 1.53.25c2.285 0 4.374-1.628 5.62-4.369a9.666 9.666 0 0 0-1.054-1.796.5.5 0 0 1 .799-.601c.482.64.906 1.381 1.26 2.199a.495.495 0 0 1 0 .396C13.228 11.86 10.751 13.793 8 13.793Z"
        clipRule="evenodd"
      />
    </G>
    <Mask
      id="c"
      width={12}
      height={13}
      x={2}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M2.242 2.667h11.516v11.515H2.242V2.667Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#c)">
      <Path
        fill="#ABABAB"
        fillRule="evenodd"
        d="M2.742 14.182a.5.5 0 0 1-.353-.853L12.905 2.813a.5.5 0 1 1 .706.707L3.095 14.036a.496.496 0 0 1-.353.146Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default EyeOffIcon;
