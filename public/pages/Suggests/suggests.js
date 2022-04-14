import components from '../../components/import.js';

const suggestsPage = (app, store) => {
  const suggests = store.getters.suggests();
  app.modal.innerHTML = components.suggestsForm({ suggests });
};

export default suggestsPage;
