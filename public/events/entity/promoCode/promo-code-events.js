import { renderAndUpdateURN } from "../../../render/render";

export const getPromoCodeEvents = () => {
  return [
    {
      type: "click",
      selector: "class",
      listener(app, store, e) {
        renderAndUpdateURN('dishes/' + e.target.dataset.rest);
      },
    },
  ];
};
