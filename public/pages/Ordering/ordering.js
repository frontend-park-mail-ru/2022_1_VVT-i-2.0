import components from "../../components/import.js";

const ordering = (app, store) => {
  if (Object.keys(store.getters.dishes()).length === 0) {
    return;
  }

  const currentRestName = store.getters.currentRestName();

  let dishObj = { restName: "", dishes: [] };
  if (currentRestName !== "") {
    dishObj = Object.values(store.getters.dishes()).find(
      (dish) => dish.restName === currentRestName
    );
  }

  const phone = store.getters.user().phone;
  const cart = store.getters.cart();

  const orderPoints = cart.order.map(({ id, price, count }) => {
    const index = dishObj.dishes.findIndex(
      (orderPoint) => orderPoint.id === id
    );
    if (index === -1) {
      return [];
    }
    return { ...dishObj.dishes[index], price, count };
  });

  app.root.innerHTML = components.header(true);

  let minPrice = 0;
  store.getters.restaurants().forEach((restObj) => {
    if (restObj.restName === currentRestName) {
      minPrice = restObj.price;
    }
  });

  const promoCodeApplied =
    Object.keys(store.getters.appliedPromoCode()).length !== 0;

  store.actions.changeDeliveryPrice(
    (cart.totalPriceWithDiscount || cart.totalPrice) > minPrice ? 0 : 99
  );

  const main = document.createElement("main");
  main.innerHTML = components.ordering(
    {
      phone,
      restName: dishObj.restName,
      orderPoints,
      totalPrice: cart.totalPriceWithDiscount || cart.totalPrice,
      summaryDiscount: cart.totalPriceWithDiscount
        ? cart.totalPrice - cart.totalPriceWithDiscount
        : 0,
      deliveryPrice: store.getters.deliveryPrice(),
      minPrice,
    },
    promoCodeApplied,
    store.getters.appliedPromoCode()
  );

  app.root.appendChild(main);
};

export default ordering;
