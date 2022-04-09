import ELEMS_CONFIGURATION from '../../configurations/elems.js';

/**
 * @function Создает html-строку для создания ui-kit компонента button через шаблонатор Mustache.
 * @param {string} title - название кнопки.
 * @param {string} color - цвет кнопки.
 * @param {number} width - цвет кнопки.
 * @param {string} href - значение поля data-section.
 * @param {string} id - id кнопки.
 * @return {string} HTML строка для отрисовки ui-kit компонента button.
 */
const simpleButton = (title, color, width = ELEMS_CONFIGURATION.buttons.STANDARD, href, id) => {
    const template = `
        <button
            {{#id}} id={{id}} {{/id}}
            class="uikit__simple-button"
            style="background-color: {{color}}; width: {{width}}px;"
            data-section="{{href}}"
        >
            {{title}}
        </button>
    `;
    return Mustache.render(template, {title, color, width, href, id});
};

export default simpleButton;
