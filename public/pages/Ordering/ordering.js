import components from '../../components/import.js';

const ordering = (app) => {
  app.root.innerHTML = components.header(false);

  const main = document.createElement('main');
  main.innerHTML = components.ordering();

  app.root.appendChild(main);
};

export default ordering;
