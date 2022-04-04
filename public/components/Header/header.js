const header = (auth = false) => {
    const template = `
        <header>
            <div data-section="main">
                <img src="icons/delivery_icon.svg" data-section="main">
                <a data-section="main">Delivery Club</a>
            </div>
            <div id="search" class="address-input__wrap">
                <img src="icons/address.svg" data-section="addressSuggester">
                <span class="address-input__location">
                    Москва, 4-й Вятский переулок, 18к3, кв. 100
                </span>
            </div>
            {{#auth}}
                <div data-section="profilePreview">
                    <img src="icons/profile.svg" data-section="profilePreview">
                    <a data-section="profilePreview">Профиль</a>
                </div>
                <div id="button-shopping-cart" data-section="shoppingCart">
                    <img src="icons/shopping_cart.svg" data-section="shoppingCart">
                    <a data-section="shoppingCart">Корзина</a>
                </div>
            {{/auth}}
            {{^auth}}
                <div data-section="login">
                    <img src="icons/profile.svg" data-section="login">
                    <a data-section="login">Войти</a>
                </div>
            {{/auth}}
        </header>
    `;

    return Mustache.render(template, { auth });
};

export default header;
