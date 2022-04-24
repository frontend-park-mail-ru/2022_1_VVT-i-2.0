import components from '../../components/import.js';
import UIKIT from '../../ui-kit/import.js';


const mainPage = (app, store) => {
  const params = sessionStorage.getItem('params');
  if (!params) {
    return;
  }

  if (!store.getters.products().hasOwnProperty(params)) {
    store.actions.getProducts(params);
    return;
  }

  const productObj = store.getters.products()[params];
  const restName = productObj.restName;

  app.root.innerHTML = components.header();

  const main = document.createElement('main');
  main.innerHTML = UIKIT.backButton('Все рестораны', 'main') + UIKIT.simpleTitle(restName) +
    components.productsIcons(productObj.products, restName);

  app.root.appendChild(main);
};

export default mainPage;
