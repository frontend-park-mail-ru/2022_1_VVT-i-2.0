import components from '../../components/import.js';

/**
 * @function Рендерит страницу по входящему объекту приложения.
 * @param {Object} app - Объект приложения.
 */
const registerPage = (app) => {
    const properties = [
        {title: 'Телефон', placeholder: '+7(', id: 'registerPhone'},
        {title: 'Имя', placeholder: 'Сергей', id: 'registerName'},
        {title: 'Пароль', type: 'password', placeholder: 'Введите пароль', id: 'registerPassword'},
        {title: 'Повторите пароль', type: 'password', placeholder: 'Введите пароль', id: 'registerRepeatPassword'},
    ];

    app.modal.innerHTML = components.registerForm(properties);
};

export default registerPage;
