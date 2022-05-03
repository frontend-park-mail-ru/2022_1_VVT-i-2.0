const simpleTitle = (title) => {
  const template = `
        <h1 class="simple-title">
            {{title}}
        </h1>
    `;
  return Mustache.render(template, { title });
};

export default simpleTitle;
