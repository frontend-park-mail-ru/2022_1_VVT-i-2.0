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
    return "/graphics/icons/profile.svg";
  }

  return STORE.user.avatar;
};

export const getCurrentSlug = () => {
  const restaurants = STORE.restaurants;

  return restaurants.find(
    (restaurant) => restaurant.restName === STORE.currentRestName
  ).slug;
};

export const token = () => STORE.token;

export const getOrderList = () => STORE.orderList;

export const getCertainOrder = () => STORE.certainOrder;
