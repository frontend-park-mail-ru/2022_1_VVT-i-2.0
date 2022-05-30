const notification = (message, error) => {
  const template = `
    <div class="notification">
      {{#error}}
        <img class="notification__img" src="/graphics/icons/notification-error.svg">
      {{/error}}
      {{^error}}
        <img class="notification__img" src="/graphics/icons/notification-success.svg">
      {{/error}}
      <div class="notification__message">{{message}}</div>
      <img class="notification__close-img" src="/graphics/icons/close.svg">
    </div>
  `;
  return Mustache.render(template, { message, error });
};

export default notification;
