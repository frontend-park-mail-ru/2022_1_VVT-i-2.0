import components from '../../components/import.js';

const registerPage = (root) => {
  const html = components.header();

  root.innerHTML = html;
};

export default registerPage;
