/**
 * @function Создает html-строку для создания ui-kit компонента metaInf формы через шаблонатор Mustache.
 * @return {string} HTML строка для отрисовки ui-kit компонента metaInf.
 */

// Скидка 25%
// Скидка 23% при заказе от 1000 рублей
const promoCodeIcon = (promoBackground, discountDescription, restLogoImage, promoCode) => {
  const template = `
    <div class="promo-code-icon" style="background-image: url("{{promoBackground}}");">
<!--    Проверка на класс-->
      <div class="promo-code-icon__discount_large-description">
          <div class="large-description__text">
            {{discountDescription}}
          </div>
      </div>
  
      <div class="promo-code-icon__additional-info">
          <div class="additional-info__restaurant-logo">
              <img src="{{restLogoImage}}" alt="restaurant logo">
          </div>
          <div class="additional-info__promo-code">
              <div class="promo-code_position">
                  <div class="promo-code__dice">
                      <div class="dice__code">
                          {{promoCode}}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    `;
  return Mustache.render(template, {
    promoBackground, discountDescription,
    restLogoImage, promoCode
  });
};

export default promoCodeIcon;
