import UIKIT from '../../ui-kit/import.js';
import COLORS from '../../utils/colors.js';

/**
 * @function Создает html-строку для создания компонента формы регистрации
 *      registerForm через шаблонатор Mustache.
 * @param {Object} properties - Объект, содержащий аттрибуты тегов для отрисовки формы.
 * @return {string} HTML строка для отрисовки компонента registerForm.
 */
const registerForm = () => {
    const properties = [
        {
            title: 'Телефон',
            width: 300,
            placeholder: '+7(',
            id: 'registerPhone'
        },
        {
            title: 'Имя',
            width: 300,
            placeholder: 'Сергей',
            id: 'registerName'
        },
        {
            title: 'Пароль',
            width: 300,
            type: 'password',
            placeholder: 'Введите пароль',
            id: 'registerPassword'
        },
        {
            title: 'Повторите пароль',
            width: 300,
            type: 'password',
            placeholder: 'Введите пароль',
            id: 'registerRepeatPassword'
        },
    ];

    const template = `
        <div id="register-form">
            <img id="closeImg" src="icons/close.svg">
            <h2>Создать аккаунт</h2>
            {{#properties}}
                <div class="property">
                    {{&input}}
                </div>
            {{/properties}}
            <div id="register-button">{{&register}}</div>
            {{&login}}
        </div>
    `;

    return Mustache.render(template, {
        properties: properties,
        input() {
            return UIKIT.input(this.title, this.type, this.placeholder, this.id);
        },
        register() {
            return UIKIT.button('Регистрация', COLORS.primary, null, 'registerButton');
        },
        login() {
            return UIKIT.button('Уже есть аккаунт?', COLORS.grey, 'login');
        }
    });
};

export default registerForm;
