import components from '../../components/import.js';

const loginPage = (app) => {
    const properties = [
        {title: 'Телефон', placeholder: '+7(xxx)xxx-xx-xx', id: 'loginPhone'},
        {title: 'Пароль', placeholder: '**********', id: 'loginPassword'},
    ];

    app.modal.innerHTML = components.loginForm(properties);
};

export default loginPage;
