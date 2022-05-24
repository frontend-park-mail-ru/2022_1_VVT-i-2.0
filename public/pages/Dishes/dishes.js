import components from "../../components/import.js";
import UIKIT from "../../ui-kit/import.js";

/**
 * @function Рендерит страницу по входящему объекту приложения.
 * @param {Object} app - Объект приложения.
 */
const dishesPage = (app, store) => {
  const params = sessionStorage.getItem("params");
  if (!params) {
    return;
  }

  if (!store.getters.dishes().hasOwnProperty(params)) {
    store.actions.getDishes(params);
    return;
  }

  const dishObj = store.getters.dishes()[params];
  const restName = dishObj.restName;

  app.root.innerHTML = components.header();

  const categories = dishObj.categories
    .filter((category) => category.dishes !== null)
    .map((category) => {
      const dishes = category.dishes.map((id) => dishObj.dishes.find((dish) => dish.id === id));
      return { ...category, dishes };
    });

  const main = document.createElement("main");
  main.innerHTML =
    UIKIT.backButton("Все рестораны", "main") +
    UIKIT.simpleTitle(restName) +
    UIKIT.commentsBlock(params, dishObj.rating, dishObj.reviewCount) +
  components.dishesIcons(categories, restName);

  app.root.appendChild(main);
};

export default dishesPage;
