const Store = {
  // State
  user: {},
  restaurants: [],
  products: [],
  cart: [],

  // Mutations
  addUser(user) {
    this.user = user;
  },
  deleteUser() {
    this.user = {};
  },
  addRestaurants(restaurants) {
    this.restaurants = restaurants;
  },
  addProducts(products) {
    this.products = products;
  },
  addProductToCart(product) {
    this.cart.push(product);
  },
  clearCart() {
    this.cart = [];
  }
};

export default Store;
