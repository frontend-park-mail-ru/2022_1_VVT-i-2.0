import UIKIT from "../import.js";

const orderPoint = (imgPath, productName, weight, info, count, price, id) => {
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
                <div class="point-info__edit-quantity">
                    {{&removeButton}}
                    <div class="point-info__count-current-point">{{count}}</div>
                    {{&addButton}}
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
    addButton() {
      return UIKIT.addRemoveButton("addPoint", "incrementDishCount", id);
    },
    removeButton() {
      return UIKIT.addRemoveButton("removePoint", "decrementDishCount", id);
    },
  });
};

export default orderPoint;
