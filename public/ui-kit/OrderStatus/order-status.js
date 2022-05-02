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
                #{{orderNumber}}
            </div>
            <div class="order-info__rest-name">
                {{restName}}
            </div>
            <div class="order-info__order-date">
                {{date}}
            </div>
            <div class="order-info__order-price">
                {{price}} ₽
            </div>
            <div class="order-info__status">
                <div class="{{statusClass}}"></div>
                <div class="status__text">
                    {{status}}
                </div>
            </div>
            <div class="order-info__move-controller">
                <img id="{{orderNumber}}" class="buttonOpenClose" src="/graphics/icons/keyboard_arrow_down.svg" alt="">
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
