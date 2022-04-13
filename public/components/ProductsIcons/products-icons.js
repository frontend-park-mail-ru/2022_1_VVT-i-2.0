import UIKIT from '../../ui-kit/import.js';

/**
 * @function Создает html-строку для создания компонента формы продукта
 *      restIcon через шаблонатор Mustache.
 * @param {Object} products - Объект, содержащий данные, полученные с сервера.
 * @return {string} HTML строка для отрисовки компонента registerForm.
 */
const productsIcons = (products, restName) => {
  const template = `
    <div class="rest-menu">
      {{#products}}
        <section class="rest-menu__product-icon">
          <img class="product-icon__img" src={{imgPath}} alt={{productName}}>
          {{&prodMetaInfo}}
        </section>
      {{/products}}
    </div>
  `;
  return Mustache.render(template, {
    products: products, restName,
    prodMetaInfo() {
      return UIKIT.productMetaInformation(this.productName, this.info, this.description, this.price, this.id, restName);
    }
  });
};

export default productsIcons;
