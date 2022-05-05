import FORMS_CONFIGURATION from "../../configurations/forms";

/**
 * @function Создает html-строку для создания ui-kit компонента metaInf формы через шаблонатор Mustache.
 * @return {string} HTML строка для отрисовки ui-kit компонента metaInf.
 */
const profileMenu = () => {
  const profileMenuPoints = FORMS_CONFIGURATION.menu.profilePoints;

  const template = `
        <section class="profile-menu">
            {{#profileMenuPoints}}
                <div id="{{id}}" data-section="{{dataSection}}" class="profile-menu__point">
                    <a data-section="{{dataSection}}">{{point}}</a>
                </div>
            {{/profileMenuPoints}}
        </section>
    `;
  return Mustache.render(template, { profileMenuPoints });
};

export default profileMenu;
