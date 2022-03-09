import UIKIT from '../../ui-kit/import.js';

/**
 * @function Создает html-строку для создания компонента формы ресторана
 *      restIcon через шаблонатор Mustache.
 * @param {Object} restaurants - Объект, содержащий данные, полученные с сервера.
 * @return {string} HTML строка для отрисовки компонента registerForm.
 */
const restIcons = (restaurants) => {
    const template = `
        <div id="container">
            {{#restaurants}}
                <div class="rest_icon">
                    {{&iconImage}}
                    {{&metaInformation}}
                </div>
            {{/restaurants}}
        </div>
    `;
    return Mustache.render(template, {
        restaurants: restaurants,
        iconImage() {
            return UIKIT.iconImage(this.imgPath, this.restName);
        },
        metaInformation() {
            return UIKIT.metaInformation(this.restName, this.timeToDeliver, this.price, this.rating);
        }
    });
};

export default restIcons;
