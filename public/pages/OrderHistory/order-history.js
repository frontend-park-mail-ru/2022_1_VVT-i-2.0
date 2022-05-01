import components from "../../components/import.js";

const orderHistoryPage = (app, store) => {
    app.root.innerHTML = components.header();


    const props = [
        {orderNumber: 2345, restName: 'Макдональдс', date: '24.09.2022', price: 267, status: 'В обработке'},
        {orderNumber: 2345, restName: 'Макдональдс', date: '24.09.2022', price: 267, status: 'В обработке'},
        {orderNumber: 2345, restName: 'Макдональдс', date: '24.09.2022', price: 267, status: 'В обработке'},
        {orderNumber: 2345, restName: 'Макдональдс', date: '24.09.2022', price: 267, status: 'В обработке'},
        {orderNumber: 2345, restName: 'Макдональдс', date: '24.09.2022', price: 267, status: 'В обработке'},
        {orderNumber: 2345, restName: 'Макдональдс', date: '24.09.2022', price: 267, status: 'В обработке'},
        {orderNumber: 2345, restName: 'Макдональдс', date: '24.09.2022', price: 267, status: 'В обработке'},
        {orderNumber: 2345, restName: 'Макдональдс', date: '24.09.2022', price: 267, status: 'В обработке'}
    ]


    const main = document.createElement("main");
    main.innerHTML = components.profileTemplate('Мои заказы',
        components.orderStatusList(props));

    app.root.appendChild(main);
};

export default orderHistoryPage;
