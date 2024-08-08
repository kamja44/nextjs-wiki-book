import colors from "./colors";
import fontSizes from "./fontSizes";
import { letterSpacings } from "./letterSpaceings";
import lineHeights from "./lineHeight";
import space from "./space";

export const theme = {
  space,
  fontSizes,
  letterSpacings,
  lineHeights,
  colors,
} as const;
