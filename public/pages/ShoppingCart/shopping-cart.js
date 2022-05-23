import components from "../../components/import.js";

/**
 * @function Рендерит страницу по входящему объекту приложения.
 * @param {Object} app - Объект приложения.
 */
const shoppingCartPage = (app, store) => {
  if (!sessionStorage.getItem('redirectByPromoCodeActivation') || Object.keys(store.getters.dishes()).length === 0) {
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

  app.modal.innerHTML = components.shoppingCart(dishObj.restName, properties, sessionStorage.getItem('redirectByPromoCodeActivation'));
  sessionStorage.removeItem('redirectByPromoCodeActivation');
};

export default shoppingCartPage;
