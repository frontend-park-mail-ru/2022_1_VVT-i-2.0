import { render } from "../../render/render";

export let avatar = {};

const STORE = {
  // State
  user: { name: "Name", phone: "+7(915)000-11-22", email: "test@ya.ru" },
  // user: {},
  restaurants: [
    {
      slug: "main",
      imgPath: "./graphics/images/img.png",
      restName: "Шоколадница",
      timeToDeliver: "20-35 мин",
      price: "550 ₽",
      rating: 4.8,
    },
    {
      slug: "main",
      imgPath: "./graphics/images/img.png",
      restName: "Шоколадница",
      timeToDeliver: "20-35 мин",
      price: "550 ₽",
      rating: 4.8,
    },
    {
      slug: "main",
      imgPath: "./graphics/images/img.png",
      restName: "Шоколадница",
      timeToDeliver: "20-35 мин",
      price: "550 ₽",
      rating: 4.8,
    },
    {
      slug: "main",
      imgPath: "./graphics/images/img.png",
      restName: "Шоколадница",
      timeToDeliver: "20-35 мин",
      price: "550 ₽",
      rating: 4.8,
    },
    {
      slug: "main",
      imgPath: "./graphics/images/img.png",
      restName: "Шоколадница",
      timeToDeliver: "20-35 мин",
      price: "550 ₽",
      rating: 4.8,
    },
    {
      slug: "main",
      imgPath: "./graphics/images/img.png",
      restName: "Шоколадница",
      timeToDeliver: "20-35 мин",
      price: "550 ₽",
      rating: 4.8,
    },
  ],
  dishes: {
    // main: {
    //   restName: "Шоколадница",
    //   dishes: [
    //     {
    //       id: 1,
    //       imgPath:
    //         "https://avatars.mds.yandex.net/get-zen_doc/4347415/pub_606c404ea4ae570085123302_606d9f94dcd05469540c84a3/scale_1200",
    //       productName: "Тестовое имя",
    //       info: "172 г · 213 ккал",
    //       description:
    //         "Вкусный и самый настоящий. Всем несомненно он погнравится",
    //       price: 296,
    //     },
    //     {
    //       id: 2,
    //       imgPath:
    //         "https://avatars.mds.yandex.net/get-zen_doc/4347415/pub_606c404ea4ae570085123302_606d9f94dcd05469540c84a3/scale_1200",
    //       productName: "Тестовое имя",
    //       info: "172 г · 213 ккал",
    //       description:
    //         "Вкусный и самый настоящий. Всем несомненно он погнравится",
    //       price: 296,
    //     },
    //     {
    //       id: 3,
    //       imgPath:
    //         "https://avatars.mds.yandex.net/get-zen_doc/4347415/pub_606c404ea4ae570085123302_606d9f94dcd05469540c84a3/scale_1200",
    //       productName: "Тестовое имя",
    //       info: "172 г · 213 ккал",
    //       description:
    //         "Вкусный и самый настоящий. Всем несомненно он погнравится",
    //       price: 296,
    //     },
    //   ],
    // },
  },
  cart: {
    totalPrice: 0,
    orderList: [],
  },
  suggests: [
    { address: "FIRST", end: false },
    { address: "SECOND", end: true },
  ],
  currentRestName: "",
  token: "",

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
  addDishes(restName, result) {
    const dishes = this.dishes;
    dishes[restName] = { dishes: result.dishes, restName: result.restName };
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

    if (this.cart.order.length === 0) {
      this.currentRestName = "";
    }
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
    this.suggests = [];
  },
  setToken(token) {
    this.token = token;
  },
};

const PROXY_STORE = new Proxy(STORE, {
  set(target, prop, value) {
    target[prop] = value;

    const page = sessionStorage.getItem("page");
    render(page, true);

    return true;
  },
});

export default PROXY_STORE;
