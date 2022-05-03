const suggestsForm = (props) => {
  const isMobile = window.screen.width < 920;

  const template = `
    <form id="suggest-form" class="suggest-form">
      {{#suggests}}
        <div class="suggest-form__suggest-row">
          {{^isMobile}}<div></div>{{/isMobile}}
          <div class="suggest-row__suggest-address suggestsRow" end="{{end}}">
            {{address}}
          </div>
          {{^isMobile}}
            {{#auth}}
              <div></div>
            {{/auth}}
          {{/isMobile}}
          {{^isMobile}}<div></div>{{/isMobile}}
        </div>
      {{/suggests}}
      {{^suggests}}
        <div class="suggest-form__suggest-row">
          {{^isMobile}}<div></div>{{/isMobile}}
          <div class="suggest-row__suggest-address suggestsRow" default="true">
            Мы подберем для вас список доступных ресторанов
          </div>
          {{^isMobile}}
            {{#auth}}
              <div></div>
            {{/auth}}
          {{/isMobile}}
          {{^isMobile}}<div></div>{{/isMobile}}
        </div>
      {{/suggests}}
    </form>
  `;
  return Mustache.render(template, { isMobile, auth: props.auth, suggests: props.suggests });
};

export default suggestsForm;
