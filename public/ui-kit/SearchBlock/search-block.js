const searchBlock = () => {
    const searchQuery = sessionStorage.getItem('searchQuery');
    const template = `
        <nav id="searchActivatedAria" class="searchActivatedAria">
            <div id="searchBlock" class="search-block">
                <div class="search-block__block-img">
                    <img class="block-img__image" src="/graphics/icons/search_grey.svg" alt="">
                </div>
                <div class="search-block__input-block">
                    <input id="searchInput" value="{{searchQuery}}" class="input-block__input-without-border" placeholder="Ресторан или блюдо" type="text">
                </div>
                <div class="search-block__block-img">
                    <img id="closeImg" class="block-img__image" src="/graphics/icons/close.svg" alt="">
                </div>
            </div>
        </nav>
    `;

    return Mustache.render(template, { searchQuery });
}

export default searchBlock;
