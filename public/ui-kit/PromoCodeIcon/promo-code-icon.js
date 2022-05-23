const smallLengthLimit = 10;

const promoCodeIcon = (
  promoBackground,
  discountDescription,
  restLogoImage,
  promoCode,
  positionInStore,
  restName
) => {
  let smallDescription = discountDescription.length <= smallLengthLimit;

  const template = `
    <div class="promo-code-block">
      <div data-id="{{positionInStore}}" class="promo-code-block__promo-code-icon promoCode" style="background-image: url({{promoBackground}});">
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
      <div class="promo-code-block__rest-name">
        {{restName}}
      </div>
    </div>
    `;
  return Mustache.render(template, {
    promoBackground,
    discountDescription,
    restLogoImage,
    promoCode,
    positionInStore,
    smallDescription,
    restName,
  });
};

export default promoCodeIcon;
