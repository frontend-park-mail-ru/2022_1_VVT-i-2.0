import components from '../../components/import.js';

const loginPage = (root, modal) => {
    const properties = [
        {title: 'Телефон', placeholder: '+7(xxx)xxx-xx-xx'},
        {title: 'Пароль', placeholder: '**********'},
    ];

    modal.innerHTML = components.loginForm(properties);
};

export default loginPage;
