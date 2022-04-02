import components from '../../components/import.js';

export const profileMenuPoints = [
    'Личные данные',
    //  'Адреса доставки',
    //  'Мои заказы',
    //  'Мои скидки'
    'Выход'
];

const profilePage = (app) => {
    const properties = [
        {
            title: 'Имя',
            width: 300,
            placeholder: 'Сергей',
            id: 'profileName'
        },
        {
            title: 'Телефон',
            width: 300,
            placeholder: '+7(',
            id: 'profilePhone'
        },
        {
            title: 'Электронная почта',
            width: 300,
            type: 'email',
            placeholder: 'Введите почту',
            id: 'profileEmail'
        },
    ];

    app.root.innerHTML = components.header(true);

    const main = document.createElement('main');
    main.innerHTML = components.personInfoForm(properties);

    app.root.appendChild(main);
    // events.addListeners(app);
};

export default profilePage;
