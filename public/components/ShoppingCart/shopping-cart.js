import UIKIT from '../../ui-kit/import.js';
import COLORS from '../../configurations/colors/colors.js';
import ELEMS_CONFIGURATION from '../../configurations/elems.js';

const shoppingCart = (restName, props) => {
    const template = `
        <div class="shopping-cart">
            <div class="shopping-cart__info-about-rest shopping-cart__order-point">
                <div class="shopping-cart__preview-rest">Ваш заказ в ресторане: {{restName}}</div>
            </div>
            {{#props}}
                {{&drawOrderPoint}}
            {{/props}}
            <div class="shopping-cart__button-order">
                {{&buttonOrder}}
            </div>
        </div>
    `;
    return Mustache.render(template, {
        restName,
        props: props,
        drawOrderPoint () {
            return UIKIT.orderPoint(this.imgPath, this.dishName, this.additives, this.dishCount, this.price);
        },
        buttonOrder () {
            return UIKIT.simpleButton('Заказать 330 ₽', COLORS.primary,
                ELEMS_CONFIGURATION.buttons.LARGE,'ordering', 'orderButton');
        }
    });
};

export default shoppingCart;
