import { renderAndUpdateURN, renderNotification } from "../../../render/render";
import { getParentNodeDataIdByClass } from "./promo-code-src";

export const getPromoCodeEvents = () => {
  return [
    {
      type: "click",
      selector: "class",
      listener(app, store, e) {
        const id = getParentNodeDataIdByClass(e.target, "promoCode");
        const promos = store.getters.promoCodes();
        if (promos && promos.length > id) {
          const currentOrderState = store.getters.cart().order;
          if (currentOrderState && currentOrderState.length) {
            store.actions.addCartWithDiscountsToCache();
          }

          store.actions.applyPromoCode(promos[id]);

          const restSlug = promos[id].restSlug;
          renderAndUpdateURN(`dishes/${restSlug}`);
          if (window.screen.width > 1000) {
            renderAndUpdateURN("/shoppingCart", true);
          }

          renderNotification("Промокод успешно применен");
        }
      },
    },
  ];
};
