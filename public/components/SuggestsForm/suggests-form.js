const suggestsForm = (props) => {
  const template = `
    <form id="suggest-form" class="suggest-form">
      {{#suggests}}
        <div class="suggest-form__suggest-row">
          <div></div>
          <div class="suggest-row__suggest-address suggestsRow" end="{{end}}">
            {{address}}
          </div>
          <div></div>
          <div></div>
        </div>
      {{/suggests}}
      {{^suggests}}
        <div class="suggest-form__suggest-row">
          <div></div>
          <div class="suggest-row__suggest-address suggestsRow" default="true">
            Мы подберем для вас список доступных ресторанов
          </div>
          <div></div>
          <div></div>
        </div>
      {{/suggests}}
    </form>
  `;
  return Mustache.render(template, { suggests: props.suggests });
};

export default suggestsForm;
