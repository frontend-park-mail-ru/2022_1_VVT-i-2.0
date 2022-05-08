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

          const query = e.target.value;
          sessionStorage.setItem('searchQuery', query);
          store.actions.getRestaurants({ q: query }).then(() => renderAndUpdateURN("/"));
        }
      },
    ],
  };
};
