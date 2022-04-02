import components from '../../components/import.js';

/**
 * @function Рендерит страницу по входящему объекту приложения.
 * @param {Object} app - Объект приложения.
 */
const shoppingCart = (app) => {
    const restName = 'McDonalds';

    const properties = [
        {
            imgPath: 'icons/404.svg',
            dishName: 'Бургер по-восточному',
            count: 3,
            price: 269,
        },
        {
            imgPath: 'icons/404.svg',
            dishName: 'Бургер по-восточному',
            count: 3,
            price: 269,
        },
        {
            imgPath: 'icons/404.svg',
            dishName: 'Бургер по-восточному',
            count: 3,
            price: 269,
        },
    ];

    app.modal.innerHTML = components.shoppingCart(restName, properties);
};

export default shoppingCartPage;
