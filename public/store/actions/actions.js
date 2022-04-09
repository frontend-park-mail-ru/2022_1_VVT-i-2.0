import Store from '../store/store.js';
import * as API from '../../api/api.js';

export const getRestaurants = () => {
  return API.getRestaurants().then((result) => Store.addRestaurants(result.json()));
}

export const getProducts = () => {
  return API.getProducts().then((result) => Store.addProducts(result.json()));
}
