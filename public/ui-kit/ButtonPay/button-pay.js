const buttonPay = (widthInPercent = 100) => {
  const template = `
    <div id="buttonPay" class="button-pay" style="width: {{widthInPercent}}%">
      <div class="button-pay__text">
        Оплатить заказ
      </div>
    </div>
  `;

  return Mustache.render(template, {
    widthInPercent
  });
};

export default buttonPay;
