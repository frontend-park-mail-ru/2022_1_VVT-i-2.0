import UIKIT from '../../ui-kit/import.js';
import COLORS from '../../utils/colors.js';

const shoppingCart = (restName, orderPoints) => {
    const template = `
        <div id="order">
            <div id="info-about-rest" class="order-point">
                <div>Ваш заказ в ресторане: {{restName}}</div>
            </div>
            {{#orderPoints}}
                {{&drawOrderPoint}}
            {{/orderPoints}}
            <div>
                {{&drawButton}}
            </div>
        </div>
    `;
    return Mustache.render(template, {
        restName,
        orderPoints: orderPoints,
        drawOrderPoint () {
            return UIKIT.orderPoint(this.imgPath, this.dishName, this.additives, this.dishCount, this.price);
        },
        drawButton () {
            return UIKIT.button('Заказать 330 ₽', COLORS.primary, '', 'orderButton');
        }
    });
};

export default shoppingCart;
