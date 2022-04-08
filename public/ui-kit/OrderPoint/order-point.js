import UIKIT from '../import.js';

const orderPoint = (imgPath, dishName, additives, dishCount, price) => {
    const template = `
        <div class="shopping-cart__order-point">
            <div class="order-point__img-block">
                <img class="order-point__dish-img" src="{{imgPath}}" alt="">
            </div>
            <div class="order-point__main-block">
                <div class="order-point__dish-info">
                    <div>{{dishName}}</div>
                    <div>{{price}} ₽</div>
                </div>
                <div class="order-point__ingredients">
                    {{additives}}
                </div>
                <div class="order-point__edit-quantity">
                    {{&removeButton}}
                    <div class="order-point__count-current-point">{{dishCount}}</div>
                    {{&addButton}}
                </div>
            </div>
        </div>
    `;

    return Mustache.render(template, {
        imgPath, dishName, additives, dishCount, price,
        addButton () {
            return UIKIT.addRemoveButton('addPoint');
        },
        removeButton () {
            return UIKIT.addRemoveButton('removePoint');
        }
    });
};

export default orderPoint;
