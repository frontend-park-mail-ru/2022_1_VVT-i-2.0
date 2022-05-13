import UIKIT from "../../ui-kit/import.js";

const createCommentForm = () => {
  const template = `
    <div class="create-comment-form">
      <div class="create-comment-form__title">Ваш комментарий:</div>

      <textarea
        id="comment"
        class="create-comment-form__textarea"
        placeholder="Введите ваш отзыв..."
      ></textarea>

      <div class="create-comment-form__bottom">
        <div class="create-comment-form__stars-block" id="starsBlock" data-count="4">
          <img
            class="create-comment-form__star star"
            src="/graphics/icons/star.svg"
            data-count="1"
          >
          <img
            class="create-comment-form__star star"
            src="/graphics/icons/star.svg"
            data-count="2"
          >
          <img
            class="create-comment-form__star star"
            src="/graphics/icons/star.svg"
            data-count="3"
          >
          <img
            class="create-comment-form__star star"
            src="/graphics/icons/star.svg"
            data-count="4"
          >
          <img
            class="create-comment-form__star star"
            src="/graphics/icons/outlined_star.svg"
            data-count="5"
          >
        </div>

        <button class="create-comment-form__button" id="createComment">Оставить комментарий</button>
      </div>
    </div>
  `;
  return Mustache.render(template, {});
};

export default createCommentForm;
