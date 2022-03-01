import * as api from '../api/index.js';
import * as components from '../components/index.js';

export const indexPage = (root) => {
  const index = new components.IndexPageComponent(root);
  index.render();
};

export const loginPage = (root) => {
  const login = new components.LoginPageComponent(root);
  login.render();
};

export const registerPage = (root) => {
  const register = new components.RegisterPageComponent(root);
  register.render();
};
