import { renderAndUpdateURN } from "../../../render/render.js";

export const dishEvents = () => {
  return {
    addToCart: [
      {
        type: "click",
        selector: "class",
        listener(app, store, e) {
          const { id, rest, price } = e.target.dataset;
          store.actions.addDishToCart(parseInt(id, 10), rest, price);
          renderAndUpdateURN("/shoppingCart", true);
        },
      },
    ],
    incrementDishCount: [
      {
        type: "click",
        selector: "class",
        listener(app, store, e) {
          const { id } = e.target.dataset;

          if (e.target instanceof HTMLImageElement) {
            e.stopPropagation();
          }

          store.actions.incrementDishCount(parseInt(id, 10));
        },
      },
    ],
    decrementDishCount: [
      {
        type: "click",
        selector: "class",
        listener(app, store, e) {
          const { id } = e.target.dataset;

          if (e.target instanceof HTMLImageElement) {
            e.stopPropagation();
          }

          store.actions.decrementDishCount(parseInt(id, 10));
        },
      },
    ],
    orderingComment: [
      {
        type: "focus",
        selector: "id",
        listener(app, store, e) {
          if (e.target.innerText === "") {
            e.target.innerHTML = "<br>";
          }
        },
      },
    ],
  };
};
