const iconImage = (imgPath, restName) => {
    const template = `
        <img class="rest_img" src={{imgPath}} alt={{restName}}>
    `;
    return Mustache.render(template, {imgPath, restName});
};

export default iconImage;
