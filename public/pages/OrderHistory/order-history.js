import components from "../../components/import.js";

const orderHistoryPage = (app, store) => {
    if (!store.getters.getOrderList().length) {
        store.actions.getOrderList();
    }

    store.actions.setUpdateTimeout();

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
    main.innerHTML = /*components.statusPreview() + */components.profileTemplate('Мои заказы',
        components.orderStatusList(store.getters.getOrderList()));
    app.root.appendChild(main);

    if (sessionStorage.getItem('openedAdditionalOrderInfo') !== null) {
        console.log('item setted');
        const buttonFrames = document.querySelectorAll('[data-id]');
        console.log(buttonFrames, 'buttonFrames to click, need one');
        [...buttonFrames].forEach((buttonFrame) => {
            console.log(buttonFrame, buttonFrame.getAttribute('data-id'), buttonFrame.attributes, buttonFrame.attributes['data-id'].value);
            if (buttonFrame.getAttribute('data-id').value === sessionStorage.getItem('openedAdditionalOrderInfo')) {
                console.log(buttonFrame.getAttribute('data-id').value, '=', sessionStorage.getItem('openedAdditionalOrderInfo'));
                buttonFrame.click();
                console.log(buttonFrame, 'CLICKED!!!');
            }
        });
    } else {
        console.log('item not setted');
    }
};

export default orderHistoryPage;
