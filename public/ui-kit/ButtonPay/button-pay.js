const buttonPay = () => {
    return `
        <div id="button-pay" class="uikit__button-pay">
            <div class="button-pay__block-img">
                <img class="button-pay__img" src="icons/google_pay.svg" alt="">
                <div class="button-pay__payment-separator"></div>
                <img class="button-pay__img" src="icons/master_card.svg" alt="">
            </div>
        </div>
    `;
};

export default buttonPay;
