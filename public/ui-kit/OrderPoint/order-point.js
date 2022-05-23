import UIKIT from "../import.js";

const orderPoint = (
  imgPath,
  productName,
  weight,
  info,
  count,
  price,
  id,
  toShowButtons = true,
  promoCodeApplied = false,
  discount = 0
) => {
  const template = `
        <section class="shopping-cart__order-point">
            <div class="order-point__img-block">
                <img class="order-point__dish-img" src="{{imgPath}}" alt="">
            </div>
            <div class="order-point__point-info">
                <div class="point-info__dish-info">
                    <div>{{productName}}</div>
                    <div class="{{#promoCodeApplied}}dish-info__price-bold_crossed-out{{/promoCodeApplied}}
                                {{^promoCodeApplied}}dish-info__price-bold{{/promoCodeApplied}}">{{price}} ₽</div>
                </div>
                <div class="point-info__additional-info">
                  <div class="additional-info__ingredients">
                    {{weight}} г · {{info}} ккал
                  </div>
                  {{#promoCodeApplied}}
                    <div class="additional-info__discount-price">{{priceWithDiscount}} ₽</div>
                  {{/promoCodeApplied}}
                </div>
                
                {{#toShowButtons}}
                <div class="point-info__edit-quantity">
                    {{&removeButton}}
                    <div class="point-info__count-current-point">{{count}}</div>
                    {{&addButton}}
                {{/toShowButtons}}
                
                {{^toShowButtons}}
                <div class="point-info__edit-quantity">
                    <div>Количество: {{count}}</div>
                {{/toShowButtons}}
                
                </div>
            </div>
        </section>
    `;

  return Mustache.render(template, {
    imgPath,
    productName,
    weight,
    info,
    count,
    price,
    priceWithDiscount: Math.round(price * (1 - discount)),
    toShowButtons,
    promoCodeApplied,
    addButton() {
      return UIKIT.addRemoveButton("addPoint", "incrementDishCount", id);
    },
    removeButton() {
      return UIKIT.addRemoveButton("removePoint", "decrementDishCount", id);
    },
  });
};

export default orderPoint;
