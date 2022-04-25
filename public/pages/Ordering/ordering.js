import components from "../../components/import.js";

const ordering = (app, store) => {
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
      return;
    }
    return { ...dishObj.dishes[index], price, count };
  });

  app.root.innerHTML = components.header(true);

  let minPrice = 0;
  store.getters.restaurants().forEach((restObj) => {
    if (restObj.restName === currentRestName) {
      minPrice = restObj.min_price;
    }
  });

  const main = document.createElement("main");
  main.innerHTML = components.ordering({
    phone,
    restName: dishObj.restName,
    orderPoints,
    total: cart.totalPrice,
    minPrice,
  });

  app.root.appendChild(main);
};

export default ordering;
