import UIKIT from '../../ui-kit/import.js';
import COLORS from '../../utils/colors.js';

const loginForm = (properties) => {
    const template = `
        <div id="login-form">
            <img src="icons/close.svg">
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
        input() {
            return UIKIT.input(this.title, this.placeholder);
        },
        login() {
            return UIKIT.button('Войти', COLORS.primary);
        },
        register() {
            return UIKIT.button('Регистрация', COLORS.grey, 'register');
        }
    });
};

export default loginForm;
