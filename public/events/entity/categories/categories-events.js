import { renderAndUpdateURN } from "../../../render/render";

export const categories = () => {
  return {
    category: [
      {
        type: "click",
        selector: "class",
        listener(app, store, e) {
          const { title } = e.target.dataset;

          store.actions.clearRestaurants();
          renderAndUpdateURN(`/main/${title}`);
        }
      }
    ]
  };
};
