import UIKIT from "../../ui-kit/import.js";
import { getters } from "../../store/import";

const header = (isOrderingPage = false) => {
  const auth = Object.keys(getters.user()).length !== 0;
  const address = localStorage.getItem("address");
  const avatar = getters.getAvatar();
  const emptyShopCart = getters.IsCartEmpty();
  const totalOrderPrice = getters.cart().totalPrice;
  const isSearchActivated = sessionStorage.getItem('isSearchActivated') === 'true';

  const template = `
        <header id="header" class="page-header page-header__color-white">
            <nav class="page-header__button page-header__main-button" data-section="main">
                <img class="main-button__img" src="/graphics/images/fobringto.png" data-section="main" alt="">
                <a class="main-button__controller" data-section="main">obringTo</a>
            </nav>

            {{#isOrderingPage}}
                <nav class="page-header__button page-header__back-button" data-section="dishes">
                    {{&backToMenu}}
                </nav>
            {{/isOrderingPage}}

            {{^isOrderingPage}}
            
                {{#isSearchActivated}}
                <nav id="searchActivatedAria" class="page-header__button">
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
                </nav>
                {{/isSearchActivated}}
            
                {{^isSearchActivated}}
                <nav id="search" class="page-header__button page-header__button-search" data-section="suggests">
                    <img src="/graphics/icons/address.svg" data-section="suggests" alt="">
                    <span data-section="suggests">
                        <input
                            id="suggestsSearch"
                            class="page-header__suggests-input"
                            data-section="suggests"
                            value="{{address}}"
                        >
                    </span>
                </nav>
                {{/isSearchActivated}}
                
                {{#auth}}
                    
                    {{^isSearchActivated}}
                    <nav id="searchButton" class="page-header__button">
                        <img src="/graphics/icons/search.svg" alt="">
                        <a class="button__controller">Поиск</a>
                    </nav>
                    {{/isSearchActivated}}
                        
                    <nav id="profilePreviewButton" class="page-header__button" data-section="profilePreview">
                        {{#avatar}}
                            <img class="button__avatar-img" src="{{avatar}}" data-section="profilePreview" alt="">
                        {{/avatar}}

                        {{^avatar}}
                            <img src="/graphics/icons/profile.svg" data-section="profilePreview" alt="">
                        {{/avatar}}

                        <a class="button__controller" data-section="profilePreview">Профиль</a>
                    </nav>
                    
                    {{#emptyShopCart}}
                        <nav id="shoppingCartButton" class="page-header__button page-header__button-cart" data-section="shoppingCart">
                          <img src="/graphics/icons/shopping_cart.svg" data-section="shoppingCart" alt="">
                          <a class="button__controller" data-section="shoppingCart">Корзина</a>
                        </nav>
                    {{/emptyShopCart}}
                    
                    {{^emptyShopCart}}
                        <nav id="shoppingCartButton" class="page-header__button page-header__button-cart_green" data-section="shoppingCart">
                            <img src="/graphics/icons/shopping_cart.svg" data-section="shoppingCart" alt="">
                            <a class="button__controller_with-price" data-section="shoppingCart">{{totalOrderPrice}} ₽</a>
                        </nav>
                    {{/emptyShopCart}}
                    
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
    emptyShopCart,
    totalOrderPrice,
    isSearchActivated,
    backToMenu() {
      return UIKIT.backButton("Обратно в меню", "dishes");
    },
  });
};

export default header;
