import components from '../../components/import.js';
import FORMS_CONFIGURATION from '../../configurations/forms.js';

export const profileMenuPoints = FORMS_CONFIGURATION.menu.profilePoints;

const profilePage = (app, store) => {
    app.root.innerHTML = components.header(
        Object.keys(store.getters.user()).length !== 0, '/graphics/images/avatar.jpg'
    );

    const main = document.createElement('main');
    main.innerHTML = components.personInfoForm(store.getters.user());

    app.root.appendChild(main);
    // events.addListeners(app);
};

export default profilePage;
