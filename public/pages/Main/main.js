import components from '../../components/import.js';
import UIKIT from '../../ui-kit/import.js';

const imgPath = 'https://citrusfoto.ru/sites/default/files/styles/work_samples/public/1000-vasiliy_malykhin-4dfd2881e419f552c3fa1208ff4e8535.jpg?itok=ZE_5-a43';

const mainPage = (root) => {
    root.innerHTML = components.header();

    const main = document.createElement('main');

    main.innerHTML = UIKIT.mainLink('Рестораны');

    const container = document.createElement('div');

    const restaurants = [
        { imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8 },
        { imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8 },
        { imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8 },
        { imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8 },
        { imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8 },
        { imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8 },
        { imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8 },
        { imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8 },
        { imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8 },
        { imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8 },
        { imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8 },
        { imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8 },
    ];

    container.innerHTML = restaurants.reduce((str, { imgPath, restName, timeToDeliver, price, rating }) => {
        return str + components.restIcon(imgPath, restName, timeToDeliver, price, rating);
    }, '');

    container.id = 'container';

    main.appendChild(container);

    root.appendChild(main);
};

export default mainPage;
