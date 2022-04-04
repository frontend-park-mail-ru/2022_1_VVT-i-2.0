import UIKIT from '../../ui-kit/import.js';
import COLORS from '../../utils/colors.js';

const personInfoForm = () => {
    const properties = [
        {
            title: 'Имя',
            placeholder: 'Сергей',
            id: 'profileName'
        },
        {
            title: 'Телефон',
            placeholder: '+7(',
            id: 'profilePhone'
        },
        {
            title: 'Электронная почта',
            type: 'email',
            placeholder: 'Введите почту',
            id: 'profileEmail'
        },
    ];

    const template = `
        <div id="person-info-form">
            {{&backButton}}

            {{&title}}

            <div id="settings-and-nav-block">
                <div>
                    <div id="profile-header">
                        Профиль
                    </div>
                    <div id="setting-block">
                        {{#properties}}
                            {{&input}}
                        {{/properties}}
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
                {{&switcherElement}}
            </div>
        </div>
    `;

    return Mustache.render(template, {
        properties: properties,
        backButton() {
            return UIKIT.backButton('Все рестораны', 'main');
        },
        title() {
            return UIKIT.title('Личные данные');
        },
        input () {
            return UIKIT.input(this.title, this.type, this.placeholder, this.id);
        },
        menu () {
            return UIKIT.profileMenu();
        },
        savePersonInfoChanges () {
            return UIKIT.button('Сохранить', COLORS.primary, 'profile', 'personInfoSaveButton');
        },
        switcherElement () {
            return UIKIT.switcher();
        },
    });
};

export default personInfoForm;
