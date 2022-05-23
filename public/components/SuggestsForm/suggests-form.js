const suggestsForm = (props) => {
  const template = `
    <form id="suggest-form" class="suggest-form">
      {{#suggests}}
        <div class="suggest-form__suggest-row">
          <div class="suggest-form__suggest-empty"></div>
          <div class="suggest-form__suggest-address suggestsRow" end="{{end}}">
            {{address}}
          </div>
          {{#auth}}
            <div class="suggest-form__suggest-empty"></div>
          {{/auth}}
          <div class="suggest-form__suggest-empty"></div>
          <div class="suggest-form__suggest-empty"></div>
        </div>
      {{/suggests}}
      {{^suggests}}
        <div class="suggest-form__suggest-row">
          <div class="suggest-form__suggest-empty"></div>
          <div class="suggest-form__suggest-address suggestsRow" default="true">
            Мы подберем для вас список доступных ресторанов
          </div>
          {{#auth}}
            <div class="suggest-form__suggest-empty"></div>
          {{/auth}}
          <div class="suggest-form__suggest-empty"></div>
          <div class="suggest-form__suggest-empty"></div>
        </div>
      {{/suggests}}
    </form>
  `;
  return Mustache.render(template, { auth: props.auth, suggests: props.suggests });
};

export default suggestsForm;
