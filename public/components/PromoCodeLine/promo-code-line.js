import UIKIT from "../../ui-kit/import.js";

const promoCodeLine = (props) => {
  // props = [
  //   {
  //     img: './graphics/images/avatar.jpg',
  //     restLogo: './graphics/icons/profile.svg',
  //     text: 'Скидка 25%',
  //     promocode: 'Di2s20',
  //     discount: 0.8,
  //     minDiscountPrice: 0,
  //     priceReduction: 0,
  //     restSlug: 'dostaevskii',
  //     },
  //   {
  //     img: './graphics/images/avatar.jpg',
  //     restLogo: './graphics/icons/profile.svg',
  //     text: 'Скидка 25%',
  //     promocode: 'Di2s20',
  //     discount: 0.8,
  //     minDiscountPrice: 0,
  //     priceReduction: 0,
  //     restSlug: 'dostaevskii',
  //   },
  //   {
  //     img: './graphics/images/avatar.jpg',
  //     restLogo: './graphics/icons/profile.svg',
  //     text: 'Скидка 25%',
  //     promocode: 'Di2s20',
  //     discount: 0.8,
  //     minDiscountPrice: 0,
  //     priceReduction: 0,
  //     restSlug: 'dostaevskii',
  //   },
  //   {
  //     img: './graphics/images/avatar.jpg',
  //     restLogo: './graphics/icons/profile.svg',
  //     text: 'Скидка 25%',
  //     promocode: 'Di2s20',
  //     discount: 0.8,
  //     minDiscountPrice: 0,
  //     priceReduction: 0,
  //     restSlug: 'dostaevskii',
  //   },
  //   {
  //     img: './graphics/images/avatar.jpg',
  //     restLogo: './graphics/icons/profile.svg',
  //     text: 'Скидка 25%',
  //     promocode: 'Di2s20',
  //     discount: 0.8,
  //     minDiscountPrice: 0,
  //     priceReduction: 0,
  //     restSlug: 'dostaevskii',
  //   },
  //   {
  //     img: './graphics/images/avatar.jpg',
  //     restLogo: './graphics/icons/profile.svg',
  //     text: 'Скидка 25%',
  //     promocode: 'Di2s20',
  //     discount: 0.8,
  //     minDiscountPrice: 0,
  //     priceReduction: 0,
  //     restSlug: 'dostaevskii',
  //   },
  //   {
  //     img: './graphics/images/avatar.jpg',
  //     restLogo: './graphics/icons/profile.svg',
  //     text: 'Скидка 25%',
  //     promocode: 'Di2s20',
  //     discount: 0.8,
  //     minDiscountPrice: 0,
  //     priceReduction: 0,
  //     restSlug: 'dostaevskii',
  //   },
  // ];

  let promoPosition = -1;

  const template = `       
    <div class="promo-code-line">
      {{#props}}
        {{&promo}}
      {{/props}}
    </div>
  `;

  return Mustache.render(template, {
    props,
    promo() {
      promoPosition++;
      return UIKIT.promoCodeIcon(this.img, this.text, this.logo, this.promocode, promoPosition, this.restName);
    },
  });
};

export default promoCodeLine;
