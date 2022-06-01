import UIKIT from "../../ui-kit/import.js";

const restIcons = (restaurants) => {
  console.log(restaurants);
  let searchRequestReturnsNothing = false;
  const query = sessionStorage.getItem("getRestBySearchRequest");
  if (restaurants.length === 0) {
    searchRequestReturnsNothing = true;
    sessionStorage.setItem("searchRequestReturnsNothing", "true");
    sessionStorage.removeItem("getRestBySearchRequest");
  }
  console.log("searchRequestReturnsNothing", searchRequestReturnsNothing)
  const template = `
        <div class="restaurants-form">
          {{#searchRequestReturnsNothing}}
            <div class="restaurants-form__empty-rest-list">
              По вашему запросу "{{query}}" ничего не найдено. Попробуйте ввести другой ресторан или категорию
            </div>
          {{/searchRequestReturnsNothing}}
          {{^searchRequestReturnsNothing}}
            {{#restaurants}}
                <section class="restaurants-form__rest_icon" data-section="{{href}}">
                    <img class="rest-icon__rest_img" src={{imgPath}} alt={{restName}} data-section="{{href}}">
                    {{&metaInformation}}
                </section>
            {{/restaurants}}
          {{/searchRequestReturnsNothing}}
        </div>
    `;
  return Mustache.render(template, {
    restaurants: restaurants,
    searchRequestReturnsNothing,
    query,
    href() {
      return `/dishes/${this.slug}`;
    },
    metaInformation() {
      return UIKIT.restMetaInformation(
        this.restName,
        this.timeToDeliver,
        this.price,
        this.rating
      );
    },
  });
};

export default restIcons;
