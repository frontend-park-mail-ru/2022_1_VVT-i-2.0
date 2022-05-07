import { renderAndUpdateURN } from "../../../render/render";

export const categories = () => {
  return {
    category: [
      {
        type: "click",
        selector: "class",
        listener(app, store, e) {
          const { title } = e.target.dataset;

          const params = sessionStorage.getItem("params");
          if (title === params) {
            renderAndUpdateURN("/");
          } else {
            store.actions.clearRestaurants();
            renderAndUpdateURN(`/main/${title}`);
          }
        }
      }
    ],
    categoriesSelect: [
      {
        type: "change",
        selector: "id",
        listener(app, store, e) {
          const title = e.target.value;

          if (title === 'Все') {
            renderAndUpdateURN("/");
          }

          const params = sessionStorage.getItem("params");
          if (title !== params) {
            store.actions.clearRestaurants();
            renderAndUpdateURN(`/main/${title}`);
          }
        }
      }
    ]
  };
};
