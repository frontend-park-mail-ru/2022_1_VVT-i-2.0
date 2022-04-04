import components from '../../components/import.js';

const suggestsPage = (app) => {
  const suggests = [
    '12345', '12345', '12345', '12345', '12345', '12345'
  ];
  app.modal.innerHTML = components.suggestsForm({ suggests });
};

export default suggestsPage;
