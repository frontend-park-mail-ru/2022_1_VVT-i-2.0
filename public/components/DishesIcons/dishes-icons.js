import UIKIT from "../../ui-kit/import.js";

const dishesIcons = (categories, restName) => {
  const template = `
    {{#categories}}
      <div class="rest-menu__category">{{category}}</div>
      <div class="rest-menu">
        {{#dishes}}
          <section class="rest-menu__dish-icon">
            <div class="dish-icon__img-block">
              <img class="dish-icon__img" src={{imgPath}} alt={{productName}}>
            </div>
            {{&dishMetaInfo}}
          </section>
        {{/dishes}}
      </div>
    {{/categories}}
  `;
  return Mustache.render(template, {
    categories,
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
