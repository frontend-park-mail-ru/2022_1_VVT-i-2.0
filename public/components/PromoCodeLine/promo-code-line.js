import UIKIT from "../../ui-kit/import.js";

const promoCodeLine = (props) => {
  // props = [
  //   {img: './graphics/images/avatar.jpg',
  //     restLogo: './graphics/icons/profile.svg',
  //     text: 'Скидка 25%',
  //     promocode: 'Summary2030',
  //     restSlug: '',}
  // ];
  const template = `       
    <div class="promo-code-line"></div>
      {{#props}}
        {{&promo}}
      {{/props}}
    </div>
  `;

  return Mustache.render(template, {
    props,
    promo() {
      return UIKIT.promoCodeIcon(this.img, this.text, this.restLogo, this.promocode, this.restSlug);
    },
  });
};

export default promoCodeLine;
