import components from "../../components/import.js";

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

const shoppingCartPage = (app, store) => {
  if (
    isEmpty(store.getters.appliedPromoCode()) &&
    isEmpty(store.getters.dishes())
  ) {
    return;
  }

  const currentRestName = store.getters.currentRestName();

  let dishObj = { restName: "", dishes: [] };

  if (currentRestName !== "") {
    dishObj = Object.values(store.getters.dishes()).find(
      (dish) => dish.restName === currentRestName
    );
  }

  const properties = store.getters.cart().order.map(({ id, price, count }) => {
    const index = dishObj.dishes.findIndex(
      (orderPoint) => orderPoint.id === id
    );
    if (index === -1) {
      return;
    }
    return { ...dishObj.dishes[index], price, count };
  });

  let restName = dishObj
    ? dishObj.restName
    : store.getters.appliedPromoCode().restName;

  if (store.getters.appliedPromoCode().restName &&
    restName !== store.getters.appliedPromoCode().restName) {
    restName = store.getters.appliedPromoCode().restName;
  }

  app.modal.innerHTML = components.shoppingCart(
    restName,
    properties,
    store.getters.recommendations(),
    store.getters.appliedPromoCode()
      ? store.getters.appliedPromoCode().promocode
      : null,
    store.getters.appliedPromoCode
      ? store.getters.appliedPromoCode().discount
      : null
  );
};

export default shoppingCartPage;
