import components from "../../components/import.js";
import { restaurants } from "../../store/getters/getters";

const ordering = (app, store) => {
  const currentRestName = store.getters.currentRestName();

  let productObj = { restName: "", products: [] };
  if (currentRestName !== "") {
    productObj = Object.values(store.getters.products()).find(
      (product) => product.restName === currentRestName
    );
  }

  const phone = store.getters.user().phone;

  const cart = store.getters.cart();

  const orderPoints = cart.map(({ id, count }) => {
    const index = productObj.products.findIndex(
      (orderPoint) => orderPoint.id === id
    );
    if (index === -1) {
      return;
    }
    return { ...productObj.products[index], count };
  });

  let total = orderPoints.reduce((prev, current) => {
    const index = cart.findIndex((orderPoint) => orderPoint.id === current.id);
    if (index === -1) {
      return prev;
    }
    return prev + current.price * cart[index].count;
  }, 0);

  if (total) {
    total += 1000;
  }

  app.root.innerHTML = components.header(
    Object.keys(store.getters.user()).length !== 0,
    "/graphics/images/avatar.jpg"
  );

  let minPrice = 0;
  store.getters.restaurants().forEach((restObj) => {
    if (restObj.restName === currentRestName) {
      minPrice = restObj.min_price;
    }
  });

  const main = document.createElement("main");
  main.innerHTML = components.ordering({
    phone,
    restName: productObj.restName,
    orderPoints,
    total,
    minPrice,
  });

  app.root.appendChild(main);
};

export default ordering;
