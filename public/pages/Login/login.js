import components from '../../components/import.js';

const loginPage = (root) => {
  const html = components.header();

  root.innerHTML = html;
};

export default loginPage;
