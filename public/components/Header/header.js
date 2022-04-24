import UIKIT from "../../ui-kit/import.js";
import { getters } from "../../store/import";

const header = (isOrderingPage = false) => {
  const auth = Object.keys(getters.user()).length !== 0;
  const address = localStorage.getItem("address");
  const avatar = getters.getAvatar();

  const template = `
        <header class="page-header">
            <nav class="page-header__button page-header__button-main" data-section="main">
                <img src="/graphics/icons/delivery_icon.svg" data-section="main" alt="">
                <a class="button__controller" data-section="main">Delivery Club</a>
            </nav>

            {{#isOrderingPage}}
                <nav class="page-header__button page-header__back-button" data-section="dishes">
                    {{&backToMenu}}
                </nav>
            {{/isOrderingPage}}

            {{^isOrderingPage}}
                <nav id="search" class="page-header__button page-header__button-search" data-section="suggests">
                    <img src="/graphics/icons/address.svg" data-section="suggests" alt="">
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
                        {{#avatar}}
                            <img class="button__avatar-img" src="{{avatar}}" data-section="profilePreview" alt="">
                        {{/avatar}}

                        {{^avatar}}
                            <img src="/graphics/icons/profile.svg" data-section="profilePreview" alt="">
                        {{/avatar}}

                        <a class="button__controller" data-section="profilePreview">Профиль</a>
                    </nav>
                    <nav id="shoppingCartButton" class="page-header__button page-header__button-cart" data-section="shoppingCart">
                        <img src="/graphics/icons/shopping_cart.svg" data-section="shoppingCart" alt="">
                        <a class="button__controller" data-section="shoppingCart">Корзина</a>
                    </nav>
                {{/auth}}
                {{^auth}}
                    <nav class="page-header__button" data-section="login">
                        <img src="/graphics/icons/profile.svg" data-section="login" alt="">
                        <a class="button__controller" data-section="login">Войти</a>
                    </nav>
                {{/auth}}
            {{/isOrderingPage}}
        </header>
    `;

  return Mustache.render(template, {
    auth,
    isOrderingPage,
    avatar,
    address,
    backToMenu() {
      return UIKIT.backButton("Обратно в меню", "dishes");
    },
  });
};

export default header;
