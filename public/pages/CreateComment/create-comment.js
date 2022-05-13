import components from "../../components/import.js";
import UIKIT from "../../ui-kit/import.js";

const createCommentPage = (app, store) => {
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

  const main = document.createElement("main");
  main.innerHTML =
    UIKIT.backButton("Назад", `/comments/${params}`) +
    UIKIT.simpleTitle(`Оставить отзыв о ${restName}`) +
    components.createCommentForm();

  app.root.appendChild(main);
};

export default createCommentPage;
