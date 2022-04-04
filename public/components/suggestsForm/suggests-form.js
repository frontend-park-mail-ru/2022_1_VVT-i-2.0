const suggestsForm = (props) => {
  const template = `
    <div id="suggest-form">
      {{#suggests}}
        <div class="suggest-row">
          <div></div>
          <div class="suggest">
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
