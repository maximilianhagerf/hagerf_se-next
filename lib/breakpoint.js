import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);
// export const getBreakpointValue = (value: string): number =>   parseInt(fullConfig.theme.screens[value].replace('px', ''), 10);

export const getBreakpointValue = (value) =>
  +fullConfig.theme.screens[value].slice(
    0,
    fullConfig.theme.screens[value].indexOf("px")
  );
