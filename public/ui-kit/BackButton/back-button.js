/**
 * @function Создает html-строку для создания ui-kit компонента button через шаблонатор Mustache.
 * @param {string} title - название кнопки.
 * @param {string} href - значение поля data-section.
 * @return {string} HTML строка для отрисовки ui-kit компонента button.
 */
const backButton = (title, href) => {
  const template = `
    <a class="uikit__back-button" data-section="{{href}}">
      <img class="back-button__img" src="/graphics/icons/back_button.svg" data-section="{{href}}">
      <span data-section="{{href}}">{{title}}</span>
    </a>
  `;
  return Mustache.render(template, { title, href });
};

export default backButton;
