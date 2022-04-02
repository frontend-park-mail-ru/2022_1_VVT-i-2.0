import components from '../../components/import.js';

const profilePreviewPage = (app) => {
    app.modal.innerHTML = components.profilePreviewForm();
};

export default profilePreviewPage;
