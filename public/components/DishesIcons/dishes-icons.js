import UIKIT from "../../ui-kit/import.js";

const dishesIcons = (dishes, restName) => {
  const template = `
    <div class="rest-menu">
      {{#dishes}}
        <section class="rest-menu__dish-icon">
          <div class="dish-icon__img-block">
            <img class="dish-icon__img" src={{imgPath}} alt={{dishName}}>
          </div>
          {{&dishMetaInfo}}
        </section>
      {{/dishes}}
    </div>
  `;
  return Mustache.render(template, {
    dishes: dishes,
    restName,
    dishMetaInfo() {
      return UIKIT.dishMetaInformation(
        this.productName,
        this.weight,
        this.info,
        this.description,
        this.price,
        this.id,
        restName
      );
    },
  });
};

export default dishesIcons;
