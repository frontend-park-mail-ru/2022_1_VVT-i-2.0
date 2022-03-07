const input = (title, placeholder, id, error = false) => {
    const template = `
        <div class="input-block">
            <div class="title">{{ title }}</div>
            <input
                {{#id}} id={{id}} {{/id}}
                placeholder={{placeholder}}
                {{#error}} class="error" {{/error}}
            >
            {{#error}}<div class="error">Ошибка</div>{{/error}}
        </div>
    `;
    return Mustache.render(template, {title, placeholder, id, error});
};

export default input;
