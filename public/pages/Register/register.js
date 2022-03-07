import components from '../../components/import.js';
import UIKIT from '../../ui-kit/import.js';

const registerPage = (root, modal) => {
    const properties = [
        { title: 'Телефон', placeholder: '+7(xxx)xxx-xx-xx' },
        { title: 'Имя', placeholder: 'Сергей_где_бэк?' },
        { title: 'Пароль', placeholder: '**********' },
        { title: 'Повторите пароль', placeholder: '**********' },
    ];

    modal.innerHTML = components.registerForm(properties);
};

export default registerPage;
