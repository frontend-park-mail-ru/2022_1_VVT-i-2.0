import STORE from '../store/store.js';

export const user = () => STORE.user;

export const restaurants = () => STORE.restaurants;

export const products = (restName) => STORE.products[restName];

export const cart = () => STORE.cart;

export const suggests = () => STORE.suggests;
