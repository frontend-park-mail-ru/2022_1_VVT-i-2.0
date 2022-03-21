const paymentNotification = (textNotification, freeDelivery) => {
    let statusNotification = 'free-delivery';

    if (freeDelivery === false) {
        statusNotification = 'not-free-delivery';
    }

    const template = `
        <div class="notification {{statusNotification}}">
            <div></div>
            <div class="text-notification">
                Закажите ещё на 380₽ для бесплатной доставки
            </div>
        </div>
    `;

    return Mustache.render(template, textNotification);
};

export default paymentNotification;
