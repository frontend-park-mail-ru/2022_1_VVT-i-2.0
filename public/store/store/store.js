import { render } from '../../render/render';

const STORE = {
  // State,
  user: { name: 'Name', phone: '+7(915)000-11-22', email: 'test@ya.ru' },
  // user: {},
  restaurants: [],
  products: {},
  cart: [],
  suggests: [],

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
  },
  addSuggests(suggests) {
    this.suggests = suggests;
  },
  clearSuggests() {
    this.suggests = [];
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
