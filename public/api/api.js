import { renderAndUpdateURN, renderNotification } from "../render/render.js";
import * as store from "../store/import.js";

const METHODS = { GET: "GET", POST: "POST", PUT: "PUT", DELETE: "DELETE" };

const BASE_URI = "https://tavide.xyz";
// const BASE_URI = "http://localhost:8080";

const DEFAULT_OPTIONS = {
  method: METHODS.GET,
  headers: { "Content-Type": "application/json" },
  credentials: "include",
};

const ERROR_MESSAGE = "В ходе обработки запроса произошла ошибка";

/**
 * @function Осуществляет отправку запроса.
 * @param {string} url - URL запроса.
 * @param {Object} options - Опции отправки запроса.
 * @return {Promise} - возвращает Promise на отправку запроса.
 */
const request = (url, options = DEFAULT_OPTIONS) => {
  options.credentials = "include";
  options.headers = {};
  if (options.body && url !== "/update") {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(options.body);
  }

  if (store.getters.token() !== "") {
    options.headers["X-CSRF-Token"] = store.getters.token();
  }

  return fetch(BASE_URI + "/api/v1" + url, options)
    .catch(() => {
      sessionStorage.setItem("error", "500");
      renderAndUpdateURN("/networkErrors");
    })
    .then((result) => {
      if (result.status === 200 && result.headers.get("X-CSRF-Token") !== "") {
        store.actions.setToken(result.headers.get("X-CSRF-Token"));
      }

      if (result.status === 500) {
        sessionStorage.setItem("error", "500");
        renderAndUpdateURN("/networkErrors");
        return Promise.reject();
      }

      if (Number(result.headers.get("Content-Length")) === 0) {
        if (result.status !== 200) {
          renderNotification(ERROR_MESSAGE, true);
          return Promise.reject();
        }

        return {};
      }

      const data = result.json();

      if (result.status !== 200) {
        renderNotification(data.error, true);
        return Promise.reject();
      }

      return data;
    });
};

/**
 * @function Осуществляет отправку запроса на получение ресторанов.
 * @return {Promise} - возвращает Promise на отправку запроса.
 */
export const getRestaurants = (options) => {
  if (Object.keys(options).length === 0) {
    return request("/restaurants");
  }

  return request(
    "/restaurants?" +
      Object.entries(options)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")
  );
};

export const getDishes = (restName) => {
  return request(`/restaurant/${restName}`);
};

export const getUser = () => {
  return request("/user");
};

export const updateUser = (user) => {
  return request("/update", { method: METHODS.POST, body: user });
};

export const sendCode = (phone) => {
  return request("/send_code", { method: METHODS.POST, body: { phone } });
};

/**
 * @function Осуществляет отправку запроса на регистрацию пользователя.
 * @return {Promise} - возвращает Promise на отправку запроса.
 */
export const register = (user) => {
  return request("/register", { method: METHODS.POST, body: user });
};

/**
 * @function Осуществляет отправку запроса на авторизацтю пользователя.
 * @return {Promise} - возвращает Promise на отправку запроса.
 */
export const login = (user) => {
  return request("/login", { method: METHODS.POST, body: user });
};

/**
 * @function Осуществляет отправку запроса на выход пользователя из учетной записи.
 * @return {Promise} - возвращает Promise на отправку запроса.
 */
export const logout = () => {
  return request("/logout", { method: METHODS.GET });
};

export const suggest = (query) => {
  return request(`/suggest?q=${query}`);
};

export const createOrder = (order) => {
  return request("/order", { method: METHODS.POST, body: order });
};

export const getOrderList = () => {
  return request('/orders', { method: METHODS.GET });
};

export const getStatusOrders = () => {
  return request('/order_statuses', { method: METHODS.GET });
};

export const getCertainOrder = (orderNumber) => {
  return request(`/order/${orderNumber}`);
};

export const getComments = (restName) => {
  return request(`/comments/${restName}`);
};
