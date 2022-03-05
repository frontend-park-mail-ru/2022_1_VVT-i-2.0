const iconImage = (imgPath, restName) => {
    return `
        <img class="rest_img"
         src=${imgPath}
         alt=${restName}>
    `;
};

export default iconImage;
