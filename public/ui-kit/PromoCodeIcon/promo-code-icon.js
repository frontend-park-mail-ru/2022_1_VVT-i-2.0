const smallLengthLimit = 10;

const promoCodeIcon = (promoBackground, discountDescription, restLogoImage, promoCode, restSlug) => {
  let smallDescription = discountDescription.length <= smallLengthLimit;

  const template = `
    <div data-rest="{{restSlug}}" class="promo-code-icon" style="background-image: url("{{promoBackground}}");">
      {{#smallDescription}}
      <div class="promo-code-icon__discount_small-description">
          <div class="small-description__text">
      {{/smallDescription}}
      {{^smallDescription}}
      <div class="promo-code-icon__discount_large-description">
          <div class="large-description__text">
      {{/smallDescription}}
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
    restLogoImage, promoCode, restSlug,
    smallDescription
  });
};

export default promoCodeIcon;
