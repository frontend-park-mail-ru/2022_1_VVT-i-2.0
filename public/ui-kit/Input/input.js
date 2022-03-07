const input = (title, placeholder, error = false) => {
  const template = `
    <div class="input-block">
      <div class="title">{{ title }}</div>
      <input placeholder={{placeholder}} {{#error}} class="error" {{/error}}>
      {{#error}}<div class="error">Ошибка</div>{{/error}}
    </div>
  `;
  return Mustache.render(template, { title, placeholder, error });
};

export default input;
