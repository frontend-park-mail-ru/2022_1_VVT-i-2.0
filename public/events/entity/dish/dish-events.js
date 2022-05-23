import { renderAndUpdateURN, renderNotification } from "../../../render/render.js";
import { DEFAULT_ADDRESS } from "../../../index";

export const dishEvents = () => {
  return {
    addToCart: [
      {
        type: "click",
        selector: "class",
        listener(app, store, e) {
          const { id, rest, price } = e.target.dataset;
          if (document.getElementById('suggestsSearch').value === DEFAULT_ADDRESS) {
            renderNotification('Для этого действия необходимо выбрать адрес доставки', true);
            return;
          }

          store.actions.addDishToCart(parseInt(id, 10), rest, price);
          if (window.screen.width >= 920) {
            renderAndUpdateURN("/shoppingCart", true);
          }
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

          if (store.getters.IsCartEmpty()) {
            renderAndUpdateURN("/dishes/" + store.getters.getCurrentSlug());
          }
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
