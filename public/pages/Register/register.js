import components from '../../components/import.js';

const registerPage = (app) => {
    const properties = [
        {title: 'Телефон', placeholder: '+7(xxx)xxx-xx-xx'},
        {title: 'Имя', placeholder: 'Сергей_где_бэк?'},
        {title: 'Пароль', placeholder: '**********'},
        {title: 'Повторите пароль', placeholder: '**********'},
    ];

    app.modal.innerHTML = components.registerForm(properties);
};

export default registerPage;
