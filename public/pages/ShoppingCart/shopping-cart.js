import components from "../../components/import.js";

/**
 * @function Рендерит страницу по входящему объекту приложения.
 * @param {Object} app - Объект приложения.
 */
const shoppingCartPage = (app, store) => {
  const currentRestName = store.getters.currentRestName();

  let dishObj = { restName: "", dishes: [] };
  if (currentRestName !== "") {
    dishObj = Object.values(store.getters.dishes()).find(
      (dish) => dish.restName === currentRestName
    );
  }

  const properties = store.getters.cart().map(({ id, count }) => {
    const index = dishObj.dishes.findIndex(
      (orderPoint) => orderPoint.id === id
    );
    if (index === -1) {
      return;
    }
    return { ...dishObj.dishes[index], count };
  });

  app.modal.innerHTML = components.shoppingCart(dishObj.restName, properties);
};

export default shoppingCartPage;
