import { renderAndUpdateURN } from "../../../render/render";
import { getParentNodeDataIdByClass } from "./promo-code-src";

export const getPromoCodeEvents = () => {
  return [
    {
      type: "click",
      selector: "class",
      listener(app, store, e) {
        const id = getParentNodeDataIdByClass(e.target, 'promoCode');
        const promos = store.getters.promoCodes();
        if (promos && promos.length > id) {
          store.actions.applyPromoCode(promos[id]);

          const restSlug = promos[id].restSlug;
          renderAndUpdateURN('dishes/' + restSlug);

          store.actions.setCurrentRestName(promos[id].restName);
          renderAndUpdateURN("/shoppingCart", true);
        }
      },
    },
  ];
};
