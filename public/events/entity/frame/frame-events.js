import { renderAndUpdateURN } from "../../../render/render.js";

export const getFrameEvents = () => {
  return [
    {
      type: "click",
      selector: "id",
      /**
       * @function Закрывает форму при нажатии на значок 'x'.
       * @param {Object} app - Объект приложения.
       * @param {Event} e - Событие.
       */
      listener(app, store, e) {
        const root = sessionStorage.getItem("root") || "main";
        renderAndUpdateURN(root);
      },
    },
  ];
};
