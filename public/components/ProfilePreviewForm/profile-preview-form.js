import components from '../../components/import.js';

/**
 * @function Создает html-строку для создания ui-kit компонента metaInf формы через шаблонатор Mustache.
 * @return {string} HTML строка для отрисовки ui-kit компонента metaInf.
 */
const profilePreviewForm = (profilePreviewPoints) => {
    const template = `
        <div id="profile-preview-block">
            {{&menu}}
        </div>
    `;
    return Mustache.render(template, {
        profilePreviewPoints: profilePreviewPoints,
        menu () {
            components.profileMenu(profilePreviewPoints);
        }
    });
};

export default profilePreviewForm;
