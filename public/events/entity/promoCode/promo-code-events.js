import { renderAndUpdateURN } from "../../../render/render";
import { getParentNodeDataIdByClass } from "./promo-code-src";
import { setCurrentRestName } from "../../../store/actions/actions";

export const getPromoCodeEvents = () => {
  return [
    {
      type: "click",
      selector: "class",
      listener(app, store, e) {
        const id = getParentNodeDataIdByClass(e.target, 'promoCode');
        const promos = store.getters.promoCodes();
        if (promos && promos.length > id) {
          sessionStorage.setItem('redirectByPromoCodeActivation', promos[id].promocode);
          const restSlug = promos[id].restSlug;
          renderAndUpdateURN('dishes/' + restSlug);
          store.actions.setCurrentRestName(promos[id].restName);
          renderAndUpdateURN("/shoppingCart", true);
        }
      },
    },
  ];
};
