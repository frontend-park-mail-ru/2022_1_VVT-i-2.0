import UIKIT from "../import.js";

const orderPoint = (
  imgPath,
  productName,
  weight,
  info,
  count,
  price,
  id,
  toShowButtons = true
) => {
  const template = `
        <section class="shopping-cart__order-point">
            <div class="order-point__img-block">
                <img class="order-point__dish-img" src="{{imgPath}}" alt="">
            </div>
            <div class="order-point__point-info">
                <div class="point-info__dish-info">
                    <div>{{productName}}</div>
                    <div class="dish-info__price-bold">{{price}} ₽</div>
                </div>
                <div class="point-info__ingredients">
                    {{weight}} г · {{info}} ккал
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
    toShowButtons,
    addButton() {
      return UIKIT.addRemoveButton("addPoint", "incrementDishCount", id);
    },
    removeButton() {
      return UIKIT.addRemoveButton("removePoint", "decrementDishCount", id);
    },
  });
};

export default orderPoint;
