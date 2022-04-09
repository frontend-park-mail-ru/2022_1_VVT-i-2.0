import UIKIT from '../../ui-kit/import.js';
import COLORS from '../../utils/colors.js';
import FORM_CONFIGURATION from '../../import-form-configurations.js';

/**
 * @function Создает html-строку для создания компонента формы регистрации
 *      registerForm через шаблонатор Mustache.
 * @return {string} HTML строка для отрисовки компонента registerForm.
 */
const registerForm = () => {
    const inputConfigurations = FORM_CONFIGURATION.registerForm;

    const template = `
        <div id="register-form" class="register-form">
            <img id="closeImg" class="register-form__close-img" src="icons/close.svg">
            <h2 class="register-form__title">Создать аккаунт</h2>
            {{#inputConfigurations}}
                <div class="register-form__input">
                    {{&input}}
                </div>
            {{/inputConfigurations}}
            <div id="register-button" class="register-form__button-register">{{&register}}</div>
            {{&login}}
        </div>
    `;

    return Mustache.render(template, {
        inputConfigurations: inputConfigurations,
        input() {
            return UIKIT.input(this.title, this.type, this.placeholder, this.id);
        },
        register() {
            return UIKIT.simpleButton('Регистрация', COLORS.primary, '', 'registerButton');
        },
        login() {
            return UIKIT.simpleButton('Уже есть аккаунт?', COLORS.grey, 'login', '');
        }
    });
};

export default registerForm;
