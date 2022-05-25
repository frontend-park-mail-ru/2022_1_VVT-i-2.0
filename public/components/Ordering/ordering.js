import UIKIT from "../../ui-kit/import.js";
import FORMS_CONFIGURATION from "../../configurations/forms.js";
import paymentChoice from "../PaymentChoice/payment-choice.js";
import { NumberPhoneFormat } from "../../events/entity/phone/phone-src";
import ELEMS_CONFIGURATION from "../../configurations/elems.js";

const ordering = (props) => {
  const inputConfigurations = FORMS_CONFIGURATION.inputs.ordering;
  const isMobile = window.screen.width < 920;

  const template = `
    {{^isMobile}}
      <div>
        <img class="ordering-page__week-dish" src="/graphics/images/order_week_dish.png" alt="">
      </div>
    {{/isMobile}}

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

          {{^isMobile}}
            <div class="ordering-block__order-header">Оплата</div>
            {{&paymentChoices}}
            {{&buttonPay}}
          {{/isMobile}}
        </div>

        {{&summaryCheck}}

      </div>

      {{#isMobile}}
        <div class="ordering-block__order-header">Оплата</div>
        {{&paymentChoices}}
        {{&buttonPay}}
      {{/isMobile}}
    </div>
  `;

  return Mustache.render(template, {
    isMobile,
    restName: props.restName,
    inputConfigurations: inputConfigurations,
    title() {
      return UIKIT.underlinedTitle("Оформление заказа");
    },
    input() {
      let value = "";
      let readonly = false;
      if (this.id === "orderingPhone") {
        value = NumberPhoneFormat.formatPhone(props.phone);
        readonly = true;
      } else if (this.id === "orderingAddress") {
        value = localStorage.getItem("address");
        readonly = true;
      }

      let width = this.width;
      if (isMobile && width === ELEMS_CONFIGURATION.inputs.VERY_LARGE) {
        width = 343;
      }

      return UIKIT.input(
        this.title,
        this.type,
        width,
        this.placeholder,
        this.id,
        "",
        value,
        readonly
      );
    },
    paymentChoices() {
      return paymentChoice();
    },
    buttonPay() {
      return UIKIT.buttonPay();
    },
    summaryCheck() {
      return UIKIT.orderCheck(props);
    },
  });
};

export default ordering;
