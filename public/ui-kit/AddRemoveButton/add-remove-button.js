const addRemoveButton = (buttonType) => {
    let imgPath = '';
    switch (buttonType) {
        case 'addPoint':
            imgPath = '/graphics/icons/add_point.svg';
            break;
        case 'removePoint':
            imgPath = '/graphics/icons/remove_point.svg';
            break;
        default:
            imgPath = '/graphics/icons/404.svg';
    }

    const template = `
        <div class="button-add-remove">
            <img src="{{imgPath}}">
        </div>
    `;

    return Mustache.render(template, {imgPath});
};

export default addRemoveButton;
