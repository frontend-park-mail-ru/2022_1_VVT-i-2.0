import { render } from '../../render/render';

const STORE = {
  // State
  user: {},
  restaurants: [],
  products: {},
  cart: [],

  // Mutations
  addUser(user) {
    this.user = user;
  },
  removeUser() {
    this.user = {};
  },
  addRestaurants(restaurants) {
    this.restaurants = restaurants;
  },
  addProducts(restName, result) {
    this.products[restName] = { products: result.products, restName: result.restName };
  },
  addProductToCart(product) {
    const cart = this.cart;
    cart.push(product);
    this.cart = cart;
  },
  clearCart() {
    this.cart = [];
  }
};

const PROXY_STORE = new Proxy(STORE, {
  set(target, prop, value) {
    target[prop] = value;

    const page = sessionStorage.getItem('page');
    render(page);

    return true;
  }
});

export default PROXY_STORE;
