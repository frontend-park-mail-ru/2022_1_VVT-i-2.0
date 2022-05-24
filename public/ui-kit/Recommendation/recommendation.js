const recommendedDish = (imgPath, productName, price, id, restName) => {
  const template = `
    <div class="recommendation">
      <img class="recommendation__img" src="{{imgPath}}">
      <div class="recommendation__name">{{productName}}</div>
      <div class="recommendation__price-bar">
        <button
          class="recommendation__button-add-to-order addToCart"
          data-id="{{id}}"
          data-rest="{{restName}}"
          data-price="{{price}}"
        >
          + {{price}} ₽
        </button>
      </div>
    </div>
  `;
  return Mustache.render(template, { imgPath, productName, price, id, restName });
};

export default recommendedDish;
