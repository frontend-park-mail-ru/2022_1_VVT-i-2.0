import UIKIT from '../../ui-kit/import.js';
import COLORS from '../../configurations/colors/colors.js';
import FORMS_CONFIGURATION from '../../configurations/forms.js';
import ELEMS_CONFIGURATION from '../../configurations/elems.js';

/**
 * @function Создает html-строку для создания компонента формы авторизации
 *      profileMenuPoint через шаблонатор Mustache.
 * @return {string} HTML строка для отрисовки компонента registerForm.
 */
const confirmCodeForm = (phone) => {
    const inputConfigurations = FORMS_CONFIGURATION.inputs.confirmCodeForm;

    const template = `
        <div id="confirm-code-form" class="confirm-code-form">
            <img id="closeImg" class="confirm-code-form__close-img" src="/graphics/icons/close.svg" alt="">
            <h2 class="confirm-code-form__title">Подтвердите телефон</h2>
            <div class="confirm-code-form__indication">Код отправлен на номер
                <strong>{{phone}}</strong>
            </div>
            {{#inputConfigurations}}
                <div class="confirm-code-form__input">
                    {{&input}}
                </div>
            {{/inputConfigurations}}
            <div id="confirm-code-button" class="confirm-code-form__button-confirm-code">{{&confirm}}</div>
            {{&sendAgain}}
        </div>
    `;

    return Mustache.render(template, {
        phone, inputConfigurations,
        input () {
            return UIKIT.input(this.underlinedTitle, this.type, this.width, this.placeholder, this.id);
        },
        confirm () {
            return UIKIT.simpleButton('Подтвердить', COLORS.primary,
                ELEMS_CONFIGURATION.buttons.STANDARD, 'main', 'confirmCodeButton');
        },
        sendAgain () {
            return UIKIT.simpleButton('Отправить код повторно', COLORS.grey,
                ELEMS_CONFIGURATION.buttons.STANDARD,'confirmCode','sendCodeButton');
        }
    });
};

export default confirmCodeForm;
