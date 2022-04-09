import ELEMS_CONFIGURATION from '../../configurations/elems.js';

/**
 * @function Создает html-строку для создания ui-kit компонента input формы через шаблонатор Mustache.
 * @param {string} title - название поля input.
 * @param {string} type - значение атрибута type тега <input>.
 * @param {number} width - название поля input.
 * @param {string} placeholder - значение атрибута placeholder тега <input>.
 * @param {string} id - значение атрибута id блока поля input и поля ошибки.
 * @param {string} error - текст ошибки валидации входных данных.
 * @return {string} HTML строка для отрисовки ui-kit компонента input.
 */
const input = (title, type, width = ELEMS_CONFIGURATION.inputs.STANDARD,
               placeholder, id, error = 'Ошибка') => {
    const template = `
        <div class="uikit__input-block">
            <div class="input-block__title">{{title}}</div>
            <div {{#id}} id={{id}} {{/id}}>
                <input style="width: {{width}}px" class="input-block__input" placeholder="{{placeholder}}" type="{{type}}">
                <div class="input-block__input-underline hidden">{{error}}</div>
            </div>
        </div>
    `;

    return Mustache.render(template, {
        title,
        type,
        width,
        placeholder,
        id,
        error
    });
};

export default input;
