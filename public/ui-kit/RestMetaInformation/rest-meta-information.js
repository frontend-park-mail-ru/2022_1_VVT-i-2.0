/**
 * @function Создает html-строку для создания ui-kit компонента restMetaInformation формы через шаблонатор Mustache.
 * @param {string} restName - название поля input.
 * @param {string} timeToDeliver - значение атрибута type тега <input>.
 * @param {string} price - значение атрибута placeholder тега <input>.
 * @param {string} rating - рейтинг ресторана.
 * @return {string} HTML строка для отрисовки ui-kit компонента restMetaInformation.
 */
const restMetaInformation = (restName, timeToDeliver, price, rating) => {
    const template = `
        <div class="rest-icon__rest-meta-info-block">
            <div class="rest-icon__rest-name">
                {{restName}}
            </div>
            <div class="rest-icon__meta-info">
                <div class="meta-info__param">
                    <div class="meta-info__param-value">
                        {{timeToDeliver}}   
                    </div>
                </div>
                <div class="meta-info__param">
                    <div class="meta-info__param-value">
                        {{price}}
                    </div>
                </div>
                <div class="meta-info__param">
                    <div class="meta-info__param-value">
                        <img src="/graphics/icons/star.svg" alt="rating">
                        <span class="meta-info__rating">{{rating}}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    return Mustache.render(template, {restName, timeToDeliver, price, rating});
};

export default restMetaInformation;
