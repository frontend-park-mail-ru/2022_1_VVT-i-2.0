import components from '../../components/import.js';
import * as events from '../../events/events.js';
import UIKIT from '../../ui-kit/import.js';

/**
 * @function Рендерит страницу по входящему объекту приложения.
 * @param {Object} app - Объект приложения.
 */
const mainPage = (app) => {
  // api
  //     .getProducts()
  //     .then((res) => res.json())
  //     .then((res) => {
  events.removeListeners(app);

  app.root.innerHTML = components.header(false);

  const main = document.createElement('main');
  main.innerHTML =
    UIKIT.backButton('Все рестораны', 'main') + '<h1>Макдональдс</h1>' + components.productsIcons([
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
    ]);

  app.root.appendChild(main);

  events.addListeners(app);
  // });
};

export default mainPage;
