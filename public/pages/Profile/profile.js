import components from '../../components/import.js';
import FORMS_CONFIGURATION from '../../configurations/forms.js';

export const profileMenuPoints = FORMS_CONFIGURATION.menu.profilePoints;

const profilePage = (app) => {
    app.root.innerHTML = components.header(true, 'graphics/images/avatar.jpg');

    const main = document.createElement('main');
    main.innerHTML = components.personInfoForm();

    app.root.appendChild(main);
    // events.addListeners(app);
};

export default profilePage;
