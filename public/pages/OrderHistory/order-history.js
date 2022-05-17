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

    // if (sessionStorage.getItem('openedAdditionalOrderInfo') !== null) {
    //     // console.log('item openedAdditionalOrderInfo already setted, good');
    //     const buttonFrames = document.querySelectorAll('[data-id]');
    //     // console.log(buttonFrames, 'buttonFrames to click, need one');
    //     [...buttonFrames].forEach((buttonFrame) => {
    //         // console.log(buttonFrame, buttonFrame.getAttribute('data-id'), buttonFrame.attributes, buttonFrame.attributes['data-id'].value);
    //         if (buttonFrame.getAttribute('data-id') === sessionStorage.getItem('openedAdditionalOrderInfo')) {
    //             // console.log(buttonFrame.getAttribute('data-id').value, '=', sessionStorage.getItem('openedAdditionalOrderInfo'));
    //             buttonFrame.click();
    //             // console.log(buttonFrame, 'CLICKED!!!');
    //         }
    //     });
    // } else {
    //     // console.log('item openedAdditionalOrderInfo not setted');
    // }
};

export default orderHistoryPage;
