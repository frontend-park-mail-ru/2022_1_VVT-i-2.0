import UIKIT from "../../ui-kit/import.js";
import COLORS from "../../configurations/colors/colors";

const additionalStatusOrderInfo = (props) => {
    const template = `
        <div class="order">
            <div class="order__main-content">
                <div class="main-content__order-list">
                    {{&order}}
                </div>
                <div class="main-content__comment-block">
                    <div class="comment-block__address">
                        <strong>Адрес доставки:</strong>
                        <br>
                        <div>{{address}}</div>
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
        address: props.address,
        order() {
            let orderPoints = [];
            props.cart.forEach((obj) => {
                let orderPoint = {};
                orderPoint.imgPath = obj.imgPath;
                orderPoint.productName = obj.name;
                orderPoint.weight = obj.weight;
                orderPoint.info = obj.calories;
                orderPoint.count = obj.count;
                orderPoint.price = obj.price;
                orderPoint.id = "";
                orderPoints.push(orderPoint);
            });

            props.orderPoints = orderPoints;

            return UIKIT.orderCheck(props, false, false);
        },
        commentButton() {
            return UIKIT.simpleButton('Оставить комментарий', COLORS.primary,
                null, `/createComment/${props.restSlug}`);
        }
    });
};

export default additionalStatusOrderInfo;
