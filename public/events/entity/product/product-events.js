import {renderAndUpdateURN} from "../../../render/render.js";

export const productEvents = () => {
  return {
    addToCart: [
      {
        type: 'click',
        selector: 'class',
        listener(app, store, e) {
          const { id, rest } = e.target.dataset;
          store.actions.addProductToCart(parseInt(id, 10), rest);
          renderAndUpdateURN('/shoppingCart');
        }
      }
    ],
    incrementProductCount: [
      {
        type: 'click',
        selector: 'class',
        listener(app, store, e) {
          const { id } = e.target.dataset;

          if (e.target instanceof HTMLImageElement) {
            e.stopPropagation();
          }

          store.actions.incrementProductCount(parseInt(id, 10));
        }
      }
    ],
    decrementProductCount: [
      {
        type: 'click',
        selector: 'class',
        listener(app, store, e) {
          const { id } = e.target.dataset;

          if (e.target instanceof HTMLImageElement) {
            e.stopPropagation();
          }

          store.actions.decrementProductCount(parseInt(id, 10));
        }
      }
    ]
  };
};
