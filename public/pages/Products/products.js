import components from '../../components/import.js';
import * as events from '../../events/events.js';
import UIKIT from '../../ui-kit/import.js';

/**
 * @function Рендерит страницу по входящему объекту приложения.
 * @param {Object} app - Объект приложения.
 */
const mainPage = (app, store) => {
  const params = sessionStorage.getItem('params');

  if (store.getters.products.hasOwnProperty(params)) {
    store.actions.getProducts(params);
    return;
  }

  // const restName = store.getters.products(params).restName;
  const restName = params;

  const products = [
    {
      imgPath: 'https://avatars.mds.yandex.net/get-zen_doc/4347415/pub_606c404ea4ae570085123302_606d9f94dcd05469540c84a3/scale_1200',
      productName: 'Тестовое имя',
      info: '172 г · 213 ккал',
      description: 'Вкусный и самый настоящий. Всем несомненно он погнравится',
      price: 296
    },
    {
      imgPath: 'https://avatars.mds.yandex.net/get-zen_doc/4347415/pub_606c404ea4ae570085123302_606d9f94dcd05469540c84a3/scale_1200',
      productName: 'Тестовое имя',
      info: '172 г · 213 ккал',
      description: 'Вкусный и самый настоящий. Всем несомненно он погнравится',
      price: 296
    },
    {
      imgPath: 'https://avatars.mds.yandex.net/get-zen_doc/4347415/pub_606c404ea4ae570085123302_606d9f94dcd05469540c84a3/scale_1200',
      productName: 'Тестовое имя',
      info: '172 г · 213 ккал',
      description: 'Вкусный и самый настоящий. Всем несомненно он погнравится',
      price: 296
    }, {
      imgPath: 'https://avatars.mds.yandex.net/get-zen_doc/4347415/pub_606c404ea4ae570085123302_606d9f94dcd05469540c84a3/scale_1200',
      productName: 'Тестовое имя',
      info: '172 г · 213 ккал',
      description: 'Вкусный и самый настоящий. Всем несомненно он погнравится',
      price: 296
    },
    {
      imgPath: 'https://avatars.mds.yandex.net/get-zen_doc/4347415/pub_606c404ea4ae570085123302_606d9f94dcd05469540c84a3/scale_1200',
      productName: 'Тестовое имя',
      info: '172 г · 213 ккал',
      description: 'Вкусный и самый настоящий. Всем несомненно он погнравится',
      price: 296
    },
    {
      imgPath: 'https://avatars.mds.yandex.net/get-zen_doc/4347415/pub_606c404ea4ae570085123302_606d9f94dcd05469540c84a3/scale_1200',
      productName: 'Тестовое имя',
      info: '172 г · 213 ккал',
      description: 'Вкусный и самый настоящий. Всем несомненно он погнравится',
      price: 296
    }
  ];

  app.root.innerHTML = components.header(
    Object.keys(store.getters.user()).length !== 0, '/graphics/images/avatar.jpg'
  );

  const main = document.createElement('main');
  main.innerHTML =
    UIKIT.backButton('Все рестораны', 'main') + `<h1>${restName}</h1>` + components.productsIcons(products);

  app.root.appendChild(main);
};

export default mainPage;
