import UIKIT from "../../ui-kit/import.js";

const promoCodeLine = (props) => {
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
      return UIKIT.promoCodeIcon(
        this.img,
        this.text,
        this.logo,
        this.promocode,
        promoPosition,
        this.restName
      );
    },
  });
};

export default promoCodeLine;
