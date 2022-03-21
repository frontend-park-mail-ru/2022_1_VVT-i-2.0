import components from '../../components/import.js';

const profilePreviewApp = [
    'Личные данные',
    //  'Адреса доставки',
    //  'Мои заказы',
    //  'Мои скидки'
    'Выход'
];

const profilePreviewPage = (app) => {
    app.modal.innerHTML = components.profilePreview(profilePreviewApp);
};

export default profilePreviewPage;
