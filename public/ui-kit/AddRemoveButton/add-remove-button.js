const addRemoveButton = (buttonType) => {
    let imgPath = '';
    switch (buttonType) {
        case 'addPoint':
            imgPath = 'icons/add_point.svg';
            break;
        case 'removePoint':
            imgPath = 'icons/remove_point.svg';
            break;
        default:
            imgPath = 'icons/404.svg';
    }

    const template = `
        <div class="uikit__button-add-remove">
            <img src="{{imgPath}}">
        </div>
    `;

    return Mustache.render(template, {imgPath});
};

export default addRemoveButton;
