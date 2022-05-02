import components from "../../components/import.js";
import UIKIT from "../../ui-kit/import.js";

const commentsPage = (app, store) => {
  const params = sessionStorage.getItem("params");
  if (!params) {
    return;
  }

  if (!store.getters.dishes().hasOwnProperty(params)) {
    store.actions.getDishes(params);
    return;
  }

  // if (!store.getters.comments().hasOwnProperty(params)) {
  //   store.actions.getComments(params);
  //   return;
  // }

  const dishObj = store.getters.dishes()[params];
  const restName = dishObj.restName;

  const comments = store.getters.comments()[params].comments;
  // const comments = [];

  app.root.innerHTML = components.header();

  const main = document.createElement("main");
  main.innerHTML =
    UIKIT.backButton("Назад", `/dishes/${params}`) +
    UIKIT.simpleTitle(`Отзывы о ${restName}`) +
    components.comments(dishObj.rating, comments);

  app.root.appendChild(main);
};

export default commentsPage;
