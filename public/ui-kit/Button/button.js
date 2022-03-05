const button = (title, color) => {
  const template = `<button class="button" style="background-color: {{color}}">{{title}}</button>`;
  return Mustache.render(template, { title, color });
};

export default button;
