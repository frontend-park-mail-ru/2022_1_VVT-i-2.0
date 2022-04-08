const suggestsForm = (props) => {
  const template = `
    <div id="suggest-form" class="suggest-form">
      {{#suggests}}
        <div class="suggest-form__suggest-row">
          <div></div>
          <div class="suggest-form__suggest-address">
            {{.}}
          </div>
          <div></div>
          <div></div>
        </div>
      {{/suggests}}
    </div>
  `;
  return Mustache.render(template, { suggests: props.suggests });
};

export default suggestsForm;
