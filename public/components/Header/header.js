import UIKIT from '../../ui-kit/import.js';

const header = (auth = false, customImgPath = '', isOrderingPage = false) => {
    const address = localStorage.getItem('address');

    const template = `
        <header class="page-header">
            <nav class="page-header__button page-header__button-main" data-section="main">
                <img src="/graphics/icons/delivery_icon.svg" data-section="main">
                <a class="button__controller" data-section="main">Delivery Club</a>
            </nav>
            
            {{#isOrderingPage}}
                <nav class="page-header__button page-header__back-button">
                    {{&backToMenu}}
                </nav>
            {{/isOrderingPage}}
            
            {{^isOrderingPage}}
                <nav id="search" class="page-header__button page-header__button-search" data-section="suggests">
                    <img src="/graphics/icons/address.svg" data-section="suggests">
                    <span data-section="suggests">
                        <input
                            id="suggestsSearch"
                            class="page-header__suggests-input"
                            value="{{address}}"
                        >
                    </span>
                </nav>
                {{#auth}}
                    <nav id="profilePreviewButton" class="page-header__button" data-section="profilePreview">
                        {{#customImgPath}}
                            <img class="button__avatar-img" src="{{customImgPath}}" data-section="profilePreview">
                        {{/customImgPath}}
    
                        {{^customImgPath}}
                            <img src="/graphics/icons/profile.svg" data-section="profilePreview">
                        {{/customImgPath}}
    
                        <a class="button__controller" data-section="profilePreview">Профиль</a>
                    </nav>
                    <nav id="shoppingCartButton" class="page-header__button page-header__button-cart" data-section="shoppingCart">
                        <img src="/graphics/icons/shopping_cart.svg" data-section="shoppingCart">
                        <a class="button__controller" data-section="shoppingCart">Корзина</a>
                    </nav>
                {{/auth}}
                {{^auth}}
                    <nav class="page-header__button" data-section="login">
                        <img src="/graphics/icons/profile.svg" data-section="login">
                        <a class="button__controller" data-section="login">Войти</a>
                    </nav>
                {{/auth}}
            {{/isOrderingPage}}
        </header>
    `;

    return Mustache.render(template, {
        auth, customImgPath, isOrderingPage, address,
        backToMenu() {
            return UIKIT.backButton('Обратно в меню', 'products');
        }
    });
};

export default header;
