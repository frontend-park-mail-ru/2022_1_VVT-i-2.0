const header = (auth = false, customImgPath = '') => {
    const template = `
        <header class="page-header">
            <div class="page-header__button" data-section="main">
                <img src="/graphics/icons/delivery_icon.svg" data-section="main">
                <a class="button__controller" data-section="main">Delivery Club</a>
            </div>
            <div id="search" class="page-header__button page-header__button-search" data-section="suggests">
                <img src="/graphics/icons/address.svg" data-section="addressSuggester" data-section="suggests">
                <span data-section="suggests">
                    Москва, 4-й Вятский переулок, 18к3, кв. 100
                </span>
            </div>
            {{#auth}}
                <div class="page-header__button" data-section="profilePreview">
                {{#customImgPath}}
                    <img class="page-header__avatar" src="{{customImgPath}}" data-section="profilePreview">
                {{/customImgPath}}
                {{^customImgPath}}
                    <img src="/graphics/icons/profile.svg" data-section="profilePreview">
                {{/customImgPath}}
                    <a class="button__controller" data-section="profilePreview">Профиль</a>
                </div>
                <div id="button-shopping-cart" class="page-header__button page-header__button-cart" data-section="shoppingCart">
                    <img src="/graphics/icons/shopping_cart.svg" data-section="shoppingCart">
                    <a class="button__controller" data-section="shoppingCart">Корзина</a>
                </div>
            {{/auth}}
            {{^auth}}
                <div class="page-header__button" data-section="login">
                    <img src="/graphics/icons/profile.svg" data-section="login">
                    <a class="button__controller" data-section="login">Войти</a>
                </div>
            {{/auth}}
        </header>
    `;

    return Mustache.render(template, { auth, customImgPath });
};

export default header;
