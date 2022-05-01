import mainPage from "./Main/main.js";
import loginPage from "./Login/login.js";
import registerPage from "./Register/register.js";
import confirmCodePage from "./ConfirmCode/confirm-code.js";
import profilePreviewPage from "./ProfilePreview/profile-preview.js";
import profilePage from "./Profile/profile.js";
import dishesPage from "./Dishes/dishes.js";
import shoppingCartPage from "./ShoppingCart/shopping-cart.js";
import orderingPage from "./Ordering/ordering.js";
import suggestsPage from "./Suggests/suggests.js";
import networkErrors from "./NetworkErrors/network-errors.js";
import orderHistoryPage from "./OrderHistory/order-history";

const MENU = {
  main: {
    render: mainPage,
    isModal: false,
    authRequired: false,
  },
  login: {
    render: loginPage,
    isModal: true,
    position: "modal-center",
    authRequired: false,
  },
  register: {
    render: registerPage,
    isModal: true,
    position: "modal-center",
    authRequired: false,
  },
  confirmCode: {
    render: confirmCodePage,
    isModal: true,
    position: "modal-center",
    authRequired: false,
  },
  profilePreview: {
    render: profilePreviewPage,
    isModal: true,
    position: "modal-right",
    authRequired: true,
  },
  profile: {
    render: profilePage,
    isModal: false,
    authRequired: true,
  },
  dishes: {
    render: dishesPage,
    isModal: false,
    authRequired: false,
  },
  shoppingCart: {
    render: shoppingCartPage,
    isModal: false,
    position: "modal-right",
    authRequired: true,
    additionalPage: true,
  },
  ordering: {
    render: orderingPage,
    isModal: false,
    authRequired: true,
  },
  orderHistory: {
    render: orderHistoryPage,
    isModal: false,
    authRequired: true,
  },
  suggests: {
    render: suggestsPage,
    isModal: true,
    position: "modal-top",
    authRequired: true,
  },
  networkErrors: {
    render: networkErrors,
    isModal: false,
    authRequired: false,
  },
};

export default MENU;
