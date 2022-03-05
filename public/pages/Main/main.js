import components from '../../components/import.js';
import UIKIT from '../../ui-kit/import.js';

const imgPath = 'https://citrusfoto.ru/sites/default/files/styles/work_samples/public/1000-vasiliy_malykhin-4dfd2881e419f552c3fa1208ff4e8535.jpg?itok=ZE_5-a43';

const mainPage = (root) => {
    root.innerHTML = components.header();

    const main = document.createElement('main');

    main.innerHTML = UIKIT.mainLink();

    const restIcon = document.createElement('div');
    restIcon.innerHTML = components.restIcon(imgPath, 'Шоколадница', '20-35 мин', '550₽', 4.8);
    restIcon.classList.add('rest_icon');

    main.appendChild(restIcon);
    root.appendChild(main);
};

export default mainPage;
