import Svg, { SvgProps, Path, Mask, G } from "react-native-svg";
const EyeIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill="#ABABAB"
      fillRule="evenodd"
      d="M8 6.427a1.609 1.609 0 1 0 1.608 1.608A1.61 1.61 0 0 0 8 6.427Zm0 4.215a2.61 2.61 0 0 1-2.607-2.607A2.61 2.61 0 0 1 8 5.427a2.611 2.611 0 0 1 2.608 2.608A2.61 2.61 0 0 1 8 10.642Z"
      clipRule="evenodd"
    />
    <Mask
      id="a"
      width={14}
      height={12}
      x={1}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M1.333 2.667h13.334v10.736H1.334V2.667Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#ABABAB"
        fillRule="evenodd"
        d="M2.38 8.035c1.24 2.74 3.329 4.368 5.62 4.369 2.291-.001 4.38-1.63 5.62-4.369C12.38 5.296 10.291 3.668 8 3.667c-2.29 0-4.38 1.63-5.62 4.368Zm5.621 5.369h-.003c-2.757-.002-5.233-1.935-6.624-5.172a.501.501 0 0 1 0-.394c1.39-3.236 3.867-5.169 6.624-5.171h.004c2.757.002 5.233 1.935 6.624 5.17a.495.495 0 0 1 0 .395c-1.39 3.237-3.867 5.17-6.624 5.172Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default EyeIcon;
