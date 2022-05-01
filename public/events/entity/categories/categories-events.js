export const categories = () => {
  return {
    category: [
      {
        type: "click",
        selector: "class",
        listener(app, store, e) {
          const { title } = e.target.dataset;

          store.actions.getRestaurants({ category: title });
        }
      }
    ]
  };
};
