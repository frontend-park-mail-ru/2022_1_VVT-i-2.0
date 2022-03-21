import components from '../../components/import.js';

/**
 * @function Рендерит страницу по входящему объекту приложения.
 * @param {Object} app - Объект приложения.
 */
const shoppingCart = (app) => {
    const properties = [
        // {
        //     title: 'Телефон',
        //     width: 300,
        //     placeholder: '+7(',
        //     id: 'registerPhone'
        // },
        // {
        //     title: 'Имя',
        //     width: 300,
        //     placeholder: 'Сергей',
        //     id: 'registerName'
        // },
        // {
        //     title: 'Пароль',
        //     width: 300,
        //     type: 'password',
        //     placeholder: 'Введите пароль',
        //     id: 'registerPassword'
        // },
        // {
        //     title: 'Повторите пароль',
        //     width: 300,
        //     type: 'password',
        //     placeholder: 'Введите пароль',
        //     id: 'registerRepeatPassword'
        // },
    ];

    app.modal.innerHTML = components.shoppingCart(properties);
};

export default shoppingCart;
