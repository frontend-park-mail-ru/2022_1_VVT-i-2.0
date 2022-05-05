import UIKIT from "../../ui-kit/import.js";

const profileTemplate = (title, content, IsPersonInfoForm = false) => {
    const template = `
        {{#IsPersonInfoForm}}
        <form id="person-info-form" class="profile-template-form" method="POST" enctype="multipart/form-data">
        {{/IsPersonInfoForm}}
        
        {{^IsPersonInfoForm}}
        <div class="profile-template-form">
        {{/IsPersonInfoForm}}
        
            {{&backButton}}

            {{&title}}

            <div class="form__content-nav-block">
                <div class="content-nav-block__content-block">
                    {{{content}}}
                </div>

                <div class="content-nav-block__navigation-block">
                    {{&menu}}
                </div>
            </div>
            
        {{^IsPersonInfoForm}}
        <div>
        {{/IsPersonInfoForm}}
        
        {{#IsPersonInfoForm}}
        <form>
        {{/IsPersonInfoForm}}
    `;

    return Mustache.render(template, {
        IsPersonInfoForm,
        content,
        backButton() {
            return UIKIT.backButton("Все рестораны", "main");
        },
        title() {
            return UIKIT.underlinedTitle(title);
        },
        menu() {
            return UIKIT.profileMenu();
        },
    });
};

export default profileTemplate;
