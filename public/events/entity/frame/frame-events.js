import {renderAndUpdateURN} from "../../../render/render.js";
import { additionalOrderInfo, scrollTo } from "./frame-src";

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
            // const root = sessionStorage.getItem("root") || "main";
            store.actions.setSearchStatus(false);

            store.actions.clearRestaurants();
            renderAndUpdateURN("/");
            // renderAndUpdateURN(root);
          },
        },
    ],
    buttonOpenClose: [
        {
          type: "click",
          selector: "class",
          listener(app, store, e) {
            if ((e.target.dataset.id)[0] === 'O') {
              const orderElem = document.getElementById(e.target.dataset.id);
              orderElem.innerHTML = '';
              e.target.dataset.id = e.target.dataset.id.replace('O', '');
              e.target.src = './graphics/icons/keyboard_arrow_down.svg';
              sessionStorage.removeItem('openedAdditionalOrderInfo')
              return;
            }

            const statusLine = document.getElementById(e.target.dataset.id);
            const topPos = statusLine.offsetTop;
            const container = document.getElementsByClassName('content-nav-block__content-block')[0];
            console.log('scroll');
            scrollTo(container, topPos, 600);

            if (sessionStorage.getItem('openedAdditionalOrderInfo') !== e.target.dataset.id) {
              sessionStorage.setItem('openedAdditionalOrderInfo', e.target.dataset.id);
              sessionStorage.setItem('AdditionalOrderInfoSetNow', 'true');

              store.actions.getCertainOrder(e.target.dataset.id).then(() => {
                console.log('add');
                additionalOrderInfo(app, store, e);
              });
            } else {
              console.log('add');
              additionalOrderInfo(app, store, e);
            }
          },
        },
    ],
  };
};
