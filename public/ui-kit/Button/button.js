const button = (title, color, href, id) => {
    const template = `
        <button
            {{#id}} id={{id}} {{/id}}
            class="button"
            style="background-color: {{color}}"
            data-section="{{href}}"
        >
            {{title}}
        </button>
    `;
    return Mustache.render(template, {title, color, href, id});
};

export default button;
