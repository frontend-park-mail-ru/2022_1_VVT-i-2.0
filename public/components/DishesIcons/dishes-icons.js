import UIKIT from "../../ui-kit/import.js";

const dishesIcons = (dishes, restName) => {
  const template = `
    <div class="rest-menu">
      {{#dishes}}
        <section class="rest-menu__dish-icon">
          <img class="dish-icon__img" src={{imgPath}} alt={{dishName}}>
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
        this.dishName,
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
