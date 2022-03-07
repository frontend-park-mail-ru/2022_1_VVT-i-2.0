const mainLink = (title) => {
    const template = `
        <h1><a class="main-link">{{title}}</a></h1>
    `;
    return Mustache.render(template, {title});
}

export default mainLink;
