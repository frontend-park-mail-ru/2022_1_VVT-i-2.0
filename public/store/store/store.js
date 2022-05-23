import { render } from "../../render/render";

const isEqual = (object1, object2) => {
  const props1 = Object.getOwnPropertyNames(object1);
  const props2 = Object.getOwnPropertyNames(object2);

  if (props1.length !== props2.length) {
    return false;
  }

  for (let i = 0; i < props1.length; i += 1) {
    const prop = props1[i];
    const bothAreObjects =
      typeof object1[prop] === "object" && typeof object2[prop] === "object";

    if (
      (!bothAreObjects && object1[prop] !== object2[prop]) ||
      (bothAreObjects && !isEqual(object1[prop], object2[prop]))
    ) {
      return false;
    }
  }

  return true;
};

const STORE = {
  // State
  user: {},
  restaurants: [],
  dishes: {},
  cart: {
    totalPrice: 0,
    order: [],
  },
  cachedCartWithDiscounts: {
    cart: {},
    appliedPromoCode: {},
  },
  orderList: [],
  promoCodes: [],
  appliedPromoCode: {},
  certainOrder: {},
  suggests: [],
  currentRestName: "",
  isSearchActivated: false,
  token: "",
  categories: [
    { title: "Суши" },
    { title: "Пицца" },
    { title: "Бургеры" },
    { title: "Фастфуд" },
    { title: "Русская" },
    { title: "Японская" },
    { title: "Паназиатская" },
    { title: "Завтраки" },
    { title: "Обеды" },
    { title: "Сэндвичи" },
    { title: "Китайская" },
    { title: "Здоровая еда" },
  ],
  comments: {},

  // Mutations
  addUser(user) {
    Object.entries(user).forEach(([key, value]) => {
      this.user[key] = value;
    });
  },
  removeUser() {
    Object.keys(this.user).forEach((key) => {
      delete this.user[key];
    });
  },
  addRestaurants(restaurants) {
    this.restaurants = restaurants;
  },
  clearRestaurants() {
    this.restaurants.length = 0;
  },
  addDishes(slug, result, isFirstUpdate = false) {
    if (isFirstUpdate) {
      this.dishes[slug] = {
        dishes: result.dishes,
        restName: result.restName,
        rating: result.rating,
        reviewCount: result.reviewCount,
      };
      return;
    }

    const dishes = this.dishes;
    dishes[slug] = {
      dishes: result.dishes,
      restName: result.restName,
      rating: result.rating,
      reviewCount: result.reviewCount,
    };
    this.dishes = dishes;
  },
  addDishToCart(id, restName, price, count = 1) {
    const cart =
      restName === this.currentRestName
        ? this.cart
        : {
            totalPrice: 0,
            order: [],
          };

    if (cart.order.length) {
      this.flushCachedCartWithDiscounts();
    }

    const index = cart.order.findIndex((orderPoint) => orderPoint.id === id);
    if (index === -1) {
      cart.order.push({ id, price: price, count: count });
    } else {
      cart.order[index].count = cart.order[index].count + 1;
    }

    cart.totalPrice += price * count;

    this.currentRestName = restName;
    this.cart = cart;
  },
  addCart(cart, restName) {
    Object.entries(cart).forEach(([key, value]) => {
      this.cart[key] = value;
    });
    this.currentRestName = restName;
  },
  flushCurrentCartWithDiscounts() {
    this.cart = {
      totalPrice: 0,
      order: [],
    };
    this.appliedPromoCode = {};
  },
  flushCachedCartWithDiscounts() {
    this.cachedCartWithDiscounts.cart = {
      totalPrice: 0,
      order: [],
    };
    this.cachedCartWithDiscounts.appliedPromoCode = {};
  },
  setCachedCartWithDiscounts() {
    this.cachedCartWithDiscounts.cart = this.cart;
    this.cachedCartWithDiscounts.appliedPromoCode = this.appliedPromoCode;
    this.flushCurrentCartWithDiscounts();
  },
  applyOldCartWithDiscounts() {
    this.cart = this.cachedCartWithDiscounts.cart;
    this.appliedPromoCode = this.cachedCartWithDiscounts.appliedPromoCode;
    this.flushCachedCartWithDiscounts();
  },
  incrementDishCount(id) {
    const cart = this.cart;

    const index = cart.order.findIndex((orderPoint) => orderPoint.id === id);
    if (index === -1) {
      return;
    }

    cart.order[index].count += 1;
    cart.totalPrice += cart.order[index].price * 1;

    this.cart = cart;
  },
  decrementDishCount(id) {
    const cart = this.cart;

    const index = cart.order.findIndex((orderPoint) => orderPoint.id === id);
    if (index === -1) {
      return;
    }

    cart.order[index].count -= 1;
    cart.totalPrice -= cart.order[index].price * 1;

    if (cart.order[index].count < 1) {
      cart.order.splice(index, 1);
    }

    this.cart = cart;
  },
  clearCart() {
    this.currentRestName = "";
    this.cart = {
      totalPrice: 0,
      order: [],
    };
  },
  addSuggests(result) {
    this.suggests = result.suggests.map((suggest) => {
      return { address: suggest, end: result.end };
    });
  },
  clearSuggests() {
    this.suggests.length = 0;
  },
  setToken(token) {
    this.token = token;
  },
  addOrderList(orderList) {
    this.orderList = orderList;
  },
  clearOrderList() {
    this.orderList = [];
  },
  addCertainOrder(order) {
    this.certainOrder = order;
  },
  addPromoCodes(promoCodes) {
    this.promoCodes = promoCodes;
  },
  changeSearchStatus() {
    this.isSearchActivated = !this.isSearchActivated;
  },
  setSearchStatus(status) {
    this.isSearchActivated = status;
  },
  setCurrentRestName(restName) {
    this.currentRestName = restName;
  },
  setAppliedPromoCode(promoCode) {
    this.appliedPromoCode = promoCode;
  },
  addComments(restName, result) {
    const comments = this.comments;
    comments[restName] = { comments: result };
    this.comments = comments;
  },
  updateOrderStatuses(newStatuses) {
    if (isEqual(cachedOrderStatuses, newStatuses)) {
      return;
    }

    cachedOrderStatuses = [];
    const orderList = this.orderList;
    for (let i = 0; i < orderList.length; ++i) {
      if (orderList[i].orderNumber === newStatuses[i].id) {
        orderList[i].status = newStatuses[i].status;
      }
      cachedOrderStatuses.push({
        id: orderList[i].orderNumber,
        status: orderList[i].status,
      });
    }
    this.orderList = orderList;
  },
};

let cachedOrderStatuses = {};
const PROXY_STORE = new Proxy(STORE, {
  set(target, prop, value) {
    target[prop] = value;

    if (
      ["token", "appliedPromoCode", "cachedCartWithDiscounts"].includes(prop)
    ) {
      return true;
    }

    const page = sessionStorage.getItem("page");
    if (page) {
      render(page, true);
    }

    return true;
  },
});

export default PROXY_STORE;
