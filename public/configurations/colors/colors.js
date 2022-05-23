const lightTheme = {
  primary: "#17D685",
  warning: "#FF3985",
  black: "#212121",
  grey: "#DEDEDE",
  lightGrey: "#F6F6F6",
  greyBrown: "#8F8A8A",
  white: "#FFFFFF",
  warm: "#BEB6AE",
};

function setThemeColors(theme) {
  let AppColors = {};

  Object.entries(theme).forEach(([key, value]) => {
    AppColors.key = value;
  });

  return AppColors;
}

const COLORS = lightTheme;

export default COLORS;
