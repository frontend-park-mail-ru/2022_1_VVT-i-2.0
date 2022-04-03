import components from '../../components/import.js';

/**
 * @function Рендерит страницу по входящему объекту приложения.
 * @param {Object} app - Объект приложения.
 */
const loginPage = (app) => {
    app.modal.innerHTML = components.loginForm();
};

export default loginPage;
