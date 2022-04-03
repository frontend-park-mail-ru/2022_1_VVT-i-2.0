const title = (title) => {
  const template = `
    <div class="title">
      <h1>{{title}}</h1>
      <hr>
    </div>
  `;
  return Mustache.render(template, { title });
};

export default title;
