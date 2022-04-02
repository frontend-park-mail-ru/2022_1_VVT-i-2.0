import UIKIT from '../../ui-kit/import.js';
import COLORS from '../../utils/colors.js';

const personInfoForm = (personProperties) => {
    const template = `
        <div id="profile">
            <div id="block-back-all-rest">
                <img src="icons/arrow_back.svg" alt="" height="24" width="24">
                    Все рестораны
            </div>

            <div id="person-data-header">
                Личные данные
            </div>
            
            <div id="settings-and-nav-block">
                <div>
                    <div id="profile-header">
                        Профиль
                    </div>
                    <div id="setting-block">
                        {{#personProperties}}
                            <div class="person-property">
                                {{&input}}
                            </div>
                        {{/personProperties}}
                        <div id="button-save">
                            {{&savePersonInfoChanges}}
                        </div>
                    </div>
                </div>
                <div id="navigation-block">
                    {{&menu}}
                </div>
            </div>
                
            <div id="message-send-info">
                Информация о заказах
            </div>
            
            <div>
                {{&switcherElem}}
            </div>
        </div>
    `;

    return Mustache.render(template, {
        personProperties: personProperties,
        input () {
            return UIKIT.input(this.title, this.type, this.placeholder, this.id);
        },
        menu () {
            return UIKIT.profileMenu();
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
