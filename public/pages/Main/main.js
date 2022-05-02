import components from "../../components/import.js";
import UIKIT from "../../ui-kit/import.js";

const mainPage = (app, store) => {
  const params = sessionStorage.getItem("params");

  const categories = store.getters.categories()
    .map((category) => {
      if (category.title === params) {
        return { ...category, selected: true };
      }
      return category;
    });

  if (store.getters.restaurants().length === 0) {
    if (categories.some((category) => category.title === params)) {
      store.actions.getRestaurants({ category: params });
    } else {
      store.actions.getRestaurants();
    }

    return;
  }

  app.root.innerHTML = components.header();

  const main = document.createElement("main");
  main.innerHTML =
    UIKIT.mainLink("Рестораны") + components.categories(categories) +
    components.restIcons(store.getters.restaurants);

  app.root.appendChild(main);
};

export default mainPage;
