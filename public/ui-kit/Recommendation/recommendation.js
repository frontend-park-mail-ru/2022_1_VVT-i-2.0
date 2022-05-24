const recommendedDish = (imgPath, productName, weight, info, price, id, restName) => {
  const template = `
    <div class="recommendation">
      <img class="recommendation__img" src="{{imgPath}}">
      <div class="recommendation__name">{{productName}}</div>
      <div class="recommendation__calories-info">
        {{weight}} г · {{info}} ккал
      </div>
      <div class="recommendation__price-bar">
        <div>{{price}} ₽</div>
        <button
          class="recommendation__button-add-to-order addToCart"
          data-id="{{id}}"
          data-rest="{{restName}}"
          data-price="{{price}}"
        >
          В корзину
        </button>
      </div>
    </div>
  `;
  return Mustache.render(template, { imgPath, productName, weight, info, price, id, restName });
};

export default recommendedDish;
