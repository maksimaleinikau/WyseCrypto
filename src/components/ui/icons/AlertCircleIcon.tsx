import Svg, { SvgProps, Path } from "react-native-svg";
const AlertCircleIcon = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 36.667c9.205 0 16.667-7.462 16.667-16.667 0-9.205-7.462-16.667-16.667-16.667-9.205 0-16.667 7.462-16.667 16.667 0 9.205 7.462 16.667 16.667 16.667ZM20 13.333V20M20 26.667h.017"
    />
  </Svg>
);
export default AlertCircleIcon;
