import UIKIT from "../../ui-kit/import.js";

/**
 * @function Создает html-строку для создания компонента формы ресторана
 *      restIcon через шаблонатор Mustache.
 * @param {Object} restaurants - Объект, содержащий данные, полученные с сервера.
 * @return {string} HTML строка для отрисовки компонента registerForm.
 */
const restIcons = (restaurants) => {
  const template = `
        <div class="restaurants-form">
            {{#restaurants}}
                <section class="restaurants-form__rest_icon" data-section="{{href}}">
                    <img class="rest-icon__rest_img" src={{imgPath}} alt={{restName}} data-section="{{href}}">
                    {{&metaInformation}}
                </section>
            {{/restaurants}}
        </div>
    `;
  return Mustache.render(template, {
    restaurants: restaurants,
    href() {
      return `/dishes/${this.slug}`;
    },
    metaInformation() {
      return UIKIT.restMetaInformation(
        this.restName,
        this.timeToDeliver,
        this.price,
        this.rating
      );
    },
  });
};

export default restIcons;
