import Svg, { SvgProps, Path } from "react-native-svg";
const ProfileActiveIcon = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path
      fill="#5EDE99"
      d="M20.104 25.078c6.942 0 12.8 1.128 12.8 5.48 0 4.354-5.897 5.442-12.8 5.442-6.94 0-12.8-1.128-12.8-5.48 0-4.354 5.897-5.442 12.8-5.442Zm0-21.078a8.437 8.437 0 0 1 8.47 8.466c0 4.699-3.768 8.467-8.47 8.467a8.44 8.44 0 0 1-8.47-8.467c0-4.7 3.769-8.466 8.47-8.466Z"
    />
  </Svg>
);
export default ProfileActiveIcon;
