import UIKIT from '../../ui-kit/import.js';
import COLORS from '../../configurations/colors.js';
import FORMS_CONFIGURATION from '../../configurations/forms.js';

/**
 * @function Создает html-строку для создания компонента формы регистрации
 *      registerForm через шаблонатор Mustache.
 * @return {string} HTML строка для отрисовки компонента registerForm.
 */
const registerForm = () => {
    const inputConfigurations = FORMS_CONFIGURATION.inputs.registerForm;

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
            return UIKIT.input(this.title, this.type, this.width, this.placeholder, this.id);
        },
        register() {
            return UIKIT.simpleButton('Регистрация', COLORS.primary, this.width,'', 'registerButton');
        },
        login() {
            return UIKIT.simpleButton('Уже есть аккаунт?', COLORS.grey, this.width, 'login', '');
        }
    });
};

export default registerForm;
