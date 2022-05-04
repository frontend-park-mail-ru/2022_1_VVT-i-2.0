import UIKIT from "../../ui-kit/import.js";
import COLORS from "../../configurations/colors/colors.js";
import FORMS_CONFIGURATION from "../../configurations/forms.js";
import ELEMS_CONFIGURATION from "../../configurations/elems.js";
import { NumberPhoneFormat } from "../../events/entity/phone/phone-src";

const personInfoForm = ({ name, phone, email }, avatar) => {
  const inputConfigurations = FORMS_CONFIGURATION.inputs.personInfoForm;

  const template = `
      <div class="content-block__profile-header">
          Профиль
      </div>
      <div class="content-block__content">
          <div class="content__avatar-change-block">
              <div class="avatar-change-block__description">Ваш аватар:</div>
              <div class="avatar-change-block__avatar">
                  <img id="user-avatar-preview" src="{{avatar}}" class="avatar__img" alt="avatar">
              </div>
              <div class="avatar-choice-block__button-change">
                  {{&buttonChangeAvatar}}
              </div>
          </div>
          {{#inputConfigurations}}
              <div class="content-block__input">{{&input}}</div>
          {{/inputConfigurations}}
          <div id="button-save-content" class="content-block__button-save-content">
              {{&savePersonInfoChanges}}
          </div>
      </div>
  `;

  return Mustache.render(template, {
    inputConfigurations,
    avatar,
    buttonChangeAvatar() {
      return UIKIT.simpleButton(
        "Изменить аватар",
        COLORS.grey,
        ELEMS_CONFIGURATION.buttons.SMALL,
        "",
        "changeAvatarButton",
        true
      );
    },
    input() {
      let value = name;
      if (this.id === "profilePhone") {
        value = NumberPhoneFormat.formatPhone(phone);
      } else if (this.id === "profileEmail") {
        value = email;
      }
      const readonly = this.id === "profilePhone";

      return UIKIT.input(
        this.title,
        this.type,
        this.width,
        this.placeholder,
        this.id,
        this.name,
        value,
        readonly
      );
    },
    savePersonInfoChanges() {
      return UIKIT.simpleButton(
        "Сохранить",
        COLORS.primary,
        ELEMS_CONFIGURATION.buttons.STANDARD,
        "",
        "personInfoSaveButton"
      );
    },
  });
};

export default personInfoForm;
