import { render } from '../../render/render';

const STORE = {
  // State,
  user: { name: 'Name', phone: '+7(915)000-11-22', email: 'test@ya.ru' },
  // user: {},
  restaurants: [],
  products: {
    'main': {
      restName: 'McDonalds',
      products: [
        {
          id: 1,
          imgPath: 'https://avatars.mds.yandex.net/get-zen_doc/4347415/pub_606c404ea4ae570085123302_606d9f94dcd05469540c84a3/scale_1200',
          productName: 'Тестовое имя',
          info: '172 г · 213 ккал',
          description: 'Вкусный и самый настоящий. Всем несомненно он погнравится',
          price: 296
        },
        {
          id: 2,
          imgPath: 'https://avatars.mds.yandex.net/get-zen_doc/4347415/pub_606c404ea4ae570085123302_606d9f94dcd05469540c84a3/scale_1200',
          productName: 'Тестовое имя',
          info: '172 г · 213 ккал',
          description: 'Вкусный и самый настоящий. Всем несомненно он погнравится',
          price: 296
        },
        {
          id: 3,
          imgPath: 'https://avatars.mds.yandex.net/get-zen_doc/4347415/pub_606c404ea4ae570085123302_606d9f94dcd05469540c84a3/scale_1200',
          productName: 'Тестовое имя',
          info: '172 г · 213 ккал',
          description: 'Вкусный и самый настоящий. Всем несомненно он погнравится',
          price: 296
        },
      ]
    }
  },
  cart: [],
  suggests: [],
  currentRestName: '',

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
  addProductToCart(id, restName) {
    const cart = (restName === this.currentRestName) ? this.cart : [];

    const index = cart.findIndex((orderPoint) => orderPoint.id === id);
    if (index === -1) {
      cart.push({ id, count: 1 });
    } else {
      cart[index].count = cart[index].count + 1;
    }

    this.currentRestName = restName;
    this.cart = cart;
  },
  clearCart() {
    this.currentRestName = '';
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
