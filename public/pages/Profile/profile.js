import components from '../../components/import.js';

export const profileMenuPoints = [
    'Личные данные',
    //  'Адреса доставки',
    //  'Мои заказы',
    //  'Мои скидки'
    'Выход'
];

const profilePage = (app) => {
    app.root.innerHTML = components.header(true);

    const main = document.createElement('main');
    main.innerHTML = components.personInfoForm();

    app.root.appendChild(main);
    // events.addListeners(app);
};

export default profilePage;
