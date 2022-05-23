import UIKIT from "../../ui-kit/import.js";
import COLORS from "../../configurations/colors/colors.js";
import ELEMS_CONFIGURATION from "../../configurations/elems.js";

const shoppingCart = (restName, props, promoCode) => {
  let promoCodeApplied = false;
  if (promoCode) {
    promoCodeApplied = true;
  }

  const template = `
        <div class="shopping-cart">
            <div class="shopping-cart__info-about-rest shopping-cart__order-point">
              <div class="shopping-cart__preview-rest">Ваш заказ в ресторане: {{restName}}</div>
            </div>
            
            {{#promoCodeApplied}}
            <div class="shopping-cart__info-about-rest shopping-cart__order-point">
              <div class="shopping-cart__preview-rest">Промокод <strong>{{promoCode}}</strong> применен &#9989;</div>
            </div>
            {{/promoCodeApplied}}
            
            <div class="shopping-cart__order-points">
                {{#props}}
                    {{&drawOrderPoint}}
                {{/props}}
            </div>
            <div class="shopping-cart__button-order">
                {{&buttonOrder}}
            </div>
        </div>
  `;

  return Mustache.render(template, {
    restName,
    props: props,
    promoCodeApplied,
    promoCode,
    drawOrderPoint() {
      return UIKIT.orderPoint(
        this.imgPath,
        this.productName,
        this.weight,
        this.info,
        this.count,
        this.price,
        this.id,
        true
      );
    },
    buttonOrder() {
      return UIKIT.simpleButton(
        "Заказать",
        COLORS.primary,
        ELEMS_CONFIGURATION.buttons.ORDERING,
        "ordering",
        "orderButton"
      );
    },
  });
};

export default shoppingCart;
