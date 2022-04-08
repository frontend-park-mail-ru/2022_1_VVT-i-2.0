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
        <div id="login-form">
            <img id="closeImg" src="icons/close.svg">
            <h2>Войти в аккаунт</h2>
                {{#properties}}
                    <div class="property">
                        {{&input}}
                    </div>
                {{/properties}}
            <div id="login-button">{{&login}}</div>
            {{&register}}
        </div>
    `;

    return Mustache.render(template, {
        properties: properties,
        input () {
            return UIKIT.input(this.title, this.type, this.placeholder, this.id);
        },
        login () {
            return UIKIT.simpleButton('Войти', COLORS.primary, null, 'loginButton');
        },
        register () {
            return UIKIT.simpleButton('Регистрация', COLORS.grey, 'register');
        }
    });
};

export default loginForm;
