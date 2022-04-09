const paymentTypes = [
    'Онлайн оплата', 'Google Pay', 'Sber Pay'
];

const paymentChoice = () => {
    const template = `
        <div class="ordering-form__payment-choice-block">
            <div class="payment-choice-block__payment-types-block">
                {{#paymentTypes}}
                    <div class="payment-types-block__payment-type">{{.}}</div>
                {{/paymentTypes}}
            </div>
        </div>
    `;

    return Mustache.render(template, { paymentTypes });
};

export default paymentChoice;
