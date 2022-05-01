const orderStatus = (props) => {
    let statusClass = '';

    switch (props.status) {
        case 'В обработке':
            statusClass = 'status__img_in-processing';
            break;
        case 'Готовим':
            statusClass = 'status__img_cooking';
            break;
        case 'В пути':
            statusClass = 'status__img_in-way';
            break;
        default:
            statusClass = 'status__img_received';
            break;
    }

    const template = `
        <div class="order-info">
            <div class="order-info__order-number">
                #2342
            </div>
            <div class="order-info__rest-name">
                Макдональдс
            </div>
            <div class="order-info__order-date">
                28.01.2022
            </div>
            <div class="order-info__order-price">
                298 ₽
            </div>
            <div class="order-info__status">
                <div class="{{statusClass}}"></div>
                <div class="status__text">
                    {{status}}
                </div>
            </div>
            <div>
                <img src="arrow-down.svg" alt="">
            </div>
        </div>
    `;

    return Mustache.render(template, {
        orderNumber: props.orderNumber,
        restName: props.restName,
        date: props.date,
        price: props.price,
        statusClass,
        status: props.status,
    });
};

export default orderStatus;
