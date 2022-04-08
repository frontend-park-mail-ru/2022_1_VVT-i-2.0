/**
 * @function Создает html-строку для создания ui-kit компонента prMetaInf формы через шаблонатор Mustache.
 * @param {string} productName - название товара.
 * @param {string} info - информация товара о калоариях и весе.
 * @param {string} description - описание товара.
 * @param {string} price - цена товара.
 * @return {string} HTML строка для отрисовки ui-kit компонента productMetaInformation.
 */
const productMetaInformation = (productName, info, description, price) => {
  const template = `
    <div class="prod-icon__meta-info-block">
      <div class="prod-icon__name">
        {{productName}}
      </div>
      <div class="prod-icon__calories-info">
        {{info}}
      </div>
      <div class="prod-icon__description">
        {{description}}
      </div>
      <div class="prod-icon__price-bar">
        <div>{{price}} ₽</div>
        <button class="prod-icon__button-add-to-order">В корзину</button>
      </div>
    </div>
  `;
  return Mustache.render(template, {
    productName, info, description, price,
  });
};

export default productMetaInformation;
