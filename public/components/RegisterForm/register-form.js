import UIKIT from '../../ui-kit/import.js';

const registerForm = (properties) => {
    const template =  `
        <div id="reg_form">
            <div id="form_name">
                Создать аккаунт
            </div>
            {{#properties}}
                <div <!--class="reg_properties_container"-->>
                    {{&input}}
                </div>
            {{/properties}}
        </div>
    `;

    return Mustache.render(template, {
        properties: properties,
        input() {
            return UIKIT.input(this.property, this.defaultValueProperty);
        },
    });
};

export default registerForm;
