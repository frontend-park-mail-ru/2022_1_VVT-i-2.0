/**
 * @function Создает html-строку для создания ui-kit компонента button через шаблонатор Mustache.
 * @param {string} title - название кнопки.
 * @param {string} color - цвет кнопки.
 * @param {string} href - значение поля data-section.
 * @param {string} id - id кнопки.
 * @return {string} HTML строка для отрисовки ui-kit компонента button.
 */
const button = (title, color, href, id) => {
    const template = `
        <button
            {{#id}} id={{id}} {{/id}}
            class="button"
            style="background-color: {{color}}"
            data-section="{{href}}"
        >
            {{title}}
        </button>
    `;
    return Mustache.render(template, {title, color, href, id});
};

export default button;
