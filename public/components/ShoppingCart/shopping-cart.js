import OrderPoint from '../OrderPoint/order-point.js';
import button from '../../ui-kit/Button/button.js';

const shoppingCart = (restName, orderPoints) => {
    const template = `
        <div id="order">
            <div id="info-about-rest" class="order-point">
                <div>Ваш заказ в ресторане: {{restName}}</div>
            </div>
            {{#orderPoints}}
                {{&drawOrderPoint}}
            {{/orderPoints}}
            {{&drawButton}}
        </div>
    `;
    return Mustache.render(template, {
        restName,
        orderPoints: orderPoints,
        drawOrderPoint () {
            return OrderPoint('../cons/404.svg', 'бургер сочный молочный', 'без котлеты', 3, '256 Р');
        },
        drawButton () {
            return button('Заказать ' + this.price + ' ₽', '#17D685', '', 'orderButton');
        }
    });
};

export default shoppingCart;
