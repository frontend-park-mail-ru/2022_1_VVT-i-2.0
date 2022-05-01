import UIKIT from "../../ui-kit/import.js";
import COLORS from "../../configurations/colors/colors.js";
import FORMS_CONFIGURATION from "../../configurations/forms.js";
import ELEMS_CONFIGURATION from "../../configurations/elems.js";

/**
 * @function Создает html-строку для создания компонента формы авторизации
 *      profileMenuPoint через шаблонатор Mustache.
 * @return {string} HTML строка для отрисовки компонента registerForm.
 */
const confirmCodeForm = (phone) => {
  const inputConfigurations = FORMS_CONFIGURATION.inputs.confirmCodeForm;

  const template = `
        <div id="confirm-code-form" class="confirm-code-form">
            <div class="confirm-code-form__main-content">
                <div class="main-content__preview">
                  <h2 class="preview__title">Подтвердите телефон</h2>
                  <img id="closeImg" class="preview__close-img" src="/graphics/icons/close.svg" alt="">
                </div>
                <div>
                  <div class="confirm-code-form__indication">Вам позвонят на номер <strong>{{phone}}</strong></div>
                  {{#inputConfigurations}}
                      <div class="confirm-code-form__input">
                          {{&input}}
                      </div>
                  {{/inputConfigurations}}
                </div>  
            </div>
            
            <div class="confirm-code-form__buttons">
                <div id="confirm-code-button" class="confirm-code-form__button-confirm-code">{{&confirm}}</div>
                {{&sendAgain}}
            </div>
        </div>
    `;



  return Mustache.render(template, {
    phone,
    inputConfigurations,
    input() {
      return UIKIT.input(
        this.title,
        this.type,
        this.width,
        this.placeholder,
        this.id
      );
    },
    confirm() {
      return UIKIT.simpleButton(
        "Подтвердить",
        COLORS.primary,
        this.width,
        "main",
        "confirmCodeButton"
      );
    },
    sendAgain() {
      return UIKIT.simpleButton(
        "Отправить код повторно",
        COLORS.grey,
        this.width,
        "confirmCode",
        "sendCodeButton"
      );
    },
  });
};

export default confirmCodeForm;
