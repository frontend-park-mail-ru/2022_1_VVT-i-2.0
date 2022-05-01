const category = (title) => {
  const template = `
    <div class="category" data-title="{{title}}">
      <div class="category__title" data-title="{{title}}">{{title}}</div>
    </div>
  `;
  return Mustache.render(template, { title });
};

export default category;
