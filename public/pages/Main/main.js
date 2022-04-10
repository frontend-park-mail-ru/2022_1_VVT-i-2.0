import components from '../../components/import.js';
import * as events from '../../events/events.js';
import UIKIT from '../../ui-kit/import.js';

/**
 * @function Рендерит страницу по входящему объекту приложения.
 * @param {Object} app - Объект приложения.
 */
const mainPage = (app, store) => {
    // api
    //     .getRestaurants()
    //     .then((res) => res.json())
    //     .then((res) => {
    // events.removeListeners(app);

<<<<<<< HEAD
    app.root.innerHTML = components.header(true, 'TRASH/avatar.jpg');
=======
    // app.root.innerHTML = components.header(true);
>>>>>>> 386289ecc3c6a287152ba01bdb2b0a6f89a2e5d8

    // const main = document.createElement('main');
    // main.innerHTML = UIKIT.mainLink('Рестораны') + components.restIcons({});

    // app.root.appendChild(main);

    // events.addListeners(app);
    // });

    console.log(store.actions, store.getters);
};

export default mainPage;
