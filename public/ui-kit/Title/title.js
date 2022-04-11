const title = (title) => {
  const template = `
    <div class="form-title">
      <h1 class="form-title__title-name">{{title}}</h1>
      <hr>
    </div>
  `;
  return Mustache.render(template, { title });
};

export default title;
