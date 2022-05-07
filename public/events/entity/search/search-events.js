import { renderAndUpdateURN } from "../../../render/render.js";

export const search = () => {
  return {
    searchInput: [
      {
        type: "keyup",
        selector: "id",
        listener(app, store, e) {
          if (e.key !== "Enter" && e.keyCode !== 13) {
            return;
          }

          console.log('SEND SEARCH');

          const query = e.target.value;
          store.actions.getRestaurants({ q: query }).then(() => renderAndUpdateURN("/"));
        }
      },
    ],
  };
};
