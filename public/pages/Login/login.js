import components from '../../components/import.js';
import UIKIT from '../../ui-kit/import.js';

const loginPage = (root, modal) => {
  const properties = [
    { property: 'Телефон', defaultValueProperty: 'Введите телефон' },
    { property: 'Пароль', defaultValueInput: '**********' },
  ];

  root.lastChild.classList.add('hidden');

  modal.innerHTML = components.loginForm(properties);
};

export default loginPage;
