import UIKIT from '../../ui-kit/import.js';

/**
 * @function Создает html-строку для создания компонента формы продукта
 *      restIcon через шаблонатор Mustache.
 * @param {Object} products - Объект, содержащий данные, полученные с сервера.
 * @return {string} HTML строка для отрисовки компонента registerForm.
 */
const productsIcons = (products) => {
  const template = `
    <div id="products-container">
      {{#products}}
        <div class="product_icon">
          <img src={{imgPath}} alt={{productName}}>
          {{&prodMetaInfo}}
        </div>
      {{/products}}
    </div>
  `;
  return Mustache.render(template, {
    products: products,
    prodMetaInfo() {
      return UIKIT.productMetaInformation(this.productName, this.info, this.description, this.price);
    }
  });
};

export default productsIcons;
