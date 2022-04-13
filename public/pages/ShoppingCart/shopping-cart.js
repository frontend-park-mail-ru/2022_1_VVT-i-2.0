import components from '../../components/import.js';

/**
 * @function Рендерит страницу по входящему объекту приложения.
 * @param {Object} app - Объект приложения.
 */
const shoppingCartPage = (app, store) => {
    const currentRestName = store.getters.currentRestName();

    let productObj = { restName: '', products: [] };
    if (currentRestName !== '') {
        productObj = Object
            .values(store.getters.products())
            .find((product) => product.restName === currentRestName);
    }

    const properties = store
        .getters.cart()
        .map(({ id, count }) => {
            const index = productObj.products.findIndex((orderPoint) => orderPoint.id === id);
            if (index === -1) {
                return;
            }
            return { ...productObj.products[index], count };
        });

    app.modal.innerHTML = components.shoppingCart(productObj.restName, properties);
};

export default shoppingCartPage;
