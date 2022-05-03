import UIKIT from "../../ui-kit/import.js";

const orderStatusList = (props) => {
    const template = `
        {{#props}}
            {{&statusInfo}}
        {{/props}}
        <div class="empty-block"></div>
  `;

    return Mustache.render(template, {
        props,
        statusInfo() {
            return UIKIT.orderStatus(this);
        },
    });
};

export default orderStatusList;
