export const comment = () => {
  return {
    star: [
      {
        type: "click",
        selector: "class",
        listener(app, store, e) {
          const { target } = e;

          const count = parseInt(target.dataset.count, 10);
          const starsBlock = document.getElementById('starsBlock');

          Array
            .from(starsBlock.children)
            .filter((_, index) => index < count)
            .forEach((node) => {
              node.classList.add("create-comment-form__star");
              node.classList.remove("create-comment-form__outlined-star");
              node.src = "/graphics/icons/star.svg";
            });

          Array
            .from(starsBlock.children)
            .filter((_, index) => index + 1 > count)
            .forEach((node) => {
              node.classList.add("create-comment-form__outlined-star");
              node.classList.remove("create-comment-form__star");
              node.src = "/graphics/icons/outlined_star.svg";
            });

          starsBlock.dataset.count = count;
        }
      },
    ],
  };
};