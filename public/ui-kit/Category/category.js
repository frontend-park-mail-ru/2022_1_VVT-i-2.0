const category = (title, selected) => {
  const template = `
    <div class="category {{#selected}}category_selected{{/selected}}" data-title="{{title}}">
      <div class="category__title" data-title="{{title}}">{{title}}</div>
    </div>
  `;
  return Mustache.render(template, { title, selected });
};

export default category;
