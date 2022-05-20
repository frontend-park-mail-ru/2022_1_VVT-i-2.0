import components from "../../components/import.js";

const orderHistoryPage = (app, store) => {
    if (!store.getters.getOrderList().length) {
        if (sessionStorage.getItem('statusRequestSent') === null) {
            store.actions.getOrderList();
        }
        sessionStorage.setItem('statusRequestSent', 'requestSent');
    }

    store.actions.setUpdateTimeout(store);

    app.root.innerHTML = components.header();
    const main = document.createElement("main");
    main.innerHTML = components.profileTemplate('Мои заказы',
        components.orderStatusList(store.getters.getOrderList()));
    app.root.appendChild(main);

    setTimeout(() => {sessionStorage.removeItem('statusRequestSent')}, 50);
};

export default orderHistoryPage;
