import Svg, { SvgProps, Path } from "react-native-svg";
const TimeCircleIcon = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path
      fill="#EFBE24"
      d="M20.304 4c8.848 0 16 7.168 16 16 0 8.848-7.152 16-16 16-8.832 0-16-7.152-16-16 0-8.832 7.168-16 16-16Zm-.56 7.888c-.656 0-1.2.528-1.2 1.2v8.08c0 .416.224.8.592 1.024l6.272 3.744a1.187 1.187 0 0 0 1.648-.416c.336-.56.16-1.296-.416-1.648l-5.696-3.392v-7.392c0-.672-.544-1.2-1.2-1.2Z"
    />
  </Svg>
);
export default TimeCircleIcon;
