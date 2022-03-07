import components from '../../components/import.js';
import UIKIT from '../../ui-kit/import.js';

const registerPage = (root, modal) => {
    const properties = [
        {property: "Телефон", defaultValueProperty: "Введите телефон"},
        {property: "Имя", defaultValueInput: "Введите имя"},
        {property: "Пароль", defaultValueInput: "**********"},
        {property: "Повторите пароль", defaultValueInput: "**********"},
    ];

    root.lastChild.classList.add('hidden');

    modal.innerHTML = components.registerForm(properties);
};

export default registerPage;
