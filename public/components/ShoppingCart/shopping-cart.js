import UIKIT from "../../ui-kit/import.js";
import COLORS from "../../configurations/colors/colors.js";
import ELEMS_CONFIGURATION from "../../configurations/elems.js";

const shoppingCart = (
  restName,
  props,
  recommendations,
  promoCode,
  discount = 0
) => {
  let promoCodeApplied = false;
  if (promoCode) {
    promoCodeApplied = true;
  }

  const hasRecommendations = props.length > 0 && recommendations.length > 0;

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

      {{#hasRecommendations}}
        <div class="shopping-cart__recommendations">
          <div class="recommendations__title">С этим также заказывают</div>
          {{#recommendations}}
            {{&drawRecommendation}}
          {{/recommendations}}
        </div>
      {{/hasRecommendations}}

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
    hasRecommendations,
    recommendations,
    drawOrderPoint() {
      return UIKIT.orderPoint(
        this.imgPath,
        this.productName,
        this.weight,
        this.info,
        this.count,
        this.price,
        this.id,
        true,
        promoCodeApplied,
        discount
      );
    },
    drawRecommendation() {
      return UIKIT.recommendation(
        this.imgPath,
        this.productName,
        this.price,
        this.id,
        restName
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
