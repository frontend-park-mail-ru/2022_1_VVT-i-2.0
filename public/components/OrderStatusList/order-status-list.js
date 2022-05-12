import UIKIT from "../../ui-kit/import.js";

const orderStatusList = (props) => {
  const template = `        
        {{#props}}
            {{&statusInfo}}
        {{/props}}
  `;

    return Mustache.render(template, {
        props,
        statusInfo() {
            return UIKIT.orderStatus(this);
        },
    });
};

export default orderStatusList;
