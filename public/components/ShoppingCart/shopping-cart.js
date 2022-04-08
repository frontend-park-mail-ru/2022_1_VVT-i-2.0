import UIKIT from '../../ui-kit/import.js';
import COLORS from '../../utils/colors.js';

const shoppingCart = (restName, properties) => {
    const template = `
        <div id="order">
            <div id="info-about-rest" class="order-point">
                <div>Ваш заказ в ресторане: {{restName}}</div>
            </div>
            {{#properties}}
                {{&drawOrderPoint}}
            {{/properties}}
            <div id="ordering">
                {{&buttonOrder}}
            </div>
        </div>
    `;
    return Mustache.render(template, {
        restName,
        properties: properties,
        drawOrderPoint () {
            return UIKIT.orderPoint(this.imgPath, this.dishName, this.additives, this.dishCount, this.price);
        },
        buttonOrder () {
            return UIKIT.simpleButton('Заказать 330 ₽', COLORS.primary, 'ordering', 'orderButton');
        }
    });
};

export default shoppingCart;
