import UIKIT from "../../ui-kit/import.js";
import COLORS from "../../configurations/colors/colors";

const infoAboutOrder = (statusInfo, props) => {
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
            const prop = {
                restName: props.restName,
                orderPoints: props.cart,
                total: props.totalPrice,
                minPrice: 1500,
        }
            return UIKIT.orderCheck(prop);
        },
        commentButton() {
            return UIKIT.simpleButton('Оставить комментарий', COLORS.primary,
                null, '', 'commentButton');
        }
    });
};

export default infoAboutOrder;
