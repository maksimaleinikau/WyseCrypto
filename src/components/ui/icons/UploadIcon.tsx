import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const UploadIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      fill="#5EDE99"
      d="M1.333 19.333a8.661 8.661 0 0 1 4.086-7.358 10.668 10.668 0 0 1 21.162 0 8.667 8.667 0 0 1-3.914 16L9.333 28c-4.474-.365-8-4.104-8-8.667Zm21.13 5.983a6 6 0 0 0 2.708-11.079l-1.076-.67-.16-1.256a8.001 8.001 0 0 0-15.871 0l-.16 1.256-1.073.67a6 6 0 0 0 2.705 11.079l.23.017h12.467l.23-.017Zm-5.13-7.983v5.334h-2.666v-5.334h-4L16 10.667l5.333 6.666h-4Z"
    />
  </Svg>
);
export default UploadIcon;
