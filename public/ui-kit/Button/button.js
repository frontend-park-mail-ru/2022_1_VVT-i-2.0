const button = (title, color, href) => {
    const template = `
        <button class="button" style="background-color: {{color}}" data-section="{{href}}">
            {{title}}
        </button>
    `;
    return Mustache.render(template, { title, color, href });
};

export default button;
