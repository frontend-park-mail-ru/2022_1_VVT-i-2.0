import {
  renderAndUpdateURN,
  renderNotification,
} from "../../../render/render.js";
import { DEFAULT_ADDRESS } from "../../../index";
import { EntityLengthLimit } from "../../common/config";

export const dishEvents = () => {
  return {
    addToCart: [
      {
        type: "click",
        selector: "class",
        listener(app, store, e) {
          if (Object.keys(store.getters.user()).length === 0) {
            renderAndUpdateURN("/login");
            return;
          }

          const { id, rest, price } = e.target.dataset;
          if (
            document.getElementById("suggestsSearch").value === DEFAULT_ADDRESS
          ) {
            renderAndUpdateURN("/suggests");
            // renderNotification(
            //   "Для этого действия необходимо выбрать адрес доставки",
            //   true
            // );
            return;
          }

          const count =
            rest === store.getters.currentRestName()
              ? store.getters.cart().order.length
              : 0;

          store.actions.addDishToCart(parseInt(id, 10), rest, price);

          const order = store.getters.cart().order;
          if (order.length > count) {
            const params = sessionStorage.getItem("params");
            const dishesObj = store.getters.dishes()[params];

            store.actions.getRecommendations({
              restId: dishesObj.id,
              orderList: order,
            });
          }

          if (window.screen.width >= 1000) {
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
        type: "input",
        selector: "id",
        listener(app, store, e) {
          e.target.value = e.target.value.slice(0, EntityLengthLimit.comment);
        },
      },
    ],
  };
};
