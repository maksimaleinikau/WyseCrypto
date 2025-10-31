import Svg, { SvgProps, Path } from "react-native-svg";
const InfoCircleIcon = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path
      fill="#F26666"
      fillRule="evenodd"
      d="M4.304 20c0-8.83 7.168-16 16-16 8.848 0 16 7.17 16 16 0 8.834-7.152 16-16 16-8.832 0-16-7.166-16-16Zm14.592-6.064c0-.766.64-1.408 1.408-1.408.768 0 1.392.642 1.392 1.408v7.072c0 .77-.624 1.392-1.392 1.392a1.406 1.406 0 0 1-1.408-1.392v-7.072ZM20.32 27.49a1.41 1.41 0 0 1-1.408-1.408c0-.768.624-1.392 1.392-1.392.784 0 1.408.624 1.408 1.392 0 .768-.624 1.408-1.392 1.408Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default InfoCircleIcon;
