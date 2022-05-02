import {renderAndUpdateURN} from "../../../render/render.js";
import {scrollTo} from "./frame-src";

export const getFrameEvents = () => {
  return {
    closeImg: [
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
    ],
    buttonOpenClose: [
        {
          type: "click",
          selector: "class",
          listener(app, store, e) {
            e.target.style.transition = 'height ease-in-out 2s';

            const topPos = e.target.offsetTop;
            scrollTo(document.getElementsByClassName('content-nav-block__content-block'), topPos-30, 600);

            e.target.style.height = '561px';
            e.target.style.transition = '';
          },
        },
    ]
  };
};
