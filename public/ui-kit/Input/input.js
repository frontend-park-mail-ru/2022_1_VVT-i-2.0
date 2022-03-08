const input = (title, placeholder, id, error = false) => {
    const template = `
        <div class="input-block">
            <div class="title">{{title}}</div>
            <div {{#id}} id={{id}} {{/id}}>
                <input placeholder={{placeholder}}>
                <div class="hidden">Ошибка</div>
            </div>
        </div>
    `;

    return Mustache.render(template, {title, placeholder, id, error});
};

export default input;
