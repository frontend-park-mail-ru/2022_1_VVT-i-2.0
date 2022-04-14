import components from '../../components/import.js';
import * as events from '../../events/events.js';
import UIKIT from '../../ui-kit/import.js';

const mainPage = (app, store) => {
    if (store.getters.restaurants().length === 0) {
        store.actions.getRestaurants();
        return;
    }

    app.root.innerHTML = components.header(
        Object.keys(store.getters.user()).length !== 0, '/graphics/images/avatar.jpg'
    );

    const main = document.createElement('main');
    main.innerHTML = UIKIT.mainLink('Рестораны') + components.restIcons(store.getters.restaurants);

    app.root.appendChild(main);
};

export default mainPage;
