import components from '../../components/import.js';

/**
 * @function Записывает в
 * @param {Object} app - метаинформация, прописанная в атрибуте data-section тега.
 */
const loginPage = (app) => {
    const properties = [
        {title: 'Телефон', placeholder: '+7(', id: 'loginPhone'},
        {title: 'Пароль', type: 'password', placeholder: 'Введите пароль', id: 'loginPassword'},
    ];

    app.modal.innerHTML = components.loginForm(properties);
};

export default loginPage;
