import components from '../../components/import.js';
import UIKIT from '../../ui-kit/import.js';

/**
 * @function Рендерит страницу по входящему объекту приложения.
 * @param {Object} app - Объект приложения.
 */
const mainPage = (app, store) => {
  const params = sessionStorage.getItem('params');
  if (!params) {
    return;
  }

  if (!store.getters.products.hasOwnProperty(params)) {
    store.actions.getProducts(params);
    return;
  }

  const productObj = store.getters.products()[params];
  const restName = productObj.restName;

  app.root.innerHTML = components.header(
    Object.keys(store.getters.user()).length !== 0, '/graphics/images/avatar.jpg'
  );

  const main = document.createElement('main');
  main.innerHTML = UIKIT.backButton('Все рестораны', 'main') + `<h1>${restName}</h1>` +
    components.productsIcons(productObj.products, restName);

  app.root.appendChild(main);
};

export default mainPage;
