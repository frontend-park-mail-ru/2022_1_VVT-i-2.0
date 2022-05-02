const comment = (stars, text, author, date) => {
  const template = `
    <div class="comment">
      <img class="comment__img" src="/graphics/icons/star.svg" alt="rating">
      <span class="comment__stars">{{stars}}</span>
      <div>
        <div class="comment__text">{{text}}</div>
        <div>
          <span class="comment__author">{{author}}</span>
          <span class="comment__date">{{date}}</span>
        </div>
      </div>
    </div>
  `;
  return Mustache.render(template, { stars, text, author, date });
};

export default comment;
