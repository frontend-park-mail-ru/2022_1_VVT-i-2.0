import components from '../../components/import.js';
import * as events from '../../events/events.js';
import UIKIT from '../../ui-kit/import.js';

/**
 * @function Рендерит страницу по входящему объекту приложения.
 * @param {Object} app - Объект приложения.
 */
const mainPage = (app) => {
    // api
    //     .getRestaurants()
    //     .then((res) => res.json())
    //     .then((res) => {
    events.removeListeners(app);

    app.root.innerHTML = components.header(true);

    const main = document.createElement('main');
    main.innerHTML = UIKIT.mainLink('Рестораны') + components.restIcons({});

    app.root.appendChild(main);

    events.addListeners(app);
    // });
};

export default mainPage;
