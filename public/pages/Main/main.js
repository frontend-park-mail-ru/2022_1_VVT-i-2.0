import components from "../../components/import.js";
import UIKIT from "../../ui-kit/import.js";

const mainPage = (app, store) => {
  if (store.getters.restaurants().length === 0) {
    store.actions.getRestaurants();
    return;
  }

  const user = store.getters.user();

  app.root.innerHTML = components.header(Object.keys(user).length !== 0, user);

  const main = document.createElement("main");
  main.innerHTML =
    UIKIT.mainLink("Рестораны") +
    components.restIcons(store.getters.restaurants);

  app.root.appendChild(main);
};

export default mainPage;
