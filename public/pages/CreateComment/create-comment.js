import components from "../../components/import.js";
import UIKIT from "../../ui-kit/import.js";

const createCommentPage = (app, store) => {
  const params = sessionStorage.getItem("params");
  if (!params) {
    return;
  }

  app.root.innerHTML = components.header();

  const main = document.createElement("main");
  main.innerHTML =
    UIKIT.backButton("Назад", `/dishes/${params}`) +
    UIKIT.simpleTitle('Ваши отзывы очень важны для нас!') +
    components.createCommentForm();

  app.root.appendChild(main);
};

export default createCommentPage'
