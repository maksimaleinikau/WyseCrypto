import Svg, { SvgProps, Path } from "react-native-svg";
const TickSquareIcon = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path
      fill="#5EDE99"
      d="M27.248 4c5.424 0 9.056 3.808 9.056 9.472v13.074c0 5.646-3.632 9.454-9.056 9.454H13.376c-5.424 0-9.072-3.808-9.072-9.454V13.472C4.304 7.808 7.952 4 13.376 4h13.872Zm-.256 11.2a1.41 1.41 0 0 0-1.984 0L18.4 21.808l-2.8-2.8a1.41 1.41 0 0 0-1.984 0 1.41 1.41 0 0 0 0 1.984l3.808 3.792c.272.272.624.4.976.4.368 0 .72-.128.992-.4l7.6-7.6a1.41 1.41 0 0 0 0-1.984Z"
    />
  </Svg>
);
export default TickSquareIcon;
