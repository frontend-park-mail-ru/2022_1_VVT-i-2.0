import UIKIT from '../../ui-kit/import.js';
import COLORS from '../../utils/colors.js';
import FORM_CONFIGURATION from '../../import-form-configurations.js';

/**
 * @function Создает html-строку для создания компонента формы авторизации
 *      profileMenuPoint через шаблонатор Mustache.
 * @return {string} HTML строка для отрисовки компонента registerForm.
 */
const loginForm = () => {
    const inputConfigurations = FORM_CONFIGURATION.loginForm;

    const template = `
        <div id="login-form" class="login-form">
            <img id="closeImg" class="login-form__close-img" src="icons/close.svg" alt="">
            <h2 class="login-form__title">Войти в аккаунт</h2>
                {{#inputConfigurations}}
                    <div class="login-form__input">
                        {{&input}}
                    </div>
                {{/inputConfigurations}}
            <div id="login-button" class="login-form__button-login">{{&login}}</div>
            {{&register}}
        </div>
    `;

    return Mustache.render(template, {
        inputConfigurations: inputConfigurations,
        input () {
            return UIKIT.input(this.title, this.type, this.placeholder, this.id);
        },
        login () {
            return UIKIT.simpleButton('Войти', COLORS.primary, '', 'loginButton');
        },
        register () {
            return UIKIT.simpleButton('Регистрация', COLORS.grey, 'register','registerButton');
        }
    });
};

export default loginForm;
