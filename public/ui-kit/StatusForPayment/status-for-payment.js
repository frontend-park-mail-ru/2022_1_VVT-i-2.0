const switcher = (textNotification) => {
    const template = `
        <div class="error-pay">
            <div class="red"></div>
            <div class="text-notification">
                {{textNotification}}
            </div>
        </div>;
    `;

    return Mustache.render(template, textNotification);
};

export default switcher;
