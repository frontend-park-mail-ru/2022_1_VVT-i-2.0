import UIKIT from "../../ui-kit/import.js";
import FORMS_CONFIGURATION from "../../configurations/forms.js";
import paymentChoice from "../PaymentChoice/payment-choice.js";
import { NumberPhoneFormat } from "../../events/entity/phone/phone-src";

const ordering = (props) => {
  const inputConfigurations = FORMS_CONFIGURATION.inputs.ordering;

  const template = `
    <div>
        <img class="ordering-page__week-dish" src="/graphics/images/order_week_dish.png" alt="">
    </div>
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
        
        {{&summaryCheck}}
        
      </div>
    </div>
  `;

  return Mustache.render(template, {
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
      return UIKIT.input(
        this.title,
        this.type,
        this.width,
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
    summaryCheck () {
      return UIKIT.orderCheck(props);
    }
  });
};

export default ordering;
