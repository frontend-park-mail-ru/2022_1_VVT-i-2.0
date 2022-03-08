import components from '../../components/import.js';

const registerPage = (app) => {
    const properties = [
        {title: 'Телефон', placeholder: '+7(', error: false},
        {title: 'Имя', placeholder: 'Сергей', error: false},
        {title: 'Пароль', placeholder: '**********', error: false},
        {title: 'Повторите пароль', placeholder: '**********', error: false},
    ];

    app.modal.innerHTML = components.registerForm(properties);
};

export default registerPage;
