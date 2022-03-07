import components from '../../components/import.js';
import UIKIT from '../../ui-kit/import.js';

const mainPage = (root, modal) => {
    const imgPath = 'https://citrusfoto.ru/sites/default/files/styles/work_samples/public/1000-vasiliy_malykhin-4dfd2881e419f552c3fa1208ff4e8535.jpg?itok=ZE_5-a43';

    const restaurants = [
        {imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8},
        {imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8},
        {imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8},
        {imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8},
        {imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8},
        {imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8},
        {imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8},
        {imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8},
        {imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8},
        {imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8},
        {imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8},
        {imgPath, restName: 'Шоколадница', timeToDeliver: '20-35 мин', price: '550₽', rating: 4.8},
    ];

    root.innerHTML = components.header();

    const main = document.createElement('main');
    main.innerHTML = UIKIT.mainLink('Рестораны') + components.restIcons(restaurants);

    root.appendChild(main);
};

export default mainPage;
