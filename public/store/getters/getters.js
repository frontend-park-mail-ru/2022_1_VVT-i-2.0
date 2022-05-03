import STORE from "../store/store.js";

export const user = () => STORE.user;

export const restaurants = () => STORE.restaurants;

export const dishes = () => STORE.dishes;

export const cart = () => STORE.cart;

export const IsCartEmpty = () => STORE.cart.totalPrice === 0;

export const currentRestName = () => STORE.currentRestName;

export const suggests = () => STORE.suggests;

export const getAvatar = () => {
  if (!STORE.user.avatar) {
    return "";
  }

  return STORE.user.avatar;
};

export const getCurrentSlug = () => {
  const currentRestName = STORE.currentRestName;
  const dishes = STORE.dishes;

  return Object.keys(dishes).find(
    (key) => dishes[key].restName === currentRestName
  );
};

export const token = () => STORE.token;

export const categories = () => STORE.categories;

export const comments = () => STORE.comments;
