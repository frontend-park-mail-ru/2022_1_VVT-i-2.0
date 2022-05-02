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
            sessionStorage.removeItem("params");
            renderAndUpdateURN("/");
          } else {
            store.actions.clearRestaurants();
            renderAndUpdateURN(`/main/${title}`);
          }
        }
      }
    ]
  };
};
