import * as API from "../../api/api.js";
import STORE from "../store/store.js";

export const getRestaurants = () => {
  return API.getRestaurants().then((result) => STORE.addRestaurants(result));
};

export const getDishes = (restName) => {
  return API.getDishes(restName).then((result) =>
    STORE.addDishes(restName, result)
  );
};

export const getUser = (isFirstUpdate = false) => {
  return API.getUser().then((result) => STORE.addUser(result, isFirstUpdate));
};

export const updateUser = (user) => {
  return API.updateUser(user).then((result) => STORE.addUser(result));
};

export const sendCode = (phone) => {
  return API.sendCode(phone);
};

export const register = (user) => {
  return API.register(user).then((result) => STORE.addUser(result));
};

export const login = (user) => {
  return API.login(user).then((result) => STORE.addUser(result));
};

export const logout = () => {
  return API.logout().then(() => STORE.removeUser());
};

export const suggest = (query) => {
  return API.suggest(query).then((result) => {
    if (result) {
      STORE.addSuggests(result)
    } else {
      STORE.clearSuggests();
    }
  });
};

export const clearSuggests = () => {
  return STORE.clearSuggests();
};

export const addDishToCart = (id, restName, price, count = 1) => {
  return STORE.addDishToCart(id, restName, price, count);
};

export const incrementDishCount = (id) => {
  return STORE.incrementDishCount(id);
};

export const decrementDishCount = (id) => {
  return STORE.decrementDishCount(id);
};

export const createOrder = (order) => {
  return API.createOrder(order).then(() => STORE.clearCart());
};

export const setToken = (token) => {
  return STORE.setToken(token);
};

export const getOrderList = () => {
  return API.getOrderList().then((result) => {
    STORE.addOrderList(result.orderList);
  });
}

export const getCertainOrder = (orderNumber) => {
  return API.getCertainOrder(orderNumber).then((result) => {
    STORE.addCertainOrder(result);
  });
}

export const changeSearchStatus = () => {
  return STORE.changeSearchStatus();
}

export const setSearchStatus = (status) => {
  STORE.setSearchStatus(status);
}

// export const getStatusOrders = () => {
//   return API.getStatusOrders().then((result) =>
// }
