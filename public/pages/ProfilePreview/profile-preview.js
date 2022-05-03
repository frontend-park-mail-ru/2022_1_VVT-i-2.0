import components from "../../components/import.js";

const profilePreviewPage = (app, store) => {
  app.modal.innerHTML = components.profilePreviewForm();
};

export default profilePreviewPage;
