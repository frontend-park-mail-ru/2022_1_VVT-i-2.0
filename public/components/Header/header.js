const header = () => {
    return `
        <header>
            <div data-section="main">
                <img src="icons/delivery_icon.svg" data-section="main">
                <a data-section="main">Delivery Club</a>
            </div>
            <div id="search">
            </div>
            <div data-section="login">
                <img src="icons/profile.svg" data-section="login">
                <a data-section="login">Войти</a>
            </div>
        </header>
    `;
};

export default header;
