const paymentTypes = [
    'Онлайн оплата', 'Google Pay', 'Sber Pay'
];

const paymentChoice = () => {
    const template = `
        <div class="payment-block">
            <div>Оплата</div>
            <div class="payment-type">
                {{#paymentTypes}}
                    <div>{{.}}</div>
                {{/paymentTypes}}
            </div>
        </div>
    `;

    return Mustache.render(template, { paymentTypes });
};

export default paymentChoice;
