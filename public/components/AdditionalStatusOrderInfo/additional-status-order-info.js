import UIKIT from "../../ui-kit/import.js";
import COLORS from "../../configurations/colors/colors";

const additionalStatusOrderInfo = (props, newElementID) => {
    const template = `
        <div id="{{newElementID}}" class="order">
            <div class="order__main-content">
                <div class="main-content__order-list">
                    {{&order}}
                </div>
                <div class="main-content__comment-block">
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
        newElementID,
        order() {
            return UIKIT.orderCheck(props, false);
        },
        commentButton() {
            return UIKIT.simpleButton('Оставить комментарий', COLORS.primary,
                null, '', 'commentButton');
        }
    });
};

export default additionalStatusOrderInfo;
