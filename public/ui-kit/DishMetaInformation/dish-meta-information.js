/**
 * @function Создает html-строку для создания ui-kit компонента prMetaInf формы через шаблонатор Mustache.
 * @param {string} dishName - название товара.
 * @param {string} info - информация товара о калоариях и весе.
 * @param {string} description - описание товара.
 * @param {string} price - цена товара.
 * @return {string} HTML строка для отрисовки ui-kit компонента dishMetaInformation.
 */
const dishMetaInformation = (dishName, weight, info, description, price, id, restName) => {
  const template = `
    <div class="prod-icon__meta-info-block">
      <div class="prod-icon__name">
        {{dishName}}
      </div>
      <div class="prod-icon__calories-info">
        {{weight}} г · {{info}} ккал
      </div>
      <div class="prod-icon__description">
        {{description}}
      </div>
      <div class="prod-icon__price-bar">
        <div>{{price}} ₽</div>
        <button
          class="prod-icon__button-add-to-order addToCart"
          data-id="{{id}}"
          data-rest="{{restName}}"
        >
          В корзину
        </button>
      </div>
    </div>
  `;
  return Mustache.render(template, {
<<<<<<< HEAD:public/ui-kit/ProductMetaInformation/product-meta-information.js
    productName,
    weight,
    info,
    description,
    price,
    id,
    restName,
=======
    dishName, weight, info, description, price, id, restName
>>>>>>> Renamed products and add cart to localstorage:public/ui-kit/DishMetaInformation/dish-meta-information.js
  });
};

export default dishMetaInformation;
