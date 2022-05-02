import UIKIT from "../../ui-kit/import.js";
import component from '../import';
import COLORS from "../../configurations/colors/colors";

const infoAboutOrder = (statusInfo, restName, cart) => {
    const template = `
        <div class="order">
<!--            {{{statusInfo}}}-->
            <div class="order__main-content">
                {{&order}}
                <div class="comment-block">
                    <div class="comment-block__address">
                        Адрес ресторана:
                        Москва, Улица Маршала Полубоярова, дом 51
                    </div>
                    <div class="comment__comment-explanation">
                        Вы можете оставить комментарий, в случае, если уже получили заказ
                    </div>
                    <div id="commentButton" class="comment-button">
                        {{&commentButton}}
                    </div>
                </div>
            </div>
        </div>
    `;

    return Mustache.render(template, {
        // statusInfo,
        order() {
            return component.shoppingCart(restName, cart.order);
        },
        commentButton() {
            return UIKIT.simpleButton('Оставить комментарий', COLORS.primary,
                null, '', 'commentButton');
        }
    });
};

export default infoAboutOrder;
