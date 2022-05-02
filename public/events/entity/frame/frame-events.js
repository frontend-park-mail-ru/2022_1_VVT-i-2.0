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
            const elem = document.getElementById(e.target.dataset.id);
            const topPos = elem.offsetTop;

            const container = document.getElementsByClassName('content-nav-block__content-block');
            scrollTo(container, topPos, 600);

            // store.actions.getOrderList().then(() => renderAndUpdateURN("/orderHistory"));

            // const cart = {
            //   order: [
            //     {id: 175, price: '249', count: 1},
            //     {id: 176, price: '249', count: 3},
            //     {id: 165, price: '469', count: 1},
            //     {id: 168, price: '289', count: 1},
            //     {id: 167, price: '149', count: 1},
            //     {id: 166, price: '139', count: 1},
            //     {id: 170, price: '249', count: 1},
            //     {id: 171, price: '269', count: 1},
            //     {id: 174, price: '279', count: 1},
            //     {id: 173, price: '269', count: 1},
            //     {id: 172, price: '309', count: 1},
            //   ],
            //   totalPrice: 3417,
            // };

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
                },
              ],
              total: 26000,
              minPrice: 1300,
            };

            const restName = 'Dostaевский';

           elem.outerHTML += components.additionalStatusOrderInfo(props);

            console.log(elem.outerHTML);
            // e.target.style.height = '561px';
          },
        },
    ]
  };
};
