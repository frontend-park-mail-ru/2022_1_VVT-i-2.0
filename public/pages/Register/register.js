import components from '../../components/import.js';
import UIKIT from "../../ui-kit/import";

const registerPage = (root) => {
    const properties = [
        {property: "Телефон", defaultValueProperty: "Введите телефон"},
        {property: "Имя", defaultValueInput: "Введите имя"},
        {property: "Пароль", defaultValueInput: "**********"},
        {property: "Повторите пароль", defaultValueInput: "**********"},
    ];

    const html = components.header();

    root.innerHTML = html;

    const main = document.createElement('main');
    main.innerHTML = UIKIT.mainLink('Рестораны') + components.restIcons(restaurants);
    main.innerHTML = components.registerForm(properties);

    root.appendChild(main);
};

export default registerPage;
