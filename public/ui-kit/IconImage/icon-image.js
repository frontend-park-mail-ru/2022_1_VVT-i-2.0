/**
 * @function Создает html-строку для создания ui-kit компонента iconImage через шаблонатор Mustache.
 * @param {string} imgPath - значение атрибута src тега <img> (путь до изображения).
 * @param {string} restName - Имя ресторана.
 * @return {string} HTML строка для отрисовки ui-kit компонента iconImage.
 */
const iconImage = (imgPath, restName) => {
    const template = `
        <img class="rest_img" src={{imgPath}} alt={{restName}}>
    `;
    return Mustache.render(template, {imgPath, restName});
};

export default iconImage;
