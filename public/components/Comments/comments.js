import UIKIT from "../../ui-kit/import.js";

const comments = (rating, commentsArray) => {
  const template = `
    <div class="comments">
      <div class="comments__header">
        <img class="comments__img" src="/graphics/icons/star.svg" alt="rating">
        <span class="comments__rating">{{rating}}</span>
        <span class="comments__description">
          Рейтинг ресторана складывается из оценок пользователей
        </span>
      </div>

      {{#commentsArray}}
        {{&comment}}
      {{/commentsArray}}
    </div>
  `;
  return Mustache.render(template, {
    rating,
    commentsArray,
    comment() {
      return UIKIT.comment(this.stars, this.text, this.author, this.date);
    },
  });
};

export default comments;
