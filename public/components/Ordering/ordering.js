import UIKIT from '../../ui-kit/import.js';
import paymentChoice from '../PaymentChoice/payment-choice.js';
import OrderPoint from '../OrderPoint/order-point.js';

const ordering = () => {
  const properties = [
    {
      title: 'Телефон',
      placeholder: '+7(',
      id: 'orderingPhone'
    },
    {
      title: 'Адрес доставки',
      placeholder: 'Введите адрес доставки',
      id: 'orderingAddress'
    },
    // {
    //   title: 'Подъезд',
    //   id: 'orderingEntrance'
    // },
    // {
    //   title: 'Домофон',
    //   id: 'orderingIntercom'
    // },
    // {
    //   title: 'Этаж',
    //   placeholder: '',
    //   id: 'orderingFloor'
    // },
    // {
    //   title: 'Квартира',
    //   id: 'orderingFlat'
    // },
  ];

  const orderPoints = [
    {
      imgPath: 'icons/404.svg',
      dishName: 'Бургер по-восточному',
      count: 3,
      price: 269,
    },
    {
      imgPath: 'icons/404.svg',
      dishName: 'Бургер по-восточному',
      count: 3,
      price: 269,
    },
    {
      imgPath: 'icons/404.svg',
      dishName: 'Бургер по-восточному',
      count: 3,
      price: 269,
    },
  ];

  const template = `
    <div id="ordering">
      {{&title}}

      <div id="ordering-and-nav-block">
        <div>
          <div id="header">Доставка</div>
          {{#properties}}
            {{&input}}
          {{/properties}}

          <div id="comment">Комментарий</div>
          <textarea
            id="comment-block"
            placeholder="Напишите как Вас найти или пожелаения для блюд..."
          /></textarea>

          <div id="order-header">Оплата</div>
          {{&paymentChoices}}
          {{&buttonPay}}
        </div>
        <div>
          {{#orderPoints}}
            {{&drawOrderPoint}}
          {{/orderPoints}}

          <div class="notify">
            <div>Доставка</div>
            <div>500 ₽</div>
          </div>
          <div class="notify">
            <div>Сервисный сбор</div>
            <div>500 ₽</div>
          </div>

          <div id="order-payment-notify">{{&paymentNotification}}</div>

          <div id="order-result">
            <div>Итого</div>
            <div>980 ₽</div>
          </div>
        </div>
      </div>
    </div>
  `;

  return Mustache.render(template, {
    properties: properties,
    orderPoints: orderPoints,
    title() {
      return UIKIT.title('Оформление заказа');
    },
    input() {
      return UIKIT.input(this.title, this.type, this.placeholder, this.id);
    },
    paymentChoices() {
      return paymentChoice();
    },
    buttonPay() {
      return UIKIT.buttonPay();
    },
    drawOrderPoint() {
      return OrderPoint({ imgPath: this.imgPath, dishName: this.dishName, price: this.price, count: this.count });
    },
    paymentNotification() {
      return UIKIT.paymentNotification('Закажите ещё на 380₽ для бесплатной доставки', false);
    }
  });
};

export default ordering;
