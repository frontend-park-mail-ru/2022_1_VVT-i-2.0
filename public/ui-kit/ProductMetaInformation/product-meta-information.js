/**
 * @function Создает html-строку для создания ui-kit компонента prMetaInf формы через шаблонатор Mustache.
 * @param {string} productName - название товара.
 * @param {string} info - информация товара о калоариях и весе.
 * @param {string} description - описание товара.
 * @param {string} price - цена товара.
 * @return {string} HTML строка для отрисовки ui-kit компонента prMetaInf.
 */
const prMetaInf = (productName, info, description, price) => {
  const template = `
    <div class="product_meta_information_block">
      <div class="product_name">
        {{productName}}
      </div>
      <div class="info">
        {{info}}
      </div>
      <div class="description">
        {{description}}
      </div>
      <div class="bottom">
        <div>{{price}} ₽</div>
        <button>В корзину</button>
      </div>
    </div>
  `;
  return Mustache.render(template, {
    productName, info, description, price,
  });
};

export default prMetaInf;
