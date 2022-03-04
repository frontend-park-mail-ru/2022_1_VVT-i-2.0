import components from '../../components/import.js';
import UIKIT from '../../ui-kit/import.js';

const mainPage = (root) => {
    root.innerHTML = components.header();

    const main = document.createElement('main');
    const html = UIKIT.mainLink();

    main.innerHTML = html;

    root.appendChild(main);
};

export default mainPage;
