import UIKIT from "../../ui-kit/import.js";

const orderCheck = (props, toShowNotify = true, IsOrderingPage = true) => {
    const isEmpty = (props.total || props.totalPrice) === 0;

    const template = `        
        <div class="ordering-page__shopping-cart">
          {{^isEmpty}}
          <div class="shopping-cart__rest-main-info shopping-cart__order-point">
              <div class="shopping-cart__preview-rest">Ваш заказ в ресторане: {{restName}}</div>
          </div>
    
          <div class="shopping-cart__order-points
            {{#IsOrderingPage}}shopping-cart__order-points_large{{/IsOrderingPage}}
            {{^IsOrderingPage}}shopping-cart__order-points_small{{/IsOrderingPage}}">
            {{#orderPoints}}
              {{&drawOrderPoint}}
            {{/orderPoints}}
          </div>
    
          <div class="shopping-cart__space-block"></div>
    
          <div class="shopping-cart__payment-info">
            <div>Доставка</div>
            <div class="payment-info__price">500 ₽</div>
          </div>
          <div class="shopping-cart__payment-info">
            <div>Сервисный сбор</div>
            <div class="payment-info__price">500 ₽</div>
          </div>
    
          {{#toShowNotify}}
          <div class="shopping-cart__payment-notify">{{&paymentNotification}}</div>
          {{/toShowNotify}}
    
          <div class="shopping-cart__summary-payment">
            <div>Итого</div>
            <div class="payment-info__price">{{total}} ₽</div>
          </div>
          {{/isEmpty}}
        </div>
  `;

    return Mustache.render(template, {
        restName: props.restName,
        total: props.total || props.totalPrice,
        orderPoints: props.orderPoints,
        minPrice: props.minPrice || 0,
        isEmpty,
        toShowNotify,
        IsOrderingPage,
        drawOrderPoint() {
            return UIKIT.orderPoint(
                this.imgPath,
                this.productName,
                this.weight,
                this.info,
                this.count,
                this.price,
                this.id,
                IsOrderingPage
            );
        },
        paymentNotification() {
            if (this.total - 1000 < this.minPrice) {
                return UIKIT.paymentNotification(
                    "Закажите ещё на " +
                    String(this.minPrice - (this.total - 1000)) +
                    " ₽ для бесплатной доставки",
                    false
                );
            }
            return UIKIT.paymentNotification(
                "Ваш заказ будет доставлен бесплатно!",
                true
            );
        },
    });
};

export default orderCheck;
