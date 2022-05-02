const commentsBlock = (slug, rating, count) => {
  const template = `
    <div class="comments-block" data-section="{{href}}">
      <div class="comments-block__value" data-section="{{href}}">
        <img class="comments-block__img" src="/graphics/icons/star.svg" alt="rating" data-section="{{href}}">
        {{rating}} · {{count}} отзывов
      </div>
    </div>
  `;
  return Mustache.render(template, {
    rating, count, href() {
      return `/comments/${slug}`;
    }
  });
};

export default commentsBlock;
