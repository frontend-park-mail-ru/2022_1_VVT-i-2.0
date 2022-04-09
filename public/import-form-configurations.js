const FORM_CONFIGURATION = {
    loginForm: [
        {
            title: 'Телефон',
            placeholder: '+7(',
            id: 'loginPhone'
        },
        {
            title: 'Пароль',
            type: 'password',
            placeholder: 'Введите пароль',
            id: 'loginPassword'
        },
    ],
    registerForm: [
        {
            title: 'Телефон',
            width: 300,
            placeholder: '+7(',
            id: 'registerPhone'
        },
        {
            title: 'Имя',
            width: 300,
            placeholder: 'Сергей',
            id: 'registerName'
        },
        {
            title: 'Пароль',
            width: 300,
            type: 'password',
            placeholder: 'Введите пароль',
            id: 'registerPassword'
        },
        {
            title: 'Повторите пароль',
            width: 300,
            type: 'password',
            placeholder: 'Введите пароль',
            id: 'registerRepeatPassword'
        },
    ],
    profilePoints: [
        {point: 'Личные данные', dataSection: 'profile'},
        // {point: 'Адреса доставки', dataSection: 'addresses'},
        // {point: 'Мои заказы', dataSection: 'my-orders'},
        // {point: 'Мои скидки', dataSection: 'my-promo'},
        {point: 'Выход', dataSection: 'main'},
    ],
    personInfoForm: [
        {
            title: 'Имя',
            placeholder: 'Сергей',
            id: 'profileName'
        },
        {
            title: 'Телефон',
            placeholder: '+7(',
            id: 'profilePhone'
        },
        {
            title: 'Электронная почта',
            type: 'email',
            placeholder: 'Введите почту',
            id: 'profileEmail'
        },
    ],
    ordering: [
        {
            title: 'Телефон',
            placeholder: '+7(',
            id: 'orderingPhone'
        },
        {
            title: 'Адрес доставки',
            placeholder: 'Введите адрес доставки',
            id: 'orderingAddress'
        },
        {
            title: 'Подъезд',
            id: 'orderingEntrance'
        },
        {
            title: 'Домофон',
            id: 'orderingIntercom'
        },
        {
            title: 'Этаж',
            placeholder: '',
            id: 'orderingFloor'
        },
        {
            title: 'Квартира',
            id: 'orderingFlat'
        }
    ],
};

export default FORM_CONFIGURATION;
