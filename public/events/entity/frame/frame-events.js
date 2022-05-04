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
            if ((e.target.dataset.id)[0] === '#') {
              const orderElem = document.getElementById(e.target.dataset.id);
              orderElem.innerHTML = '';
              e.target.dataset.id = e.target.dataset.id.replace('#', '');
              e.target.src = './graphics/icons/keyboard_arrow_down.svg';
              return;
            }

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
            // console.log(props);

            // const props = {
            //   restName: 'Макдональдс',
            //   orderPoints: [
            //     {
            //       description: "Все будет coca-cola.",
            //       id: 245,
            //       imgPath: "http://localhost:8080/static/dishes/345390311.jpeg",
            //       info: 622,
            //       price: "142",
            //       productName: "Кока-кола",
            //       restaurant: 62893,
            //       weight: 350,
            //       count: 3,
            //     },
            //     {
            //       description: "Все будет coca-cola.",
            //       id: 245,
            //       imgPath: "http://localhost:8080/static/dishes/345390311.jpeg",
            //       info: 622,
            //       price: "142",
            //       productName: "Кока-кола",
            //       restaurant: 62893,
            //       weight: 350,
            //       count: 3,
            //     },
            //     {
            //       description: "Все будет coca-cola.",
            //       id: 245,
            //       imgPath: "http://localhost:8080/static/dishes/345390311.jpeg",
            //       info: 622,
            //       price: "142",
            //       productName: "Кока-кола",
            //       restaurant: 62893,
            //       weight: 350,
            //       count: 3,
            //     },
            //   ],
            //   total: 26000,
            //   minPrice: 1300,
            // };
          },
        },
    ],
  };
};
