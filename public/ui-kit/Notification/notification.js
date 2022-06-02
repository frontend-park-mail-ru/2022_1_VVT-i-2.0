const notification = (message, error) => {
  const template = `
    <div class="notification {{#error}} notification_error {{/error}} {{^error}} notification_success {{/error}}">
      <div class="notification__message">{{message}}</div>
      <img class="notification__close-img" src="/graphics/icons/close.svg">
    </div>
  `;
  return Mustache.render(template, { message, error });
};

export default notification;
