import UIKIT from '../../ui-kit/import.js';

/**
 * @function Создает html-строку для создания ui-kit компонента metaInf формы через шаблонатор Mustache.
 * @return {string} HTML строка для отрисовки ui-kit компонента metaInf.
 */
const profilePreviewForm = () => {
    const template = `
        <div id="profile-preview-block">
            {{&menu}}
        </div>
    `;
    return Mustache.render(template, {
        menu () {
            return UIKIT.profileMenu();
        }
    });
};

export default profilePreviewForm;
