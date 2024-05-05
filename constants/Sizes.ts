import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

export const appDimension = {
  heightScreen: height,
  widthScreen: width,
};

export const appFontSize = {
  headerFs: height < 960 && width < 460 ? 18 : 26,
  normalFs: height < 960 && width < 460 ? 12 : 20,
};
