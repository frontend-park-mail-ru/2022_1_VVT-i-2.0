export const productEvents = () => {
  return {
    addToCart: [
      {
        type: 'click',
        selector: 'class',
        listener(app, store, e) {
          const { id, rest } = e.target.dataset;

          store.actions.addProductToCart(parseInt(id, 10), rest);
        }
      }
    ],
    incrementCount: [
      {
        type: 'click',
        selector: 'class',
        listener(app, store, e) {
          // const { id } = e.target.dataset;

          // store.actions.incrementProductCount(parseInt(id, 10), rest);
        }
      }
    ]
  };
};
