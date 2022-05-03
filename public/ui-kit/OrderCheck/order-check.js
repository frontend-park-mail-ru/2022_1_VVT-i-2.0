import UIKIT from "../../ui-kit/import.js";

const orderCheck = (props, toShowNotify = true) => {
    const isEmpty = props.total === 0;

    console.log(props.orderPoints);

    const template = `        
        <div class="ordering-page__shopping-cart">
          {{^isEmpty}}
          <div class="shopping-cart__rest-main-info shopping-cart__order-point">
              <div class="shopping-cart__preview-rest">Ваш заказ в ресторане: {{restName}}</div>
          </div>
    
          <div class="shopping-cart_order-points">
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
        orderPoints: props.orderPoints,
        total: props.total,
        minPrice: props.minPrice,
        isEmpty,
        toShowNotify,
        drawOrderPoint() {
            return UIKIT.orderPoint(
                this.imgPath,
                this.productName,
                this.weight,
                this.info,
                this.count,
                this.price,
                this.id,
                this.toShowNotify,
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
