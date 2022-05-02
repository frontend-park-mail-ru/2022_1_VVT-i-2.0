const commentsBlock = (rating, count) => {
  const template = `
    <div class="comments-block">
      <div class="comments-block__value">
        <img class="comments-block__img" src="/graphics/icons/star.svg" alt="rating">
        {{rating}} · {{count}} отзывов
      </div>
    </div>
  `;
  return Mustache.render(template, { rating, count });
};

export default commentsBlock;
