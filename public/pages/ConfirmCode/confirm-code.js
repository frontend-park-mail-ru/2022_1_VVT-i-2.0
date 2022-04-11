import components from '../../components/import.js';


const confirmCodePage = (app, store) => {
    const phone = sessionStorage.getItem('phone');
    app.modal.innerHTML = components.confirmCodeForm(phone);
};

export default confirmCodePage;
