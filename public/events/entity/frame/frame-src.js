import components from "../../../components/import";

const isDeviceMobile = () => {
  return window.innerWidth <= 438;
};

export const scrollTo = (element, to, duration) => {
  if (isDeviceMobile()) {
    to -= 162;
  } else {
    to -= 194;
  }

  let start = element.scrollTop,
    change = to - start,
    currentTime = 0,
    increment = 20;

  const animateScroll = function () {
    currentTime += increment;
    element.scrollTop = Math.easeInOutQuad(
      currentTime,
      start,
      change,
      duration
    );
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
};

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

export const additionalOrderInfo = (app, store, e) => {
  const orderElem = document.getElementById("O" + e.target.dataset.id);

  const order = store.getters.getCertainOrder();
  sessionStorage.setItem("orderNumber", order.orderNumber);
  orderElem.innerHTML = components.additionalStatusOrderInfo(order);

  const buttonImages = document.querySelectorAll("img[data-id]");

  [...buttonImages].forEach((buttonImage) => {
    if (buttonImage.getAttribute("data-id") === e.target.dataset.id) {
      buttonImage.src = "./graphics/icons/keyboard_arrow_up.svg";
      buttonImage.dataset.id = "O" + String(e.target.dataset.id);
    }
  });
};
