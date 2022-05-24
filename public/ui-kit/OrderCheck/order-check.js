import UIKIT from "../../ui-kit/import.js";

const orderCheck = (props, toShowNotify = true, IsOrderingPage = true, promoCodeApplied = false, promoCode) => {
  const isEmpty = props.totalPrice === 0;

  const template = `        
        <div class="ordering-page__order-check
          {{#IsOrderingPage}}ordering-page__order-check_large{{/IsOrderingPage}}
          {{^IsOrderingPage}}ordering-page__order-check_small{{/IsOrderingPage}}">
          {{^isEmpty}}
          <div class="order-check__rest-main-info shopping-cart__order-point">
              <div class="order-check__preview-rest">Ваш заказ в ресторане: {{restName}}</div>
          </div>
          
          {{#promoCodeApplied}}
          <div class="shopping-cart__info-about-rest shopping-cart__order-point">
            <div class="shopping-cart__preview-rest">Промокод <strong>{{promo}}</strong> применен &#9989;</div>
          </div>
          {{/promoCodeApplied}}
    
          <div class="order-check__order-points
            {{#IsOrderingPage}}order-check__order-points_large{{/IsOrderingPage}}
            {{^IsOrderingPage}}order-check__order-points_small{{/IsOrderingPage}}">
            {{#orderPoints}}
              {{&drawOrderPoint}}
            {{/orderPoints}}
          </div>
    
          <div class="order-check__space-block"></div>
    
          <div class="order-check__payment-info">
            <div>Доставка</div>
            <div class="payment-info__price">{{deliveryPrice}} ₽</div>
          </div>
          <div class="order-check__payment-info">
            <div>Суммарная скидка</div>
            <div class="payment-info__price">{{summaryDiscount}} ₽</div>
          </div>
    
          {{#toShowNotify}}
          <div class="order-check__payment-notify">{{&paymentNotification}}</div>
          {{/toShowNotify}}
    
          <div class="order-check__summary-payment">
            <div>Итого</div>
            <div class="payment-info__price">{{totalPriceWithDelivery}} ₽</div>
          </div>
          {{/isEmpty}}
        </div>
  `;

  if (props.orderPoints.length === 1) {
    sessionStorage.setItem("smallOrder", "true");
  }

  return Mustache.render(template, {
    restName: props.restName,
    totalPrice: props.totalPrice,
    totalPriceWithDelivery: props.totalPrice + props.deliveryPrice,
    orderPoints: props.orderPoints,
    summaryDiscount: props.summaryDiscount || 0,
    minPrice: props.minPrice || 0,
    promo: promoCode ? promoCode.promocode : null,
    deliveryPrice: props.deliveryPrice,
    isEmpty,
    toShowNotify,
    IsOrderingPage,
    promoCodeApplied,
    drawOrderPoint() {
      return UIKIT.orderPoint(
        this.imgPath,
        this.productName,
        this.weight,
        this.info,
        this.count,
        this.price,
        this.id,
        IsOrderingPage,
        promoCodeApplied,
        promoCode ? promoCode.discount: null
      );
    },
    paymentNotification() {
      if (this.deliveryPrice) {
        return UIKIT.paymentNotification(
          "Закажите ещё на " +
            String(this.minPrice - (this.totalPrice)) +
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
