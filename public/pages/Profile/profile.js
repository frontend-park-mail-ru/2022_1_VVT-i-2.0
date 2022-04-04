import components from '../../components/import.js';

export const profileMenuPoints = [
    {point: 'Личные данные', dataSection: 'profile'},
    // {point: 'Адреса доставки', dataSection: 'addresses'},
    // {point: 'Мои заказы', dataSection: 'my-orders'},
    // {point: 'Мои скидки', dataSection: 'my-promo'},
    {point: 'Выход', dataSection: 'main'},
];

const profilePage = (app) => {
    app.root.innerHTML = components.header(true);

    const main = document.createElement('main');
    main.innerHTML = components.personInfoForm();

    app.root.appendChild(main);
    // events.addListeners(app);
};

export default profilePage;
