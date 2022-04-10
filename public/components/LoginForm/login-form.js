import UIKIT from '../../ui-kit/import.js';
import COLORS from '../../configurations/colors.js';
import FORMS_CONFIGURATION from '../../configurations/forms.js';

/**
 * @function Создает html-строку для создания компонента формы авторизации
 *      profileMenuPoint через шаблонатор Mustache.
 * @return {string} HTML строка для отрисовки компонента registerForm.
 */
const loginForm = () => {
    const inputConfigurations = FORMS_CONFIGURATION.inputs.loginForm;

    const template = `
        <div id="login-form" class="login-form">
            <img id="closeImg" class="login-form__close-img" src="graphics/icons/close.svg" alt="">
            <h2 class="login-form__title">Войти в аккаунт</h2>
            <div class="login-form__indication">Для авторизации заполните поле телефон</div>
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
            return UIKIT.input(this.title, this.type, this.width, this.placeholder, this.id);
        },
        login () {
            return UIKIT.simpleButton('Войти', COLORS.primary, this.width, '', 'loginButton');
        },
        register () {
            return UIKIT.simpleButton('Регистрация', COLORS.grey, this.width,'register','registerButton');
        }
    });
};

export default loginForm;
