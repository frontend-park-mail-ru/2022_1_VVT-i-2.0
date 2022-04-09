import components from '../../components/import.js';
import FORM_CONFIGURATION from '../../import-form-configurations.js';

export const profileMenuPoints = FORM_CONFIGURATION.profilePoints;

const profilePage = (app, store) => {
    app.root.innerHTML = components.header(true);

    const main = document.createElement('main');
    main.innerHTML = components.personInfoForm();

    app.root.appendChild(main);
    // events.addListeners(app);
};

export default profilePage;
