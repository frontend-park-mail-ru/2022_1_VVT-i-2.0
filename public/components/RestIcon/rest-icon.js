import UIKIT from '../../ui-kit/import.js';

const restIcon = (imgPath, restName, timeToDeliver, price, rating) => {
    return UIKIT.iconImage(imgPath, restName) + UIKIT.metaInformation(restName, timeToDeliver, price, rating);
};

export default restIcon;
