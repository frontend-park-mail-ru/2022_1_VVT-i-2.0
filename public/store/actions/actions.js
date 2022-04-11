import * as API from '../../api/api.js';
import STORE from '../store/store.js';

export const getRestaurants = () => {
  return API.getRestaurants().then((result) => STORE.addRestaurants(result));
}

export const getProducts = (restName) => {
  return API.getProducts(restName).then((result) => STORE.addProducts(restName, result));
}

export const getUser = () => {
  return API.getUser().then((result) => STORE.addUser(result));
}

export const updateUser = (user) => {
  return API.updateUser(user).then((result) => STORE.addUser(result));
}

export const sendCode = (phone) => {
  return API.sendCode(phone);
}

export const register = () => {
  return API.register(user).then((result) => STORE.addUser(result));
}

export const login = (user) => {
  return API.login(user).then((result) => STORE.addUser(result));
}

export const logout = () => {
  return API.logout().then(() => STORE.removeUser());
}
