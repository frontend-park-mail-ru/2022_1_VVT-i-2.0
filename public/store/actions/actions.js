import * as API from '../../api/api.js';
import STORE from '../store/store.js';

export const getRestaurants = () => {
  return API.getRestaurants().then((result) => STORE.addRestaurants(result.json()));
}

export const getProducts = () => {
  return API.getProducts().then((result) => STORE.addProducts(result.json()));
}
