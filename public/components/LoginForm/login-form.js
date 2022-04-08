import UIKIT from '../../ui-kit/import.js';
import COLORS from '../../utils/colors.js';

/**
 * @function Создает html-строку для создания компонента формы авторизации
 *      profileMenuPoint через шаблонатор Mustache.
 * @param {Object} properties - Объект, содержащий аттрибуты тегов для отрисовки формы.
 * @return {string} HTML строка для отрисовки компонента registerForm.
 */
const loginForm = () => {
    const properties = [
        {
            title: 'Телефон',
            placeholder: '+7(',
            id: 'loginPhone'
        },
        {
            title: 'Пароль',
            type: 'password',
            placeholder: 'Введите пароль',
            id: 'loginPassword'
        },
    ];

    const template = `
        <div id="login-form" class="login-form">
            <img id="closeImg" class="login-form__close-img" src="icons/close.svg" alt="">
            <h2 class="login-form__title">Войти в аккаунт</h2>
                {{#properties}}
                    <div class="login-form__input">
                        {{&input}}
                    </div>
                {{/properties}}
            <div id="login-button" class="login-form__button-login">{{&login}}</div>
            {{&register}}
        </div>
    `;

    return Mustache.render(template, {
        properties: properties,
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
