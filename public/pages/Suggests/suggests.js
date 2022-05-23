import components from "../../components/import.js";

const suggestsPage = (app, store) => {
  const suggests = store.getters.suggests();
  const auth = Object.keys(store.getters.user()).length !== 0;

  app.modal.innerHTML = components.suggestsForm({ suggests, auth });
};

export default suggestsPage;
