import {renderAndUpdateURN} from "../../../render/render.js";
import {scrollTo} from "./frame-src";
import components from '../../../components/import';
import {getCertainOrder} from "../../../store/actions/actions";

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
            if ((e.target.dataset.id)[0] === '#') {
              const orderElem = document.getElementById(e.target.dataset.id);
              orderElem.innerHTML = '';
              e.target.dataset.id = e.target.dataset.id.replace('#', '');
              e.target.src = './graphics/icons/keyboard_arrow_down.svg';
              return;
            }

            sessionStorage.setItem('openedAdditionalOrderInfo', e.target.dataset.id);
            // console.log('set openedAdditionalOrderInfo in', e.target.dataset.id);

            const statusLine = document.getElementById(e.target.dataset.id);
            const topPos = statusLine.offsetTop;

            const container = document.getElementsByClassName('content-nav-block__content-block')[0];
            scrollTo(container, topPos-186, 600);

            store.actions.getCertainOrder(e.target.dataset.id).then(() => {
              const orderElem = document.getElementById('#'+e.target.dataset.id);
              orderElem.innerHTML = components.additionalStatusOrderInfo(store.getters.getCertainOrder());

              const buttonImages = document.querySelectorAll('img[data-id]');

              [...buttonImages].forEach((buttonImage) => {
                if (buttonImage.getAttribute('data-id') === e.target.dataset.id) {
                  buttonImage.src = './graphics/icons/keyboard_arrow_up.svg';
                  buttonImage.dataset.id = '#'+String(e.target.dataset.id);
                }
              });
            });
          },
        },
    ],
  };
};
