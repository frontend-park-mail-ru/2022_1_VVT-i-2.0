const input = (title, error = false) => {
  const template = `
    <div class="input-block">
      <div class="title">{{title}}</div>
      <input {{#error}}class="error"{{/error}}>
      {{#error}}<div class="error">Ошибка</div>{{/error}}
    </div>
  `;
  return Mustache.render(template, { title, error });
};

export default input;
