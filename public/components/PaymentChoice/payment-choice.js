const paymentTypes = {
    paymentType: [
        'Онлайн оплата', 'Google Pay', 'Sber Pay'
    ]
};

const paymentChoice = () => {
    const template = `
        <div class="payment-block">
            <div>Оплата</div>
            <div class="payment-type">
                {{#paymentTypes}}
                    <div>{{this.paymentType}}</div>
                {{/paymentTypes}}
            </div>
        </div>
    `;

    return Mustache.render(template, {});
};

export default paymentChoice;
