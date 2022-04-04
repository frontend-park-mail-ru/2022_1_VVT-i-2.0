import { profileMenuPoints } from '../../pages/Profile/profile.js';

/**
 * @function Создает html-строку для создания ui-kit компонента metaInf формы через шаблонатор Mustache.
 * @return {string} HTML строка для отрисовки ui-kit компонента metaInf.
 */
const profileMenu = () => {
    const template = `
        {{#profileMenuPoints}}
            <div data-section="{{dataSection}}" class="profile-menu-point">
                <a data-section="{{dataSection}}">{{point}}</a>
            </div>
        {{/profileMenuPoints}}
    `;
    return Mustache.render(template, { profileMenuPoints });
};

export default profileMenu;
