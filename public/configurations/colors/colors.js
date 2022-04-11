const lightTheme = {
    primary: '#17D685',
    warning: '#FF3985',
    black: '#212121',
    grey: '#DEDEDE',
    lightGrey: '#F6F6F6',
    white: '#FFFFFF',
    warm: '#BEB6AE',
}

function setThemeColors(theme) {
    let AppColors = {};

    Object.entries(theme).forEach(([key, value]) => {
        AppColors.key = value;
    })

    return AppColors;
}

const COLORS = setThemeColors(lightTheme);

export default COLORS;
