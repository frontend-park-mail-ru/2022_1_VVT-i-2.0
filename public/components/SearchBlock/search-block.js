const searchBlock = () => {
    const template = `
        <div class="search-block">
            <div class="search-block__block-img">
                <img class="block-img__image" src="/graphics/icons/search.svg" alt="">
            </div>
            <div class="search-block__input">
                <input type="text">
            </div>
            <div class="search-block__block-img">
                <img class="block-img__image" src="/graphics/icons/close.svg" alt="">
            </div>
        </div>
    `;

    return Mustache.render(template, {});
}

export default searchBlock;
