import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
const TickSquareIcon = (props: SvgProps) => (
  <Svg width={56} height={56} fill="none" {...props}>
    <Rect width={56} height={56} fill="#F5FFF9" rx={10} />
    <Path
      fill="#5EDE99"
      d="M40.152 0C49.644 0 56 6.664 56 16.576v22.879C56 49.336 49.644 56 40.152 56H15.876C6.384 56 0 49.336 0 39.455V16.576C0 6.664 6.384 0 15.876 0h24.276Zm-.448 19.6a2.467 2.467 0 0 0-3.472 0L24.668 31.164l-4.9-4.9a2.467 2.467 0 0 0-3.472 0c-.952.952-.952 2.492 0 3.472l6.664 6.636c.476.476 1.092.7 1.708.7a2.41 2.41 0 0 0 1.736-.7l13.3-13.3c.952-.952.952-2.492 0-3.472Z"
    />
  </Svg>
);
export default TickSquareIcon;
