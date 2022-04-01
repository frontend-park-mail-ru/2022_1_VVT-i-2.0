/**
 * @function Создает html-строку для создания ui-kit компонента metaInf формы через шаблонатор Mustache.
 * @return {string} HTML строка для отрисовки ui-kit компонента metaInf.
 */
const profileMenu = (profilePreviewPoints) => {
    const template = `
        {{#profilePreviewPoints}}
            <div class="profile-menu-point">
                {{.}}
            </div>
        {{/profilePreviewPoints}}
    `;
    return Mustache.render(template, { profilePreviewPoints });
};

export default profileMenu;
