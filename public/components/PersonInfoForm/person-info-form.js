import UIKIT from '../../ui-kit/import.js';
import COLORS from '../../configurations/colors/colors.js';
import FORMS_CONFIGURATION from '../../configurations/forms.js';
import ELEMS_CONFIGURATION from '../../configurations/elems.js';

const personInfoForm = () => {
    const inputConfigurations = FORMS_CONFIGURATION.inputs.personInfoForm;

    const template = `
        <section id="person-info-form" class="person-info-form">
            {{&backButton}}

            {{&title}}

            <div class="person-info-form__sets-nav-block">
                <div class="sets-nav-block__settings-block">
                    <div class="settings-block__profile-header">
                        Профиль
                    </div>
                    <div class="settings-block__settings">
                        <div class="settings__avatar-change-block">
                            <div class="avatar-change-block__description">Ваш аватар:</div>
                            <div class="avatar-change-block__avatar">
                                <img class="avatar__img" src="/graphics/images/avatar.jpg" alt="">
                            </div>
                            <div class="avatar-choice-block__button-change">
                                {{&buttonChangeAvatar}}
                            </div>
                        </div>
                        {{#inputConfigurations}}
                            <div class="settings-block__input">{{&input}}</div>
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
        </section>
    `;

    return Mustache.render(template, {
        inputConfigurations: inputConfigurations,
        backButton() {
            return UIKIT.backButton('Все рестораны', 'main');
        },
        title() {
            return UIKIT.title('Личные данные');
        },
        buttonChangeAvatar() {
            return UIKIT.simpleButton('Изменить аватар', COLORS.warm,
                ELEMS_CONFIGURATION.buttons.SMALL, 'profile', 'personInfoSaveButton');
        },
        input () {
            return UIKIT.input(this.title, this.type, this.width, this.placeholder, this.id);
        },
        menu () {
            return UIKIT.profileMenu();
        },
        savePersonInfoChanges () {
            return UIKIT.simpleButton('Сохранить', COLORS.primary,
                ELEMS_CONFIGURATION.buttons.STANDARD, 'profile', 'personInfoSaveButton');
        },
        switcherElement () {
            return UIKIT.switcher();
        },
    });
};

export default personInfoForm;
