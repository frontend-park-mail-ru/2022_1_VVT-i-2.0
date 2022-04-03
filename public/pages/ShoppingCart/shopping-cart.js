import components from '../../components/import.js';

/**
 * @function Рендерит страницу по входящему объекту приложения.
 * @param {Object} app - Объект приложения.
 */
const shoppingCartPage = (app) => {
    const restName = 'McDonalds';

    const properties = [
        {
            imgPath: 'icons/Image.png',
            dishName: 'Бургер по-восточному',
            additives: 'Без котлеты',
            dishCount: 3,
            price: 269,
        },
        {
            imgPath: 'icons/Image.png',
            dishName: 'Бургер по-восточному',
            additives: 'Без котлеты',
            dishCount: 3,
            price: 269,
        },
        {
            imgPath: 'icons/Image.png',
            dishName: 'Бургер по-восточному',
            additives: 'Без котлеты',
            dishCount: 3,
            price: 269,
        },
    ];

    app.modal.innerHTML = components.shoppingCart(restName, properties);
};

export default shoppingCartPage;