/**
 * @function Создает html-строку для создания ui-kit компонента prMetaInf формы через шаблонатор Mustache.
 * @param {string} dishName - название товара.
 * @param {string} info - информация товара о калоариях и весе.
 * @param {string} description - описание товара.
 * @param {string} price - цена товара.
 * @return {string} HTML строка для отрисовки ui-kit компонента dishMetaInformation.
 */
const dishMetaInformation = (
  dishName,
  weight,
  info,
  description,
  price,
  id,
  restName
) => {
  const template = `
    <div class="dish-icon__meta-info-block">
      <div class="dish-icon__name">
        {{dishName}}
      </div>
      <div class="dish-icon__calories-info">
        {{weight}} г · {{info}} ккал
      </div>
      <div class="dish-icon__description">
        {{description}}
      </div>
      <div class="dish-icon__price-bar">
        <div>{{price}} ₽</div>
        <button
          class="dish-icon__button-add-to-order addToCart"
          data-id="{{id}}"
          data-rest="{{restName}}"
        >
          В корзину
        </button>
      </div>
    </div>
  `;
  return Mustache.render(template, {
    dishName,
    weight,
    info,
    description,
    price,
    id,
    restName,
  });
};

export default dishMetaInformation;
