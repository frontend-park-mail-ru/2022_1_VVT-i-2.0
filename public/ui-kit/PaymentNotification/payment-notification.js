const paymentNotification = (textNotification, freeDelivery) => {
  let statusNotification = "ordering-notification__free-delivery";

  if (freeDelivery === false) {
    statusNotification = "ordering-notification__not-free-delivery";
  }

  const template = `
        <div class="ordering-form__notification {{statusNotification}}">
            <div></div>
            <div class="ordering-notification__text">
                {{textNotification}}
            </div>
        </div>
    `;

  return Mustache.render(template, { textNotification, statusNotification });
};

export default paymentNotification;
