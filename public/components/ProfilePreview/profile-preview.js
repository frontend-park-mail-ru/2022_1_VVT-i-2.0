/**
 * @function Создает html-строку для создания ui-kit компонента metaInf формы через шаблонатор Mustache.
 * @return {string} HTML строка для отрисовки ui-kit компонента metaInf.
 */
const profilePreview = (profilePreviewPoints) => {
    const template = `
        <div id="profile-preview-block">
            {{#profilePreviewPoints}}
                <div class="profile-preview-point">
                    {{.}}
                </div>
            {{/profilePreviewPoints}}
        </div>
    `;
    return Mustache.render(template, { profilePreviewPoints });
};

export default profilePreview;
