import UIKIT from '../../ui-kit/import.js';
import COLORS from '../../utils/colors.js';
import FORM_CONFIGURATION from '../../import-form-configurations.js';

/**
 * @function Создает html-строку для создания компонента формы регистрации
 *      registerForm через шаблонатор Mustache.
 * @return {string} HTML строка для отрисовки компонента registerForm.
 */
const registerForm = () => {
    const configuration = FORM_CONFIGURATION.registerForm;

    const template = `
        <div id="register-form">
            <img id="closeImg" src="icons/close.svg">
            <h2>Создать аккаунт</h2>
            {{#configuration}}
                <div class="property">
                    {{&input}}
                </div>
            {{/configuration}}
            <div id="register-button">{{&register}}</div>
            {{&login}}
        </div>
    `;

    return Mustache.render(template, {
        configuration: configuration,
        input() {
            return UIKIT.input(this.title, this.type, this.placeholder, this.id);
        },
        register() {
            return UIKIT.simpleButton('Регистрация', COLORS.primary, null, 'registerButton');
        },
        login() {
            return UIKIT.simpleButton('Уже есть аккаунт?', COLORS.grey, 'login');
        }
    });
};

export default registerForm;
