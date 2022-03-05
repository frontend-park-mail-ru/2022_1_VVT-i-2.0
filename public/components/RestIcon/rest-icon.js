import UIKIT from '../../ui-kit/import.js';

const restIcon = (imgPath, restName, timeToDeliver, price, rating) => {
    return `
        <div class="rest_icon">
            ${UIKIT.iconImage(imgPath, restName)}
            ${UIKIT.metaInformation(restName, timeToDeliver, price, rating)}
        </div>
    `;
};

export default restIcon;
