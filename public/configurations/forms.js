import ELEMS_CONFIGURATION from './elems.js';
import COLORS from './colors.js';

const FORMS_CONFIGURATION = {
    inputs: {
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
                placeholder: '+7(',
                id: 'registerPhone'
            },
            {
                title: 'Имя',
                placeholder: 'Сергей',
                id: 'registerName'
            },
            {
                title: 'Пароль',
                type: 'password',
                placeholder: 'Введите пароль',
                id: 'registerPassword'
            },
            {
                title: 'Повторите пароль',
                type: 'password',
                placeholder: 'Введите пароль',
                id: 'registerRepeatPassword'
            },
        ],
        personInfoForm: [
            {
                title: 'Имя',
                placeholder: 'Сергей',
                width: ELEMS_CONFIGURATION.inputs.LARGE,
                id: 'profileName'
            },
            {
                title: 'Телефон',
                placeholder: '+7(',
                width: ELEMS_CONFIGURATION.inputs.LARGE,
                id: 'profilePhone'
            },
            {
                title: 'Электронная почта',
                type: 'email',
                placeholder: 'Введите почту',
                width: ELEMS_CONFIGURATION.inputs.LARGE,
                id: 'profileEmail'
            },
        ],
        ordering: [
            {
                title: 'Телефон',
                placeholder: '+7(',
                width: ELEMS_CONFIGURATION.inputs.LARGE,
                id: 'orderingPhone'
            },
            {
                title: 'Адрес доставки',
                placeholder: 'Введите адрес доставки',
                width: ELEMS_CONFIGURATION.inputs.LARGE,
                id: 'orderingAddress'
            },
            {
                title: 'Подъезд',
                width: ELEMS_CONFIGURATION.inputs.SMALL,
                id: 'orderingEntrance'
            },
            {
                title: 'Домофон',
                width: ELEMS_CONFIGURATION.inputs.SMALL,
                id: 'orderingIntercom'
            },
            {
                title: 'Этаж',
                placeholder: '',
                width: ELEMS_CONFIGURATION.inputs.SMALL,
                id: 'orderingFloor'
            },
            {
                title: 'Квартира',
                width: ELEMS_CONFIGURATION.inputs.SMALL,
                id: 'orderingFlat'
            }
        ],
    },
    // simpleButtons: {
    //     personInfoForm: {
    //         title: 'Сохранить',
    //         color: COLORS.primary,
    //         href: 'profile',
    //         id: 'personInfoSaveButton',
    //     }
    // },
    menu: {
        profilePoints: [
            {point: 'Личные данные', dataSection: 'profile'},
            // {point: 'Адреса доставки', dataSection: 'addresses'},
            // {point: 'Мои заказы', dataSection: 'my-orders'},
            // {point: 'Мои скидки', dataSection: 'my-promo'},
            {point: 'Выход', dataSection: 'main'},
        ],
    }
};

export default FORMS_CONFIGURATION;
