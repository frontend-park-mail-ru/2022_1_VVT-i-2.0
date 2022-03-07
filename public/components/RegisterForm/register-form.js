import UIKIT from '../../ui-kit/import.js';
import COLORS from '../../utils/colors.js';

const registerForm = (properties) => {
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
            return UIKIT.input(this.title, this.placeholder);
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
