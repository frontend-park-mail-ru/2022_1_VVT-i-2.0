import UIKIT from '../../ui-kit/import.js';
import COLORS from '../../utils/colors.js';
import components from '../import';

const personInfoForm = (personProperties) => {
    const template = `
        <div>Личные данные</div>
        <div id="person-data-properties">
            <div>Профиль</div>
            {{#personProperties}}
                {{&input}}
            {{/personProperties}}
            {{&savePersonInfoChanges}}
        </div>
        <div>
            {{&menu}}
        </div>
        <div>Информация о заказах</div>
        <div>
            {{&switcherElem}}
        </div>
    `;
    return Mustache.render(template, {
        personProperties: personProperties,
        input () {
            return UIKIT.input(this.title, this.type, this.placeholder, this.id);
        },
        menu () {
            components.profileMenu(personProperties);
        },
        savePersonInfoChanges () {
            return UIKIT.button('Сохранить', COLORS.primary, 'profile', 'personInfoSaveButton');
        },
        switcherElem () {
            return UIKIT.switcher();
        },
    });
};

export default personInfoForm;
