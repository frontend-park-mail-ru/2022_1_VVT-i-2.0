import * as API from '../../api/api.js';
import STORE from '../store/store.js';

export const getRestaurants = () => {
  return API.getRestaurants().then((result) => STORE.addRestaurants(result.json()));
}

export const getProducts = (restName) => {
  return API.getProducts(restName).then((result) => STORE.addProducts(restName, result.json()));
}

export const getUser = () => {
  return API.getUser().then((result) => STORE.addUser(result.json()));
}
