import ELEMS_CONFIGURATION from './elems.js';
import COLORS from './colors/colors.js';

const FORMS_CONFIGURATION = {
    inputs: {
        loginForm: [
            {
                title: 'Телефон',
                placeholder: '+7(',
                id: 'loginPhone'
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
                placeholder: 'Введите имя',
                id: 'registerName'
            },
            {
                title: 'Электронная почта',
                placeholder: 'Введите электронную почту',
                id: 'registerEmail'
            },
        ],
        confirmCodeForm: [
            {
                title: 'Код',
                placeholder: 'Введите код',
                id: 'confirmCode',
            }
        ],
        personInfoForm: [
            {
                title: 'Имя',
                placeholder: 'Введите имя',
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
    menu: {
        profilePoints: [
            {point: 'Личные данные', dataSection: 'profile'},
            {point: 'Выход', dataSection: 'main'},
        ],
        typePaymentChoice: [
            'Онлайн оплата', 'Google Pay', 'Sber Pay'
        ],
    }
};

export default FORMS_CONFIGURATION;
