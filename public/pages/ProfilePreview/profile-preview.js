import components from '../../components/import.js';
import { profileMenu } from '../Profile/profile.js';

const profilePreviewPage = (app) => {
    app.modal.innerHTML = components.profilePreviewForm(profileMenu);
};

export default profilePreviewPage;
