import UIKIT from '../../ui-kit/import.js';
import COLORS from '../../configurations/colors.js';
import FORMS_CONFIGURATION from '../../configurations/forms.js';

const personInfoForm = () => {
    const inputConfigurations = FORMS_CONFIGURATION.inputs.personInfoForm;

    const template = `
        <div id="person-info-form" class="person-info-form">
            {{&backButton}}

            {{&title}}

            <div class="person-info-form__sets-nav-block">
                <div>
                    <div class="sets-nav-block__profile-header">
                        Профиль
                    </div>
                    <div class="sets-nav-block__settings-block">
                        {{#inputConfigurations}}
                            {{&input}}
                        {{/inputConfigurations}}
                        <div id="button-save-settings" class="settings-block__button-save-settings">
                            {{&savePersonInfoChanges}}
                        </div>
                    </div>
                </div>
                <div class="sets-nav-block__navigation-block">
                    {{&menu}}
                </div>
            </div>

            <div class="person-info-form__mail-notification">
                Информация о заказах
            </div>

            <div>
                {{&switcherElement}}
            </div>
        </div>
    `;

    return Mustache.render(template, {
        inputConfigurations: inputConfigurations,
        backButton() {
            return UIKIT.backButton('Все рестораны', 'main');
        },
        title() {
            return UIKIT.title('Личные данные');
        },
        input () {
            return UIKIT.input(this.title, this.type, this.width, this.placeholder, this.id);
        },
        menu () {
            return UIKIT.profileMenu();
        },
        savePersonInfoChanges () {
            return UIKIT.simpleButton('Сохранить', COLORS.primary, this.width, 'profile', 'personInfoSaveButton');
        },
        switcherElement () {
            return UIKIT.switcher();
        },
    });
};

export default personInfoForm;
