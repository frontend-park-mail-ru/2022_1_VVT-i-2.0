import UIKIT from '../../ui-kit/import.js';
import FORMS_CONFIGURATION from '../../configurations/forms.js';
import paymentChoice from '../PaymentChoice/payment-choice.js';

const ordering = (props) => {
  const inputConfigurations = FORMS_CONFIGURATION.inputs.ordering;

  const isEmpty = props.total === 0;

  const template = `
    <div class="ordering-page">
      {{&title}}

      <div class="ordering-page__ordering-and-shop-cart-block">
        <div class="ordering-page__ordering-block">
          <div class="ordering-block__delivery-header">Доставка</div>
          {{#inputConfigurations}}
<!--            <div class="ordering-block__input">-->
                {{&input}}
<!--            </div>-->
          {{/inputConfigurations}}

          <div class="ordering-block__comment-header">Комментарий</div>
          <div
            class="ordering-block__comment-block"
            contenteditable="true"
            placeholder="Напишите как Вас найти или пожелания для блюд..."
          ></div>

          <div class="ordering-block__order-header">Оплата</div>
          {{&paymentChoices}}
          {{&buttonPay}}
        </div>
        <div class="ordering-page__shop-cart-block">
          {{^isEmpty}}
          <div class="shopping-cart__rest">
            <div>
              Ваш заказ в ресторане:
              <div>{{restName}}</div>
            </div>
          </div>

          <div class="shopping-cart_order-points">
            {{#orderPoints}}
              {{&drawOrderPoint}}
            {{/orderPoints}}
          </div>

          <div class="shopping-cart__space-block"></div>

          <div class="shop-cart-block__payment-info">
            <div>Доставка</div>
            <div class="payment__price">500 ₽</div>
          </div>
          <div class="shop-cart-block__payment-info">
            <div>Сервисный сбор</div>
            <div class="payment__price">500 ₽</div>
          </div>

          <div class="shop-cart-block__payment-notify">{{&paymentNotification}}</div>

          <div class="shop-cart-block__summary-payment">
            <div>Итого</div>
            <div class="payment__price">{{total}} ₽</div>
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
    isEmpty,
    title() {
      return UIKIT.title('Оформление заказа');
    },
    input() {
      return UIKIT.input(this.title, this.type, this.width, this.placeholder, this.id);
    },
    paymentChoices() {
      return paymentChoice();
    },
    buttonPay() {
      return UIKIT.buttonPay();
    },
    drawOrderPoint() {
      return UIKIT.orderPoint(this.imgPath, this.productName, this.info, this.count, this.price, this.id);
    },
    paymentNotification() {
      return UIKIT.paymentNotification('Закажите ещё на 380₽ для бесплатной доставки', false);
    }
  });
};

export default ordering;
