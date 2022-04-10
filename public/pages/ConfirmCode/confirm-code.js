import components from '../../components/import.js';


const confirmCodePage = (app, store) => {
    app.modal.innerHTML = components.confirmCodeForm();
};

export default confirmCodePage;
