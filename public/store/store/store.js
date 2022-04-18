import { render } from '../../render/render';

const STORE = {
  // State,
  user: { name: 'Name', phone: '+7(915)000-11-22', email: 'test@ya.ru' },
  // user: {},
  restaurants: [
    // {
    //   slug: 'main',
    //   imgPath: './graphics/images/img.png',
    //   restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550 ₽', rating: 4.8
    // },
    // {
    //   slug: 'main',
    //   imgPath: './graphics/images/img.png',
    //   restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550 ₽', rating: 4.8
    // },
    // {
    //   slug: 'main',
    //   imgPath: './graphics/images/img.png',
    //   restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550 ₽', rating: 4.8
    // },
    // {
    //   slug: 'main',
    //   imgPath: './graphics/images/img.png',
    //   restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550 ₽', rating: 4.8
    // },
    // {
    //   slug: 'main',
    //   imgPath: './graphics/images/img.png',
    //   restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550 ₽', rating: 4.8
    // },
    // {
    //   slug: 'main',
    //   imgPath: './graphics/images/img.png',
    //   restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550 ₽', rating: 4.8
    // }
  ],
  products: {
  //   'main': {
  //     restName: 'McDonalds',
  //     products: [
  //       {
  //         id: 1,
  //         imgPath: 'https://avatars.mds.yandex.net/get-zen_doc/4347415/pub_606c404ea4ae570085123302_606d9f94dcd05469540c84a3/scale_1200',
  //         productName: 'Тестовое имя',
  //         info: '172 г · 213 ккал',
  //         description: 'Вкусный и самый настоящий. Всем несомненно он погнравится',
  //         price: 296
  //       },
  //       {
  //         id: 2,
  //         imgPath: 'https://avatars.mds.yandex.net/get-zen_doc/4347415/pub_606c404ea4ae570085123302_606d9f94dcd05469540c84a3/scale_1200',
  //         productName: 'Тестовое имя',
  //         info: '172 г · 213 ккал',
  //         description: 'Вкусный и самый настоящий. Всем несомненно он погнравится',
  //         price: 296
  //       },
  //       {
  //         id: 3,
  //         imgPath: 'https://avatars.mds.yandex.net/get-zen_doc/4347415/pub_606c404ea4ae570085123302_606d9f94dcd05469540c84a3/scale_1200',
  //         productName: 'Тестовое имя',
  //         info: '172 г · 213 ккал',
  //         description: 'Вкусный и самый настоящий. Всем несомненно он погнравится',
  //         price: 296
  //       },
  //     ]
  //   }
  },
  cart: [],
  suggests: [
    // { address: 'FIRST', end: false }, { address: 'SECOND', end: true }
  ],
  currentRestName: '',

  // Mutations
  addUser(user, isFirstUpdate) {
    if (isFirstUpdate) {
      Object.entries(user).forEach(([key, value]) => {
        this.user[key] = value;
      });
      return;
    }
    this.user = user;
  },
  removeUser() {
    this.user = {};
  },
  addRestaurants(restaurants) {
    this.restaurants = restaurants;
  },
  addProducts(restName, result) {
    const products = this.products;
    products[restName] = { products: result.dishes, restName: result.restName };
    this.products = products;
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
  incrementProductCount(id) {
    const cart = this.cart;

    const index = cart.findIndex((orderPoint) => orderPoint.id === id);
    if (index === -1) {
      return;
    }

    cart[index].count = cart[index].count + 1;

    this.cart = cart;
  },
  decrementProductCount(id) {
    const cart = this.cart;

    const index = cart.findIndex((orderPoint) => orderPoint.id === id);
    if (index === -1) {
      return;
    }

    cart[index].count = cart[index].count - 1;
    if (cart[index].count < 1) {
      cart.splice(index, 1);
    }

    this.cart = cart;

    if (this.cart.length === 0) {
      this.currentRestName = '';
    }
  },
  clearCart() {
    this.currentRestName = '';
    this.cart = [];
  },
  addSuggests(result) {
    this.suggests = result.suggests.map((suggest) => {
      return { address: suggest, end: result.end };
    });
  },
  clearSuggests() {
    this.suggests = [];
  }
};

const PROXY_STORE = new Proxy(STORE, {
  set(target, prop, value) {
    target[prop] = value;

    const page = sessionStorage.getItem('page');
    render(page, true);

    return true;
  }
});

export default PROXY_STORE;
