const input = (title, type, placeholder, id, error = 'Ошибка') => {
    const template = `
        <div class="input-block">
            <div class="title">{{title}}</div>
            <div {{#id}} id={{id}} {{/id}}>
                <input placeholder="{{placeholder}}" type="{{type}}">
                <div class="hidden">{{error}}</div>
            </div>
        </div>
    `;

    return Mustache.render(template, {title, type, placeholder, id, error});
};

export default input;
