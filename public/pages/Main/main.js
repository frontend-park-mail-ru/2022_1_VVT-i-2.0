import * as api from '../../api/api.js';
import components from '../../components/import.js';
import * as events from '../../events/events.js';
import UIKIT from '../../ui-kit/import.js';

const mainPage = (app) => {
    api
        .getRestaurants()
        .then((res) => res.json())
        .then((res) => {
            events.removeListeners(app);

            app.root.innerHTML = components.header(res.auth);

            const main = document.createElement('main');
            main.innerHTML = UIKIT.mainLink('Рестораны') + components.restIcons(res.restaurants);

            app.root.appendChild(main);

            events.addListeners(app);
        });
};

export default mainPage;
