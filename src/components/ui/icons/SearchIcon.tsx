import * as React from "react";
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg";
const SearchIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Mask
      id="a"
      width={14}
      height={14}
      x={1}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M1.333 1.333h12.985v12.985H1.333V1.333Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#5EDE99"
        fillRule="evenodd"
        d="M7.826 2.333a5.498 5.498 0 0 0-5.493 5.492 5.499 5.499 0 0 0 5.493 5.493 5.499 5.499 0 0 0 5.492-5.493 5.498 5.498 0 0 0-5.492-5.492Zm0 11.985a6.5 6.5 0 0 1-6.493-6.493 6.5 6.5 0 0 1 6.493-6.492 6.499 6.499 0 0 1 6.492 6.492 6.5 6.5 0 0 1-6.492 6.493Z"
        clipRule="evenodd"
      />
    </G>
    <Mask
      id="b"
      width={4}
      height={5}
      x={11}
      y={11}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M11.493 11.805h3.35v3.343h-3.35v-3.343Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#b)">
      <Path
        fill="#5EDE99"
        fillRule="evenodd"
        d="M14.343 15.148a.5.5 0 0 1-.354-.146l-2.349-2.343a.5.5 0 0 1 .707-.709l2.349 2.344a.5.5 0 0 1-.353.854Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SearchIcon;
