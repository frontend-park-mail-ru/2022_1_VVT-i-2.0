import components from '../../components/import.js';

const loginPage = (app) => {
    const properties = [
        {title: 'Телефон', placeholder: '+7(', id: 'loginPhone'},
        {title: 'Пароль', type: 'password', placeholder: 'Введите пароль', id: 'loginPassword'},
    ];

    app.modal.innerHTML = components.loginForm(properties);
};

export default loginPage;
