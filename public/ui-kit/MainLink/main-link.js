/**
 * @function Создает html-строку для отрисовки ui-kit компонента mainLink через шаблонатор Mustache.
 * @param {string} title - название поля input.
 * @return {string} HTML строка для отрисовки ui-kit компонента mainLink.
 */
const mainLink = (title) => {
    const template = `
        <h1>
            <a class="uikit__main-link">{{title}}</a>
        </h1>
    `;
    return Mustache.render(template, {title});
}

export default mainLink;
