import UIKIT from "../../ui-kit/import.js";
import COLORS from "../../configurations/colors/colors.js";
import FORMS_CONFIGURATION from "../../configurations/forms.js";

/**
 * @function Создает html-строку для создания компонента формы регистрации
 *      registerForm через шаблонатор Mustache.
 * @return {string} HTML строка для отрисовки компонента registerForm.
 */
const registerForm = () => {
  const inputConfigurations = FORMS_CONFIGURATION.inputs.registerForm;

  const template = `
        <div id="register-form" class="register-form">
            <div class="register-form__main-content">
                <div class="main-content__preview">
                  <h2 class="preview__title">Создать аккаунт</h2>
                  <img id="closeImg" class="preview__close-img" src="/graphics/icons/close.svg" alt="">
                </div>
                <div>
                  {{#inputConfigurations}}
                      <div class="register-form__input">
                          {{&input}}
                      </div>
                  {{/inputConfigurations}}
                </div>  
            </div>
            
            <div class="register-form__buttons">
                <div id="register-button" class="register-form__button-register">{{&register}}</div>
                {{&login}}
            </div>
        </div>
    `;

  return Mustache.render(template, {
    inputConfigurations: inputConfigurations,
    input() {
      return UIKIT.input(
        this.title,
        this.type,
        // this.width,
        this.placeholder,
        this.id
      );
    },
    register() {
      return UIKIT.simpleButton(
        "Регистрация",
        COLORS.primary,
        this.width,
        "",
        "registerButton"
      );
    },
    login() {
      return UIKIT.simpleButton(
        "Уже есть аккаунт?",
        COLORS.grey,
        this.width,
        "login",
        ""
      );
    },
  });
};

export default registerForm;
