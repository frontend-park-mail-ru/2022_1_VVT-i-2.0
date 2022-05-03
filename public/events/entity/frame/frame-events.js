import {renderAndUpdateURN} from "../../../render/render.js";
import {scrollTo} from "./frame-src";
import components from '../../../components/import';

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
              console.log('close');
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

            // store.actions.getOrderList().then(() => renderAndUpdateURN("/orderHistory"));

            const props = {
              restName: 'Макдональдс',
              orderPoints: [
                {
                  description: "Все будет coca-cola.",
                  id: 245,
                  imgPath: "http://localhost:8080/static/dishes/345390311.jpeg",
                  info: 622,
                  price: "142",
                  productName: "Кока-кола",
                  restaurant: 62893,
                  weight: 350,
                  count: 3,
                },
                {
                  description: "Все будет coca-cola.",
                  id: 245,
                  imgPath: "http://localhost:8080/static/dishes/345390311.jpeg",
                  info: 622,
                  price: "142",
                  productName: "Кока-кола",
                  restaurant: 62893,
                  weight: 350,
                  count: 3,
                },
                {
                  description: "Все будет coca-cola.",
                  id: 245,
                  imgPath: "http://localhost:8080/static/dishes/345390311.jpeg",
                  info: 622,
                  price: "142",
                  productName: "Кока-кола",
                  restaurant: 62893,
                  weight: 350,
                  count: 3,
                },
              ],
              total: 26000,
              minPrice: 1300,
            };

            const orderElem = document.getElementById('#'+e.target.dataset.id);
            orderElem.innerHTML += components.additionalStatusOrderInfo(props);
            // const buttonImages = document.querySelectorAll('img[data-id]');

            // [...buttonImages].forEach((buttonImage) => {
            //   if (buttonImage.getAttribute('data-id') === e.target.dataset.id) {
            //     buttonImage.src = './graphics/icons/keyboard_arrow_up.svg';
            //     // buttonImage.classList.remove('buttonOpenOrder');
            //     // buttonImage.classList.add('buttonCloseOrder');
            //     buttonImage.dataset.id = '#'+String(e.target.dataset.id);
            //   }
            // });
            e.target.dataset.id = '#'+String(e.target.dataset.id);
            e.target.src = './graphics/icons/keyboard_arrow_up.svg';


            //
            // e.target.src = "./graphics/icons/keyboard_arrow_up.svg";
            // e.target.classList.remove('buttonOpenOrder');
            // e.target.classList.add('buttonCloseOrder');
            //
            // console.log(e.target, e.target.src);
          },
        },
    ],
    // buttonCloseOrder: [
    //   {
    //     type: "click",
    //     selector: "class",
    //     listener(app, store, e) {
    //       console.log('UTAAA');
    //       // console.log(e.target.dataset.id);
    //
    //       // const statusOrderInfo = document.getElementById(e.target.dataset.id);
    //
    //       // console.log(statusOrderInfo);
    //
    //       // statusOrderInfo.outerHTML = '';
    //     },
    //   },
    // ]
  };
};
