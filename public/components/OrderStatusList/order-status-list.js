import UIKIT from "../../ui-kit/import.js";

const orderStatusList = (props) => {
  const template = `        
        {{#props}}
            {{&statusInfo}}
        {{/props}}
        {{^props}}
            {{&emptyList}}
        {{/props}}
  `;

  return Mustache.render(template, {
    props,
    statusInfo() {
      return UIKIT.orderStatus(this);
    },
    emptyList() {
      return `<div class="empty-list">Ваш список заказов пуст</div>`;
    },
  });
};

export default orderStatusList;
