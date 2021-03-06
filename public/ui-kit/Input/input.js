import ELEMS_CONFIGURATION from "../../configurations/elems.js";
import FORMS_CONFIGURATION from "../../configurations/forms";

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
const input = (
  title,
  type,
  width = ELEMS_CONFIGURATION.inputs.STANDARD,
  placeholder,
  id,
  name,
  value,
  readonly,
  error = "Ошибка"
) => {
  const template = `
        <div class="input-block">
            <div class="input-block__title">{{title}}</div>
            <div {{#id}} id={{id}} {{/id}}>
                <input
                    style="width: {{width}}px;"
                    {{#readonly}} class="input-block__input-readonly" {{/readonly}}
                    {{^readonly}} class="input-block__input" {{/readonly}}
                    placeholder="{{placeholder}}"
                    type="{{type}}"
                    name="{{name}}"
                    value="{{value}}"
                    {{#readonly}} readonly {{/readonly}}
                >
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
    name,
    value,
    readonly,
    error,
  });
};

export default input;
