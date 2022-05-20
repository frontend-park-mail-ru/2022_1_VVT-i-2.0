import * as API from "../../api/api.js";
import STORE from "../store/store.js";
import { renderNotification } from "../../render/render";
import { getters } from "../import";

export const getRestaurants = (options = {}) => {
  return API.getRestaurants(options).then((result) =>
    STORE.addRestaurants(result)
  );
};

export const clearRestaurants = () => {
  return STORE.clearRestaurants();
}

export const getDishes = (slug, isFirstUpdate = false) => {
  return API.getDishes(slug).then((result) =>
    STORE.addDishes(slug, result, isFirstUpdate)
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
      STORE.addSuggests(result);
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

export const addCart = (cart, restName) => {
  return STORE.addCart(cart, restName);
}

export const incrementDishCount = (id) => {
  return STORE.incrementDishCount(id);
};

export const decrementDishCount = (id) => {
  return STORE.decrementDishCount(id);
};

export const createOrder = (order) => {
  return API.createOrder(order).then(() => {
    STORE.clearCart();
    STORE.clearOrderList();
  });
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

export const openSameOrderByTimeout = (result) => {
  STORE.addCertainOrder(result);
}

export const changeSearchStatus = () => {
  return STORE.changeSearchStatus();
}

export const setSearchStatus = (status) => {
  STORE.setSearchStatus(status);
}

export const getComments = (slug) => {
  return API.getComments(slug).then((result) =>
    STORE.addComments(slug, result)
  );
}

export const setUpdateTimeout = (store, timeout = 10000) => {
  if (sessionStorage.getItem('UpdateTimeoutID') === null &&
    store.getters.getOrderList().length) {
      const timerID = window.setInterval(() => {
        API.getStatusOrders().then((result) => {
          STORE.updateOrderStatuses(result.statuses);
        })
      }, timeout);
      sessionStorage.setItem('UpdateTimeoutID', String(timerID));
  }
}

export const clearUpdateTimeout = () => {
  if (sessionStorage.getItem('UpdateTimeoutID') !== null) {
    clearInterval(Number(sessionStorage.getItem('UpdateTimeoutID')));
    sessionStorage.removeItem('UpdateTimeoutID');
  }
};

export const createComment = (comment) => {
  return API.createComment(comment);
};
