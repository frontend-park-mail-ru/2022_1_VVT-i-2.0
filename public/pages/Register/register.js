import components from "../../components/import.js";

/**
 * @function Рендерит страницу по входящему объекту приложения.
 * @param {Object} app - Объект приложения.
 */
const registerPage = (app, store) => {
  app.modal.innerHTML = components.registerForm();
};

export default registerPage;
