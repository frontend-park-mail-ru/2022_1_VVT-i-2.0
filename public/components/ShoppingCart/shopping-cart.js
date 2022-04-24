import UIKIT from "../../ui-kit/import.js";
import COLORS from "../../configurations/colors/colors.js";
import ELEMS_CONFIGURATION from "../../configurations/elems.js";

const shoppingCart = (restName, props) => {
  const template = `
        <div class="shopping-cart">
            <div class="shopping-cart__info-about-rest shopping-cart__order-point">
                <div class="shopping-cart__preview-rest">Ваш заказ в ресторане: {{restName}}</div>
            </div>
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
        drawOrderPoint () {
            return UIKIT.orderPoint(this.imgPath, this.dishName, this.weight, this.info, this.count, this.price, this.id);
        },
        buttonOrder () {
            return UIKIT.simpleButton('Заказать', COLORS.primary,
                ELEMS_CONFIGURATION.buttons.LARGE,'ordering', 'orderButton');
        }
    });
};

export default shoppingCart;
