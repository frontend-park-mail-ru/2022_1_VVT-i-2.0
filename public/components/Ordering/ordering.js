import UIKIT from '../../ui-kit/import.js';
import FORMS_CONFIGURATION from '../../configurations/forms.js';
import paymentChoice from '../PaymentChoice/payment-choice.js';

const ordering = (props) => {
  const inputConfigurations = FORMS_CONFIGURATION.inputs.ordering;

  const isEmpty = props.total === 0;
  const minPrice = props.minPrice;

  const template = `
    <div><img class="ordering-page__week-dish" src="../../graphics/images/order_week_dish.png" alt=""></div>
    <div class="ordering-page">
      {{&title}}

      <div class="ordering-page__ordering-and-shop-cart-block">
        <div class="ordering-page__ordering-block">
          <div class="ordering-block__delivery-header">Доставка</div>
          
          {{#inputConfigurations.largeInputs}}
                {{&input}}
          {{/inputConfigurations.largeInputs}}
          
          <div class="ordering-block__exact-address">
            {{#inputConfigurations.smallInputs}}
                  {{&input}}
            {{/inputConfigurations.smallInputs}}
          </div>

          <div class="ordering-block__comment-header">Комментарий</div>
          <div
            id="orderingComment"
            class="ordering-block__comment-block"
            contenteditable="true"
            placeholder="Напишите как Вас найти или пожелания для блюд..."
          ></div>

          <div class="ordering-block__order-header">Оплата</div>
          {{&paymentChoices}}
          {{&buttonPay}}
        </div>
        <div class="ordering-page__shopping-cart">
          {{^isEmpty}}
          <div class="shopping-cart__info-about-rest shopping-cart__order-point">
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

          <div class="shopping-cart__payment-notify">{{&paymentNotification}}</div>

          <div class="shopping-cart__summary-payment">
            <div>Итого</div>
            <div class="payment-info__price">{{total}} ₽</div>
          </div>
          {{/isEmpty}}
        </div>
      </div>
    </div>
  `;

  return Mustache.render(template, {
    restName: props.restName,
    inputConfigurations: inputConfigurations,
    orderPoints: props.orderPoints,
    total: props.total,
    minPrice: props.minPrice,
    isEmpty,
    title() {
      return UIKIT.underlinedTitle('Оформление заказа');
    },
    input() {
      let value = '';
      let readonly = false;
      if (this.id === 'orderingPhone') {
        value = props.phone;
        readonly = true;
      } else if (this.id === 'orderingAddress') {
        value = localStorage.getItem('address');
        readonly = true;
      }
      return UIKIT.input(this.title, this.type, this.width, this.placeholder, this.id, value, readonly);
    },
    paymentChoices() {
      return paymentChoice();
    },
    buttonPay() {
      return UIKIT.buttonPay();
    },
    drawOrderPoint() {
      return UIKIT.orderPoint(this.imgPath, this.productName, this.weight, this.info, this.count, this.price, this.id);
    },
    paymentNotification() {
      if (this.total - 1000 < this.minPrice) {
        return UIKIT.paymentNotification('Закажите ещё на ' + String(this.minPrice - (this.total - 1000)) + ' ₽ для бесплатной доставки', false);
      }
      return UIKIT.paymentNotification('Ваш заказ будет доставлен бесплатно!', true);
    }
  });
};

export default ordering;
