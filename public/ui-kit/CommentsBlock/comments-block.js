const commentsBlock = (slug, rating, reviewCount) => {
  const template = `
    <div class="comments-block" data-section="{{href}}">
      <div class="comments-block__value" data-section="{{href}}">
        <img class="comments-block__img" src="/graphics/icons/star.svg" alt="rating" data-section="{{href}}">
        {{rating}} · {{reviewCount}} отзывов
      </div>
    </div>
  `;
  return Mustache.render(template, {
    rating,
    reviewCount,
    href() {
      return `/comments/${slug}`;
    },
  });
};

export default commentsBlock;
