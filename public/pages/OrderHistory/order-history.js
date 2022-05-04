import components from "../../components/import.js";
import {renderAndUpdateURN} from "../../render/render";
import {getOrderList} from "../../store/getters/getters";

const orderHistoryPage = (app, store) => {
    if (!store.getters.getOrderList().length) {
        store.actions.getOrderList();
    }

    app.root.innerHTML = components.header();

    // const props = [
    //     {orderNumber: 1111, restName: 'Макдональдс', date: '24.09.2022', price: 267, status: 'В обработке'},
    //     {orderNumber: 2222, restName: 'Макдональдс', date: '24.09.2022', price: 267, status: 'В обработке'},
    //     {orderNumber: 3333, restName: 'Макдональдс', date: '24.09.2022', price: 267, status: 'В обработке'},
    //     {orderNumber: 4444, restName: 'Макдональдс', date: '24.09.2022', price: 267, status: 'В обработке'},
    //     {orderNumber: 5555, restName: 'Макдональдс', date: '24.09.2022', price: 267, status: 'В обработке'},
    //     {orderNumber: 6666, restName: 'Макдональдс', date: '24.09.2022', price: 267, status: 'В обработке'},
    //     {orderNumber: 7777, restName: 'Макдональдс', date: '24.09.2022', price: 267, status: 'В обработке'},
    //     {orderNumber: 8888, restName: 'Макдональдс', date: '24.09.2022', price: 267, status: 'В обработке'},
    //     {orderNumber: 9999, restName: 'Макдональдс', date: '24.09.2022', price: 267, status: 'В обработке'},
    //     {orderNumber: 11111, restName: 'Макдональдс', date: '24.09.2022', price: 267, status: 'В обработке'},
    //     {orderNumber: 22222, restName: 'Макдональдс', date: '24.09.2022', price: 267, status: 'В обработке'},
    //     {orderNumber: 33333, restName: 'Макдональдс', date: '24.09.2022', price: 267, status: 'В обработке'}
    // ];

    const main = document.createElement("main");
    main.innerHTML = components.profileTemplate('Мои заказы',
        components.orderStatusList(store.getters.getOrderList()));
    app.root.appendChild(main);

};

export default orderHistoryPage;