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
          const restSlug = promos[id].restSlug;
          renderAndUpdateURN('dishes/' + restSlug);
        }
      },
    },
  ];
};
