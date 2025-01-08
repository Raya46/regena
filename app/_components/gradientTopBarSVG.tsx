import * as React from "react";
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  RadialGradient,
  Stop,
  Filter,
  FeGaussianBlur,
} from "react-native-svg";

const SVGTopBar = (props: SvgProps) => (
  <Svg
    style={{ position: "absolute", left: 0, top: 0 }}
    viewBox="0 0 390 150"
    fill="none"
    {...props}
  >
    <G opacity={0.7}>
      <G filter="url(#filter0_f_4_2046)">
        <Path
          d="M-229.73 203.177C-229.73 203.177 -128.114 -87.9361 192.5 -0.554565C513.114 86.8269 614.73 -204.286 614.73 -204.286"
          stroke="#14B8A6"
          strokeWidth={115.808}
        />
      </G>
      <G filter="url(#filter1_f_4_2046)">
        <Path
          d="M-229.73 203.177C-229.73 203.177 -128.114 -87.9361 192.5 -0.554565C513.114 86.8269 614.73 -204.286 614.73 -204.286"
          stroke="url(#paint0_radial_4_2046)"
          strokeWidth={115.808}
        />
      </G>
    </G>
    <Defs>
      <Filter
        id="filter0_f_4_2046"
        x="-288.234"
        y="-262.79"
        width="961.468"
        height="524.471"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <FeGaussianBlur stdDeviation="25" />
      </Filter>
      <Filter
        id="filter1_f_4_2046"
        x="-288.234"
        y="-262.79"
        width="961.468"
        height="524.471"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <FeGaussianBlur stdDeviation="25" />
      </Filter>

      <RadialGradient
        id="paint0_radial_4_2046"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(234.251 -234.368) rotate(109.242) scale(593.515 569.208)"
      >
        <Stop offset={0.0479167} stopColor="#2DD4BF" />
        <Stop offset={0.504878} stopColor="#14B8A6" stopOpacity={0} />
      </RadialGradient>
    </Defs>
  </Svg>
);

export default SVGTopBar;
